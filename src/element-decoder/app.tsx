import { Level, PeriodicTable } from "./components/periodic-table";
import { useEffect, useState } from "preact/hooks";
import Button from "./components/button";
import "./app.css";
import { ThemeToggle } from "../theme";

export function App() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [showLevel, setShowLevel] = useState(false);

  // when the selectedLevel state changes, useEffect updates and
  // listens for an escape key press when the difficulty options are displays,
  // but only after the difficulty is initially set
  // (e.g. you have to select difficulty the first time you play, but not after)
  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (selectedLevel === null) {
        return;
      }
      if (e.key === "Escape") {
        setShowLevel(false);
      }
    };
    window.addEventListener("keydown", keyListener);
    //cleanup function, called whenever the component is unmounted
    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, [selectedLevel]);

  //handles what happens when the user asks to change difficulty -
  // either the user can change difficulty, or they can be exit the change difficulty screen
  // when the difficulty has previously been selected
  const difficultyChange = () => {
    return (
      <div
        class="difficulty-chooser-wrapper"
        onClick={(e) => {
          // if the click did not originate on the background
          // (e.g. the difficulty selector box), ignore the click
          if (e.target !== e.currentTarget) {
            return;
          }

          if (selectedLevel === null) {
            return;
          }
          setShowLevel(false);
        }}
      >
        <div class="difficulty-chooser">
          <div class="difficulty-chooser-text">Select Difficulty</div>

          <Button onClick={() => handleLevelChange(Level.Beginner)}>
            Beginner
          </Button>
          <Button onClick={() => handleLevelChange(Level.Intermediate)}>
            Intermediate
          </Button>
          <Button onClick={() => handleLevelChange(Level.Advanced)}>
            Advanced
          </Button>
        </div>
      </div>
    );
  };

  const playIntroSound = () => {
    const audio = new Audio("/audio/KH3V1.wav");
    audio.playbackRate = 1.25;
    audio.play();
  };

  const handleStartButtonClick = () => {
    playIntroSound();
    setShowIntro(false);
    setShowLevel(true);
  };

  const handleLevelChange = (level: Level) => {
    playIntroSound();
    setSelectedLevel(level);
    setShowLevel(false);
  };
  return (
    <>
      <ThemeToggle />
      {showIntro && (
        <div class="game-intro">
          <h1>Welcome to Element Decoder!</h1>
          <p>
            Match elements until you spell out a word! When an element is shaded
            in, it has already been matched.
          </p>
          <p>
            Lower difficulties give more information about the element to match,
            whereas higher difficulties give less information.
          </p>
          <Button onClick={handleStartButtonClick}>Start</Button>
        </div>
      )}

      {!showIntro && (
        <>
          {showLevel && difficultyChange()}
          {selectedLevel !== null && (
            <>
              <PeriodicTable
                level={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                setShowLevel={setShowLevel}
              />
              <Button
                onClick={() => {
                  setShowLevel(true);
                }}
              >
                Change Difficulty
              </Button>
            </>
          )}
        </>
      )}
    </>
  );
}
