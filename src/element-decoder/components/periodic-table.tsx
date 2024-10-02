import { periodicTable } from "../periodic-table-data";
import { compoundQuestions } from "../../compound-decoder/compound-data";
import { PeriodicTableElement, CompoundTableElement } from "./periodic-table-element";
import "./periodic-table.css";
import { useGameState, GamePhase } from "../game-state";
import { InfoBox } from "./periodic-table-info-box";
import { Character } from "../app";
import clsx from "clsx";

const playIncorrectSound = () => {
  const audio = new Audio("/audio/wrong.mp3");
  audio.playbackRate = 1.5;
  audio.volume = 2/100;
  audio.play();
};

const playCorrectSound = () => {
  const audio = new Audio("/audio/Click_sound.wav");
  audio.playbackRate = 1.25;
  audio.volume = 5/100;
  audio.play();
};

/** The possible states for each displayed element during the game */

export enum ElementState {
  /** Elements of the current word that have been found */
  FoundElement,
  /** Elements that have not been clicked */
  NotClicked,
  /** Elements that were clicked incorrectly (gets reset after a the correct element is found) */
  WrongElementClicked,

  Compound,  
}

export enum Level {
  Beginner,
  Intermediate,
  Advanced,
  Compound, 
}

interface Props {
  /** A property that describes the difficulty of the game, which determines how the "active" element is displayed to the user */
  level: Level;
  setSelectedLevel: (level: Level | null) => void;
  setShowLevel: (showLevel: boolean) => void;
  selectedCharacter: Character;
}
export const PeriodicTable = ({
  level,
  setSelectedLevel,
  setShowLevel,
  selectedCharacter,
}: Props) => {
  const gameState = useGameState(level);

  const activeElement =
    gameState.activeElement &&
    periodicTable[gameState.activeElement.row][gameState.activeElement.col];

  return (
    <div class="periodic-table-wrapper">
      <div
        class={clsx(
          "periodic-table",
          gameState.gamePhase === GamePhase.CompletedWord &&
            "periodic-table-complete",
        )}
      >
        {/* THE BOX */}
        <InfoBox
          gameState={gameState}
          activeElement={activeElement}
          level={level}
          setSelectedLevel={setSelectedLevel}
          setShowLevel={setShowLevel}
          feedback={gameState.feedback}
          selectedCharacter={selectedCharacter}
        />
        {/* end of THE BOX */}

        {periodicTable.map((row, rowIndex) => {
          // Row is array of elements or null
          return row.map((element, colIndex) => {
            if (element === null) {
              return null;
            }
            // There are two options for how the periodic table is displayed:
            // 1. The player has not yet completed filling out the word
            // 2. The player has completed filling in the word
            // In the first case, we want to render the periodic table so that all of the elements and their details are displayed
            // In the second case, we only want to show the outlines of the elements, and in particular highlight the elements that
            //  were part of the word, so the user can distinguish the word more clearly.
            // This is handled in periodic-table-element.css

            return (
              // Start with the case 1: The user has not completed the word
              <PeriodicTableElement
                style={{ gridColumn: `${colIndex + 1} / span 1`, borderRadius: 10}}
                element={element} 
                onClick={() => {
                  // If it was already found, or already clicked but was wrong, ignore the click
                  if (
                    gameState.elementStates[rowIndex][colIndex] ===
                      ElementState.FoundElement ||
                    gameState.elementStates[rowIndex][colIndex] ===
                      ElementState.WrongElementClicked ||
                    gameState.elementStates[rowIndex][colIndex] ===
                      ElementState.Compound ||
                    gameState.gamePhase === GamePhase.CompletedWord
                  )
                    return;

                  // There is not an element being searched for, so ignore the click
                  // This could happen if you click an element when a word that does not fit in the table is placed
                  // Or if you have completed finding all the elements
                  if (!gameState.activeElement) return;

                  if (
                    rowIndex === gameState.activeElement.row &&
                    colIndex === gameState.activeElement.col
                  ) {
                    // The active (searched-for) element was clicked
                    playCorrectSound();
                    gameState.handleCorrectElementClick();
                  } else {
                    // Wrong element was clicked
                    playIncorrectSound();
                    gameState.handleIncorrectElementClick(rowIndex, colIndex);
                  }
                }}
                elementState={gameState.elementStates[rowIndex][colIndex]}
              />
            );
          });
        })}
      </div>
    </div>
  );
};
