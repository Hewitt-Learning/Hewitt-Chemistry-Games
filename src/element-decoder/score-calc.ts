import { Level } from "./components/periodic-table";

/**
 * Calculate components of the score based on current state of game (curr score, time to match curr element, and current streak number)
 * @param time - the time it has taken to match the current element (gamestate variable)
 * @param score - the current score of the game at the time of calling this function (game-state variable)
 * @param streak - the number of correct matches in a row, part of the game-state
 */
export const computeNewScore = (
  time: number,
  score: number,
  streak: number,
  level: Level,
) => {
  const baseCorrectPoints = 1000;
  
  // return invidiual elements of new score calculation:
  // a base number of points, streakBonus, and timeBonus per correct match.
  return [baseCorrectPoints, streakBonusCalc(streak), timeBonus(time, level)];
};

/**
 * Gets the streak bonus value to add to the score for the current correct match
 * @param streak a number signifying current streak of correct matches in a row
 * @returns returns the bonus calculated based on the streak number
 */
const streakBonusCalc = (streak: number) => {
  let streakBonus = 0;
  // Set streakBonus amount based on number of correct matches in a row, max bonus is 500 points.
  if (streak === 1) {
    streakBonus = 10;
  } else if (streak === 2) {
    streakBonus = 50;
  } else if (streak === 3) {
    streakBonus = 150;
  } else if (streak === 4) {
    streakBonus = 300;
  } else if (streak > 4) {
    streakBonus = 500;
  }
  streak++;
  return streakBonus;
};

/**
 * Calculates bonus according to amount of time it takes to match the element.
 * Higher bonus is given for finding the elements correctly more quickly,
 * lower bonus given for slower match. Uses exponential decay for the bonus amount based on the time.
 * @param time - time that the user has taken to correctly match in seconds
 */
const timeBonus = ( time: number, level: Level) => {
  const timeBonusMax = 1000; //the maximum number of points that can be added (e.g. quickest match = 0 seconds)
  let duration = 1000;
  if (level == Level.Beginner) {
    duration = 25;
  } else if (level == Level.Intermediate) {
    duration = 50;
  } else if (level == Level.Advanced) {
    duration = 100;
  } else if (level == Level.Compound){
    duration = 30;
  }

  const decay = 1 / duration;
  const bonus = timeBonusMax * decay * (duration - time);
  return Math.round(Math.max(bonus, 0));
  
  //return Math.round(Math.max(timeBonusMax * Math.exp(- 1 * duration)), 0);
  //const bonus = timeBonusMax - Math.floor(time / duration);
  //return Math.round(timeBonusMax * Math.exp(-decayRate * time));
  //return Math.round(Math.max(bonus, 0));
};

/*
const runTime = (time: number, level: Level) => {
  const timeBonusMax = 1000; //the maximum number of points that can be added (e.g. quickest match = 0 seconds)
  let decayRate = 1.0;
  if (level == Level.Beginner) {
    decayRate = 0.1;
  } else if (level == Level.Intermediate) {
    decayRate = 0.5;
  } else if (level == Level.Advanced) {
    decayRate = 0.8;
  }

  return Math.round(timeBonusMax * Math.exp(-decayRate * time));
  return Math.round(timeBonusMax * Math.exp(-decayRate * time));
};
*/