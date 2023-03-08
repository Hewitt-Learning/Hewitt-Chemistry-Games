import { periodicTable } from "../periodic-table";
import { letterMapNormalized } from "./letter-definitions";

/** enum to make it more clear in our code what the status of the game board is */
export enum SpaceDef {
  /** Part of a letter occupies this space, and an element is here */
  Occupied = "oc",
  /** An element is here, but no letter occupies this space */
  NotOccupied = "el",
  /** No element or letter occupies this space */
  Invalid = "  ",
}

/**
 * placeWord is the function that takes a word and places it onto a 2d array representing the periodic table, if the word fits
 * @param word A word in the form of a string, generally around 4-5 characters long (to fit on the table)
 * @returns outputs - returns a grid of the word placed on the periodic table, or returns false if the word cannot be placed
 */
export const placeWord = (word: string): SpaceDef[][] | false => {
  const wordUppercase = word.toUpperCase();

  /**
   * gets the initial table without words/letters placed,
   * taken from the periodicTable default definition in ../periodic-table.ts
   */
  const initialTable: SpaceDef[][] = periodicTable.map((row) => {
    return row.map((cell) => {
      if (cell === null) {
        return SpaceDef.Invalid;
      } else {
        return SpaceDef.NotOccupied;
      }
    });
  });

  /** the column index will never decrease, so it is declared here to be used in a while loop */
  let colIndex = 0;

  // loop through and set letter in table
  wordLoop: for (const letter of wordUppercase) {
    const letterDefinition = letterMapNormalized[letter];
    if (letterDefinition === undefined) {
      //error check
      throw new Error(`${letter} is not defined in the letter map`);
    }

    /** finds width of the letter, for checking bounds on the periodic table later*/
    const letterMaxWidth = letterDefinition.reduce((max, row) => {
      if (row.length > max) {
        return row.length;
      } else {
        return max;
      }
    }, 0);

    /** used to return false if letter doesn't fit */
    let letterFits = false;

    // we are determining if letters can be placed by going top to bottom, then left to right. so there is a preference towards
    // placing letters towards the left and top of the table. This is one reason why letters such as "L" are seen out of sync
    // with the rest of the letters if towards the end of the word

    // loop through the columns of periodic table to check if letter can be placed
    while (colIndex < initialTable[0].length - letterMaxWidth + 1) {
      // loop through rows to see if the letter can be placed in this row
      rowLoop: for (
        let rowIndex = 0;
        rowIndex < initialTable.length - letterDefinition.length + 1;
        rowIndex++
      ) {
        // loop through individual rows in the columns
        // starting position is (rowIndex, colIndex)
        // loop through letter definition to see if it fits
        // For each position in the letter definition,
        // If the position is "true", check that the corresponding (row, col) + the starting position (row, col) is unoccupied

        // Loop through the rows of the letter definition & checks if the letter fits
        for (
          let letterDefRow = 0;
          letterDefRow < letterDefinition.length;
          letterDefRow++
        ) {
          const letterRow = letterDefinition[letterDefRow];
          // Loop through the columns of the letter definition
          for (
            let letterDefCol = 0;
            letterDefCol < letterRow.length;
            letterDefCol++
          ) {
            const letterExistsAtThisPosition = letterRow[letterDefCol];
            if (letterExistsAtThisPosition) {
              // Check that the space is unoccupied (and is an element) in the periodic table

              const periodicTableValue =
                initialTable[letterDefRow + rowIndex][letterDefCol + colIndex];

              if (periodicTableValue !== SpaceDef.NotOccupied) {
                continue rowLoop;
              }
            }
          }
        }

        letterFits = true; // The letter has been determined to fit but just needs to be placed

        // place the word since it fits in the spot, as determined above
        for (
          let letterDefRow = 0;
          letterDefRow < letterDefinition.length;
          letterDefRow++
        ) {
          const letterRow = letterDefinition[letterDefRow];
          // Loop through the columns of the letter definition
          for (
            let letterDefCol = 0;
            letterDefCol < letterRow.length;
            letterDefCol++
          ) {
            const letterExistsAtThisPosition = letterRow[letterDefCol];
            if (letterExistsAtThisPosition) {
              initialTable[letterDefRow + rowIndex][letterDefCol + colIndex] =
                SpaceDef.Occupied;
            }
          }
        }

        // we have completed a letter, continue placing the word
        colIndex += letterMaxWidth + 1;
        continue wordLoop;
      }
      colIndex++;
    }

    if (!letterFits) {
      return false;
    }
  }

  return initialTable;
};
