import { useEffect, useRef, useState } from "preact/hooks";
import { periodicTable } from "./periodic-table-data";
import { ElementState, Level } from "./components/periodic-table";
import {
  randomElementSequenceFromPlacement,
  RowCol,
  PlaceData
} from "./random-element-sequence-from-placement";
//import { placeWord, SpaceDef } from "./word-placement";
import {SpaceDef} from "./word-placement"
import { placeWordCompound as placeWord} from "../compound-decoder/word-placement";
import { computeNewScore } from "./score-calc";


// The 'word-list' is a "magic" import that will pull in the word list from the CMS.
// This happens through a custom vite plugin defined in vite.config.js
import wordList from "word-list";
import { Compound } from "../compound-decoder/compound-data";

const correctFeedback: string[] = [
  "Nice!",
  "Great!",
  "Good Job!",
  "WOW!",
  "Excellent!",
  "Well Done!",
];
const incorrectFeedback: string[] = [
  "Try again!",
  "Whoops!",
  "Almost!",
  "Yikes!",
  "Jinkies!",
  "Not quite!",
];

/**
 * signifies the state of the current "turn", e.g. if the active element is Neon, are we waiting on a click, has there been an incorrect click, or a correct click
 */
export enum GamePhase {
  /** All of the elements for the current word have been found, and it is showing the end screen */
  CompletedWord,
  /** The current guess state is "in progress" e.g. the player has not made an attempt to match, or is between attempts (e.g. tried and failed, fail state ended) */
  SearchingForElement,
  /** The user made an incorrect match, which will prompt a "try again" message for the current element */
  ShowingIncorrect,
  /** The user made a correct match, which will prompt a "congrats" message and then move on to the next active element */
  ShowingCorrect,
}

const getInitialElementStates = () =>
  periodicTable.map((row) => row.map(() => ElementState.NotClicked));

export interface Feedback {
  text: string;
  type: "good" | "bad";
}

const defaultPlaceData: PlaceData = {
  place: [],
  compounds: [],
};

export interface GameState {
  word: string;
  error: string | undefined;
  score: number;
  startTime: number; //keeps track of the start time for the current element
  scoreCompBase: number; //the default bonus for each correct match
  scoreCompStreak: number; //the streak bonus component of score
  scoreCompTime: number; //the time bonus component of score
  /** The row and column corresponding to the element that is being looked for */
  activeElement: RowCol | undefined;
  gamePhase: GamePhase;
  elementStates: ElementState[][];
  handleCorrectElementClick(): void;
  handleIncorrectElementClick(rowIndex: number, colIndex: number): void;
  feedback?: Feedback;
  useCompounds: Compound[];
}

/**
 * This is a Preact Hook that includes all the game logic.
 * It is pulled into the PeriodicTable component,
 * so that all the game logic is separate from the rendering.
 * @param level describes the difficulty of the game, and how the active elements are displayed to the user
 * @returns The game state object,
 * which includes the externally-visible state values themselves,
 * and functions to modify the state.
 */
