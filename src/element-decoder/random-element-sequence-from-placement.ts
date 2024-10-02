import { SpaceDef } from "./word-placement";
import { periodicTable } from "./periodic-table-data";
import { Compound, compoundQuestions } from "../compound-decoder/compound-data";

export interface RowCol {
  row: number;
  col: number;
}

export interface PlaceData {
  place: RowCol[]; //array of coordinates to place word on table.
  compounds: Compound[]; //list of compounds in list of elements used to form words.
                         //used for displaying the compound to info box display when
                         //compound difficulty is selected.
}
/**
 * @param placement The pre-generated arrangement of elements to find
 * @param rng a function that returns a random number between [0, 1)
 * @returns a randomly shuffled sequence of (row, col) coordinates given a placement,
 * and the compounds used for display.
 */
export const randomElementSequenceFromPlacement = (
  placement: SpaceDef[][],
  rng: () => number,
): PlaceData => {
  // Generate (row, col) for each occupied space in the table
  const elementCoordinates = placement.reduce((output, row, rowIndex) => {
    return [
      ...output,
      ...row
        .map((spaceDef, colIndex) => {
          if (spaceDef === SpaceDef.Occupied)
            return {
              row: rowIndex,
              col: colIndex,
            };
        })
        .filter((v): v is RowCol => v !== undefined),
    ];
  }, [] as RowCol[]);

  // Randomly shuffle the sequence
  for (let i = 0; i < elementCoordinates.length; i++) {
    const tmp = elementCoordinates[i];
    const swapIndex = Math.floor(rng() * elementCoordinates.length);
    elementCoordinates[i] = elementCoordinates[swapIndex];
    elementCoordinates[swapIndex] = tmp;
  }
  /**
    List of compounds available is generated, current capabilites only generate compounds that
    have 2 elements, the algorithm would need to be changed to support more complex complex.
  */

  //Deep copy the elementCoordinates array to eliminate used elements.
  const elemCoordCopy:RowCol[] = JSON.parse(JSON.stringify(elementCoordinates));
  
  /**
   * excludes the elements from being included in future loops.
   * Index is arbitrary, Value is atomic number.
  */
  const usedElements:number[] = []; 
  /** 
   * holds the number identifier of each compound used.
   * index is arbitrary, value is compound question.
  */
  const usedCompounds:Compound[] = [];

  /**
   * Compound Detection Algorithm, finds 2 element compounds given a list of elements.
   */
  for (let i = 0; i < elemCoordCopy.length; i++) {
    //check each compound option
    for (let j = 0; j < compoundQuestions.length; j++) {
      //the first elementCoordinate pair as an atomic number.
      let firstElement = periodicTable[elemCoordCopy[i].row][elemCoordCopy[i].col]?.atomicNumber;
      
      //This checks 2 things.
      //1. That the compound question at index j contains first element, as the first element
      //2. That the firstElement is not already used.
      if ((firstElement === compoundQuestions[j].atomicNumbers[0]) && (!usedElements.includes(firstElement))){
        //Check for the second element in each compound
        for (let k = 0; k < elemCoordCopy.length; k++) {
          let secondElement = periodicTable[elemCoordCopy[k].row][elemCoordCopy[k].col]?.atomicNumber;
          
          //If the second element also matches the compound, and is not already used
          if ((compoundQuestions[j].atomicNumbers[1] === secondElement) && (!usedElements.includes(secondElement))) {
            usedElements.push(compoundQuestions[j].atomicNumbers[0]);
            usedElements.push(compoundQuestions[j].atomicNumbers[1]);
            usedCompounds.push(compoundQuestions[j]);
          }
        }
      }
    }
  }
  //TODO: Remove this console.log(), used for debugging.
  //Running a dev build and selecting a difficulty will show the results in the console log.
  //Note: inspect the page and navigate to console.
  for(let i = 0; i < usedElements.length; i++){
    console.log("Element %d: %d",i,usedElements[i]);
  }

  /*
  * Sorting Algorithm, to put compound pairs in sequential order.
  * Go through each element, when you find the used element search
  * for second element and move it to the corresponding slot.
  */
  for(let i = 0; i < elemCoordCopy.length; i++){
    
    let firstElement = periodicTable[elemCoordCopy[i].row][elemCoordCopy[i].col]?.atomicNumber;
    let index = usedElements.indexOf(Number(firstElement));
    if(index !== -1){ //if element is in usedElements
      
      for(let j = 0; j < usedCompounds.length; j++){ //check each compound if it includes the atomic number
        let atomIndex = usedCompounds[j].atomicNumbers.indexOf(usedElements[index])
        if(atomIndex !== -1){ //if matches
          if(atomIndex === 0){ //if first element is found first
            //check next element to see if pair has already been made
            //if not make pair
            if(i === elemCoordCopy.length-1){
              //if element is at end of array
              //this case should never happen if its pair exists in list.
              //ERROR
            }else{
               let secondElement = periodicTable[elemCoordCopy[i+1].row][elemCoordCopy[i+1].col]?.atomicNumber;
               if(usedCompounds[j].atomicNumbers[1] === secondElement){
                //compound is in order
               }else{
                //search for second element
                for(let k = i; k < elemCoordCopy.length; k++){ //search each index past this one.
                  secondElement = periodicTable[elemCoordCopy[k].row][elemCoordCopy[k].col]?.atomicNumber;
                  if(secondElement === usedCompounds[j].atomicNumbers[1]){
                    elemCoordCopy.push(JSON.parse(JSON.stringify(elemCoordCopy[i+1]))); //deep copy next index to end of array
                    elemCoordCopy[i+1] = JSON.parse(JSON.stringify(elemCoordCopy[k])); //deep copy second element into next index
                    elemCoordCopy.splice(k,1); //remove original second element
                  }
                }
               }
            }

          } else if(atomIndex === 1){ //if second element is found first
            //check previous element to see if pair has already been made
            //if not, make pair
            if(i === elemCoordCopy.length-1){
              //if we make it here, then the previous index should be first element in compound
              //covers edge case of last index
            }else{
              let previousElement;
              
              if(i > 0){
                previousElement = periodicTable[elemCoordCopy[i-1].row][elemCoordCopy[i-1].col]?.atomicNumber;
              }else {
                previousElement = 0;
              }
              
              if(previousElement === usedCompounds[j].atomicNumbers[0]){
                //compound is in order
              }else{
                //search for first element
                for(let k = i; k < elemCoordCopy.length; k++){ //search each index past this one.
                  previousElement = periodicTable[elemCoordCopy[k].row][elemCoordCopy[k].col]?.atomicNumber;
                  if(previousElement === usedCompounds[j].atomicNumbers[0]){
                    //if first element is found
                    if(i === 0){
                      elemCoordCopy.unshift(JSON.parse(JSON.stringify(elemCoordCopy[k]))); //add a deep copy to beginning of array
                      elemCoordCopy.splice(k+1,1); //remove original copy from array (shifted forward due to added value?)
                    }else{
                      elemCoordCopy.push(JSON.parse(JSON.stringify(elemCoordCopy[i+1]))); //add next element to end of array
                      elemCoordCopy[i+1] = JSON.parse(JSON.stringify(elemCoordCopy[i])); //copy second element forward
                      elemCoordCopy[i] = JSON.parse(JSON.stringify(elemCoordCopy[k])); //put first element in first slot
                      elemCoordCopy.splice(k,1); //remove original copy of first element
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }
  
  //interface used to pass both order of elements to be displayed,
  // and the compounds which those elements make. The order is used
  // to properly work the display for compounds. usedCompounds is used in
  // `Compound Display` function in periodic-table-info-box.tsx.

  const ret:PlaceData = {
    place: elemCoordCopy,
    compounds: usedCompounds,
  }
  return ret;
};

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;
  test("Returns a random sequence of (row, col) coordinates", () => {
    const placement = [
      [SpaceDef.Invalid, SpaceDef.Occupied, SpaceDef.NotOccupied],
      [SpaceDef.Occupied, SpaceDef.NotOccupied, SpaceDef.Occupied],
      [SpaceDef.Occupied, SpaceDef.Invalid, SpaceDef.NotOccupied],
    ];

    const rng = mulberry32(1);

    expect(randomElementSequenceFromPlacement(placement, rng))
      .toMatchInlineSnapshot(`
        {
          "compounds": [],
          "place": [
            {
              "col": 0,
              "row": 1,
            },
            {
              "col": 2,
              "row": 1,
            },
            {
              "col": 1,
              "row": 0,
            },
            {
              "col": 0,
              "row": 2,
            },
          ],
        }
      `);
  });

  /**
   * A seedable random number generator. (Math.random is not seedable)
   * Used for tests only, so the output is deterministic/consistent.
   * In the live site, Math.random is used instead.
   * From https://stackoverflow.com/a/47593316/4898045
   */
  const mulberry32 = (seed: number) => {
    return function () {
      var t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
}
