/** manually defined letters and characters */
const letterMap = {
    A: `
xxx
x x
xxx
x x`,
    B: `
xx
x x
xx
x x
xx`,
    C: `
xxx
x
xxx`,
    D: `
xxx
x  x
x  x
xxx`,
    E: `
xxx
xx
x
xxx`,
    F: `
xxx
x  
xx 
x  `,
    G: `
xxxx
x
x xx
xxxx`,
    H: `
x x
xxx
x x`,
    I: `
xxx
 x
 x 
xxx`,
    J: ` 
xxx
  x
x x
xxx`,
    K: `
x x
xx
x x  
`,
    L: `
x  
x  
xxx`,
    M: `
xxxxx
x x x
x   x`,
    N: `
x  x
xx x
x xx`,
    O: `
 xx
x  x
x  x
 xx`,
    P: `
xx
x x
xx
x`,
    Q: `
xxx
x x
xxx
   x`,
    R: `
xx
x x
xx
x x`,
    S: `
xxx
x
 xx
xxx`,
    T: `
xxx
 x
 x`,
    U: `
x  x
x  x
 xx`,
    V: `
x   x
 x x
  x`,
    W: `
x   x
x x x
xxxxx`,
    X: `
x x
 x
x x`,
    Y: `
x x
x x
 x
 x`,
    Z: `
xxxx
  x
 x
xxxx`,
    "!": `
x
x
x

x`,
};
/** All of the letter definitions as 2d arrays of booleans */
export const letterMapNormalized = Object.fromEntries(Object.entries(letterMap).map(([letter, letterDefinition]) => {
    if (letterDefinition.startsWith("\n")) {
        letterDefinition = letterDefinition.slice(1);
    }
    const rows = letterDefinition.split("\n");
    /** converts spaces and x's to trues and falses */
    const normalizedLetter = rows.map((row) => {
        return row.split("").map((letter) => {
            return letter === "x";
        });
    });
    return [letter, normalizedLetter];
}));
// in line test to make sure letter map normalization works.
if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it("check that F is correct", () => {
        expect(letterMapNormalized.F).toMatchInlineSnapshot(`
      [
        [
          true,
          true,
          true,
        ],
        [
          true,
          false,
          false,
        ],
        [
          true,
          true,
          false,
        ],
        [
          true,
          false,
          false,
        ],
      ]
    `);
    });
}