export const useGameState = (level: Level): GameState => {
  /** Selects a random word from the wordList retrieved from DatoCMS and passed to GameState as a property. If no valid word can be found, returns fill */
  function selectRandomWord() {
    const randomElement = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
    return wordList[randomElement % wordList.length];
  }

  /** The word that will be formed by all the searched-for elements */
  const [word, _setWord] = useState<string>(selectRandomWord());
  /** The arrangement of elements to find on the periodic table grid */
  const [placement, setPlacement] = useState<false | SpaceDef[][]>(false);
  /** The "elements to find" in their randomly-shuffled order */
  const [elementSequence, setElementSequence] = useState<RowCol[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [score, setScore] = useState(0);
  const [scoreCompBase, setScoreCompBase] = useState<number>(0);
  const [scoreCompStreak, setScoreCompStreak] = useState<number>(0);
  const [scoreCompTime, setScoreCompTime] = useState<number>(0);

  /** The number of elements that have been correctly found in a row without mistakes */
  const [streak, setStreak] = useState(0);
  /** The amount of time that has passed since the current element began to be looked for */
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [gamePhase, setGamePhase] = useState<GamePhase>(
    GamePhase.SearchingForElement,
  );
  const timeoutIdRef = useRef<number | null>(null);
  const [useCompounds, setUseCompounds] = useState<Compound[]>([]);

  // Stateful clickable button map, all set to not-clicked at first
  const [elementStates, setElementStates] = useState<ElementState[][]>(
    getInitialElementStates,
  );

  /** Keeps track of the current word(s) displayed as feedback to the user, e.g. "great job!" or "try again!" */
  const [feedback, setFeedback] = useState<Feedback>();

  // Whenever word changes, recompute the placement
  useEffect(() => {
    try {
      setError(undefined);
      setPlacement(placeWord(word));
    } catch (error: any) {
      setError(String(error));
      setPlacement(false);
    }
  }, [word]);
  // Whenever the placement changes
  useEffect(() => {
    // Recompute the randomized element sequence to find
    setScore(0);

    let data: PlaceData = (
      placement 
      ? randomElementSequenceFromPlacement(placement, Math.random) 
      : defaultPlaceData);
    setElementSequence(data.place); //set order of elements
    setUseCompounds(data.compounds); //set list of Compounds found from list of elements
    // Reset the element states (found/wrong elements)
    setElementStates(getInitialElementStates);
    setGamePhase(GamePhase.SearchingForElement); //CHANGE BACK TO GamePhase.SearchingForElement WHEN DONE TESTING
  }, [placement]);

  const activeElement: RowCol | undefined = elementSequence[0];

  const handleCorrectElementClick = () => {
    setFeedback({
      type: "good",
      text: correctFeedback[Math.round(Math.random() * correctFeedback.length)],
    });
    // Update the state to mark it as found and reset wrong elements
    setGamePhase(GamePhase.ShowingCorrect);
    setElementStates((click) =>
      click.map((row, rowIndex) =>
        row.map((elementState, colIndex) => {
          if (
            rowIndex === activeElement.row &&
            colIndex === activeElement.col
          ) {
            //logic for updating score/streak
            let newScore, basePoints, streakBonus, timeBonus; //temps to hold output of score calculation
            const currTime = new Date().getTime(); //ms since enoch
            const elapsedTime = (currTime - startTime) / 1000; //get the time elapsed since last correct match in seconds
            //set temp vars to the values calculated from scoring function
            //[newScore, newStreak] = computeNewScore(elapsedTime, score, streak);
            [basePoints, streakBonus, timeBonus] = computeNewScore(
              elapsedTime,
              score,
              streak,
              level,
            );
            newScore = score + basePoints + streakBonus + timeBonus;
            setScore(newScore);
            setStreak(streak + 1);
            setScoreCompBase(basePoints);
            setScoreCompStreak(streakBonus);
            setScoreCompTime(timeBonus);
            
            /**
             * If there are compounds within the game, check to see if the element clicked is the first element of the pair.
             * If it is change its state to make it orange.
             */
            /*if(usedCompounds !== null){ 
              for(let i = 0; i < usedCompounds.length; i++){
                 if(periodicTable[activeElement.row][activeElement.col]?.atomicNumber == usedCompounds[i].atomicNumbers[0]){
                   //console.log("First Element of Compound Detected!!");
                   return ElementState.Compound;
                 }
                 if(periodicTable[activeElement.row][activeElement.col]?.atomicNumber == usedCompounds[i].atomicNumbers[1]){
                  //console.log("Second Element of Compound Detected!!");
                  return ElementState.FoundElement;
                }
              }
            }*/
        
            return ElementState.FoundElement; //Mark as found
          } else if (
            // Reset any wrong elements clicked -> neutral
            elementState === ElementState.WrongElementClicked
          ) {
            return ElementState.NotClicked;
          } else if(elementState === ElementState.Compound){
            // Set the state of the first element of compound to correct after another thing is clicked
            return ElementState.FoundElement;
          }else {
            // Leave other elements as is
            return elementState;
          }
        }),
      ),
    );

    if (timeoutIdRef.current) {
      window.clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    // Set new startTime for next element to match
    setStartTime(new Date().getTime());
    // Advance the elements-to-find sequence ("activate" the next element to find)
    setElementSequence((seq) => {
      if (seq.length === 1) {
        setGamePhase(GamePhase.CompletedWord);
      } else {
        timeoutIdRef.current = window.setTimeout(() => {
          setGamePhase(GamePhase.SearchingForElement);
          setFeedback(undefined);
        }, 3000);
      }
      return seq.slice(1);
    });
  };

  const handleIncorrectElementClick = (rowIndex: number, colIndex: number) => {
    setFeedback({
      type: "bad",
      text: incorrectFeedback[
        Math.round(Math.random() * incorrectFeedback.length)
      ],
    });
    setStreak(0); //if there is an incorrect match, reset the streak but make no score penalty
    setGamePhase(GamePhase.ShowingIncorrect);
    setElementStates((click) => {
      click[rowIndex][colIndex] = ElementState.WrongElementClicked;
      return [...click];
    });
    if (timeoutIdRef.current) {
      window.clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  };

  return {
    word,
    error,
    score,
    startTime,
    scoreCompBase,
    scoreCompStreak,
    scoreCompTime,
    activeElement,
    gamePhase,
    elementStates,
    handleCorrectElementClick,
    handleIncorrectElementClick,
    feedback,
    useCompounds,
  };
};
