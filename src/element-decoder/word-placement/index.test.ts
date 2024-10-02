import { test, expect } from "vitest";
import { placeWord, SpaceDef } from ".";

//algorithm idea: go down each column starting from the left of the periodic table and
//find a space that the word/current letter can fit into. For "FILL",

/**
 * function to format the placement in the form of a periodic table, just for ease of viewing in testing file
 * @param placement is the placement SpaceDef 2d array of the word, or false if the word cannot be placed
 *@return returns a string that uses "■" to indicate occupied, "□"  to indicate unoccupied, and " " to indicate invalid
 */
const displayPlacement = (placement: SpaceDef[][] | false) => {
  if (!placement) {
    return "Could not fit word into table";
  }
  return (
    "\n" +
    placement
      .map((row) => {
        return row
          .map((cell) => {
            if (cell === SpaceDef.Occupied) {
              return "■";
            } else if (cell === SpaceDef.NotOccupied) {
              return "□";
            } else {
              return " ";
            }
          })
          .join(" ");
      })
      .join("\n") +
    "\n"
  );
};

//run various tests (overflow, invalid characters, standard word testing)
test('Places word "fill" on grid', () => {
  expect(displayPlacement(placeWord("Fill"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     ■ □ □ □ □ □
      □ □                     ■ □ □ □ □ □
      ■ ■ ■ □ ■ ■ ■ □ ■ □ □ □ ■ ■ ■ □ □ □
      ■ □ □ □ □ ■ □ □ ■ □ □ □ □ □ □ □ □ □
      ■ ■ □ □ □ ■ □ □ ■ ■ ■ □ □ □ □ □ □ □
      ■ □ □ □ ■ ■ ■ □ □ □ □ □ □ □ □ □ □ □
      "
    `);

  expect(displayPlacement(placeWord("asdf"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ ■ ■ ■ □ □
      □ □                     □ ■ □ □ □ □
      ■ ■ ■ □ ■ ■ ■ □ ■ ■ ■ □ □ ■ ■ □ □ □
      ■ □ ■ □ ■ □ □ □ ■ □ □ ■ □ ■ □ □ □ □
      ■ ■ ■ □ □ ■ ■ □ ■ □ □ ■ □ □ □ □ □ □
      ■ □ ■ □ ■ ■ ■ □ ■ ■ ■ □ □ □ □ □ □ □
      "
    `);

  expect(displayPlacement(placeWord("bowl"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ □ ■ □ □
      ■ ■                     □ □ □ ■ □ □
      ■ □ ■ □ □ ■ ■ □ □ ■ □ □ □ ■ □ ■ ■ ■
      ■ ■ □ □ ■ □ □ ■ □ ■ □ ■ □ ■ □ □ □ □
      ■ □ ■ □ ■ □ □ ■ □ ■ ■ ■ ■ ■ □ □ □ □
      ■ ■ □ □ □ ■ ■ □ □ □ □ □ □ □ □ □ □ □
      "
    `);
  expect(displayPlacement(placeWord("dog"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ □ □ □ □
      □ □                     □ □ □ □ □ □
      ■ ■ ■ □ □ □ ■ ■ □ □ ■ ■ ■ ■ □ □ □ □
      ■ □ □ ■ □ ■ □ □ ■ □ ■ □ □ □ □ □ □ □
      ■ □ □ ■ □ ■ □ □ ■ □ ■ □ ■ ■ □ □ □ □
      ■ ■ ■ □ □ □ ■ ■ □ □ ■ ■ ■ ■ □ □ □ □
      "
    `);
  expect(displayPlacement(placeWord("cat"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ □ □ □ □
      □ □                     □ □ □ □ □ □
      ■ ■ ■ □ ■ ■ ■ □ ■ ■ ■ □ □ □ □ □ □ □
      ■ □ □ □ ■ □ ■ □ □ ■ □ □ □ □ □ □ □ □
      ■ ■ ■ □ ■ ■ ■ □ □ ■ □ □ □ □ □ □ □ □
      □ □ □ □ ■ □ ■ □ □ □ □ □ □ □ □ □ □ □
      "
    `);
  expect(displayPlacement(placeWord("pond"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ ■ ■ ■ □
      ■ ■                     □ □ ■ □ □ ■
      ■ □ ■ □ □ ■ ■ □ □ ■ □ □ ■ □ ■ □ □ ■
      ■ ■ □ □ ■ □ □ ■ □ ■ ■ □ ■ □ ■ ■ ■ □
      ■ □ □ □ ■ □ □ ■ □ ■ □ ■ ■ □ □ □ □ □
      □ □ □ □ □ ■ ■ □ □ □ □ □ □ □ □ □ □ □
      "
    `);
  expect(displayPlacement(placeWord("none"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ □ ■ ■ ■
      □ □                     □ □ □ ■ ■ □
      ■ □ □ ■ □ □ ■ ■ □ □ ■ □ □ ■ □ ■ □ □
      ■ ■ □ ■ □ ■ □ □ ■ □ ■ ■ □ ■ □ ■ ■ ■
      ■ □ ■ ■ □ ■ □ □ ■ □ ■ □ ■ ■ □ □ □ □
      □ □ □ □ □ □ ■ ■ □ □ □ □ □ □ □ □ □ □
      "
    `);

  expect(displayPlacement(placeWord("home"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ □ ■ ■ ■
      □ □                     □ □ □ ■ ■ □
      ■ □ ■ □ □ ■ ■ □ □ ■ ■ ■ ■ ■ □ ■ □ □
      ■ ■ ■ □ ■ □ □ ■ □ ■ □ ■ □ ■ □ ■ ■ ■
      ■ □ ■ □ ■ □ □ ■ □ ■ □ □ □ ■ □ □ □ □
      □ □ □ □ □ ■ ■ □ □ □ □ □ □ □ □ □ □ □
      "
    `);

  expect(displayPlacement(placeWord("pong"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ ■ ■ ■ ■
      ■ ■                     □ □ ■ □ □ □
      ■ □ ■ □ □ ■ ■ □ □ ■ □ □ ■ □ ■ □ ■ ■
      ■ ■ □ □ ■ □ □ ■ □ ■ ■ □ ■ □ ■ ■ ■ ■
      ■ □ □ □ ■ □ □ ■ □ ■ □ ■ ■ □ □ □ □ □
      □ □ □ □ □ ■ ■ □ □ □ □ □ □ □ □ □ □ □
      "
    `);
  expect(displayPlacement(placeWord("with"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ ■ □ ■ □
      □ □                     □ □ ■ ■ ■ □
      ■ □ □ □ ■ □ ■ ■ ■ □ ■ ■ ■ □ ■ □ ■ □
      ■ □ ■ □ ■ □ □ ■ □ □ □ ■ □ □ □ □ □ □
      ■ ■ ■ ■ ■ □ □ ■ □ □ □ ■ □ □ □ □ □ □
      □ □ □ □ □ □ ■ ■ ■ □ □ □ □ □ □ □ □ □
      "
    `);
  expect(displayPlacement(placeWord("wow"))).toMatchInlineSnapshot(`
      "
      □                                 □
      □ □                     □ □ □ □ □ □
      □ □                     □ □ □ □ □ □
      ■ □ □ □ ■ □ □ ■ ■ □ □ ■ □ □ □ ■ □ □
      ■ □ ■ □ ■ □ ■ □ □ ■ □ ■ □ ■ □ ■ □ □
      ■ ■ ■ ■ ■ □ ■ □ □ ■ □ ■ ■ ■ ■ ■ □ □
      □ □ □ □ □ □ □ ■ ■ □ □ □ □ □ □ □ □ □
      "
    `);
  expect(displayPlacement(placeWord("wwww"))).toMatchInlineSnapshot(
    '"Could not fit word into table"',
  );
  expect(() => placeWord("12")).toThrowErrorMatchingInlineSnapshot(
    '[Error: 1 is not defined in the letter map]',
  );
  expect(displayPlacement(placeWord("wow!"))).toMatchInlineSnapshot(`
    "
    □                                 ■
    □ □                     □ □ □ □ □ ■
    □ □                     □ □ □ □ □ ■
    ■ □ □ □ ■ □ □ ■ ■ □ □ ■ □ □ □ ■ □ □
    ■ □ ■ □ ■ □ ■ □ □ ■ □ ■ □ ■ □ ■ □ ■
    ■ ■ ■ ■ ■ □ ■ □ □ ■ □ ■ ■ ■ ■ ■ □ □
    □ □ □ □ □ □ □ ■ ■ □ □ □ □ □ □ □ □ □
    "
  `);
});
