// vite.config.ts
//import { defineConfig } from "file:///C:/Users/Delgersaikhan/OneDrive/Desktop/Last%20semester/Software%20Engineering/Current%20Branch/Hewitt-Chemistry-Games-Compound-Decoder/node_modules/.pnpm/vite@4.1.3_@types+node@18.14.0/node_modules/vite/dist/node/index.js";
//import preact from "file:///C:/Users/Delgersaikhan/OneDrive/Desktop/Last%20semester/Software%20Engineering/Current%20Branch/Hewitt-Chemistry-Games-Compound-Decoder/node_modules/.pnpm/@preact+preset-vite@2.5.0_@babel+core@7.21.0_preact@10.12.1_vite@4.1.3/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import * as fs from "fs/promises";

// src/element-decoder/periodic-table-data.ts
var periodicTable = [
  [
    //row 1
    {
      name: "Hydrogen",
      atomicNumber: 1,
      symbol: "H",
      atomicMass: 1.01,
      classification: 1 /* Nonmetal */
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      name: "Helium",
      atomicNumber: 2,
      symbol: "He",
      atomicMass: 4,
      classification: 1 /* Nonmetal */
    }
  ],
  //end row 1
  [
    //row 2
    {
      name: "Lithium",
      atomicNumber: 3,
      symbol: "Li",
      atomicMass: 6.94,
      classification: 0 /* Metal */
    },
    {
      name: "Beryllium",
      atomicNumber: 4,
      symbol: "Be",
      atomicMass: 9.01,
      classification: 0 /* Metal */
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      name: "Boron",
      atomicNumber: 5,
      symbol: "B",
      atomicMass: 10.81,
      classification: 2 /* Metalloid */
    },
    {
      name: "Carbon",
      atomicNumber: 6,
      symbol: "C",
      atomicMass: 12.01,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Nitrogen",
      atomicNumber: 7,
      symbol: "N",
      atomicMass: 14.01,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Oxygen",
      atomicNumber: 8,
      symbol: "O",
      atomicMass: 16,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Flourine",
      atomicNumber: 9,
      symbol: "F",
      atomicMass: 19,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Neon",
      atomicNumber: 10,
      symbol: "Ne",
      atomicMass: 20.18,
      classification: 1 /* Nonmetal */
    }
  ],
  //end row 2
  [
    //row 3
    {
      name: "Sodium",
      atomicNumber: 11,
      symbol: "Na",
      atomicMass: 22.99,
      classification: 0 /* Metal */
    },
    {
      name: "Magnesium",
      atomicNumber: 12,
      symbol: "Mg",
      atomicMass: 24.31,
      classification: 0 /* Metal */
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      name: "Aluminum",
      atomicNumber: 13,
      symbol: "Al",
      atomicMass: 26.98,
      classification: 0 /* Metal */
    },
    {
      name: "Silicon",
      atomicNumber: 14,
      symbol: "Si",
      atomicMass: 28.09,
      classification: 2 /* Metalloid */
    },
    {
      name: "Phosphorus",
      atomicNumber: 15,
      symbol: "P",
      atomicMass: 30.97,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Sulfur",
      atomicNumber: 16,
      symbol: "S",
      atomicMass: 32.07,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Chlorine",
      atomicNumber: 17,
      symbol: "Cl",
      atomicMass: 35.45,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Argon",
      atomicNumber: 18,
      symbol: "Ar",
      atomicMass: 39.95,
      classification: 1 /* Nonmetal */
    }
  ],
  //end row 3
  [
    //row 4
    {
      name: "Potassium",
      atomicNumber: 19,
      symbol: "K",
      atomicMass: 39.1,
      classification: 0 /* Metal */
    },
    {
      name: "Calcium",
      atomicNumber: 20,
      symbol: "Ca",
      atomicMass: 40.08,
      classification: 0 /* Metal */
    },
    null,
    {
      name: "Scandium",
      atomicNumber: 21,
      symbol: "Sc",
      atomicMass: 44.96,
      classification: 0 /* Metal */
    },
    {
      name: "Titanium",
      atomicNumber: 22,
      symbol: "Ti",
      atomicMass: 47.87,
      classification: 0 /* Metal */
    },
    {
      name: "Vanadium",
      atomicNumber: 23,
      symbol: "V",
      atomicMass: 50.94,
      classification: 0 /* Metal */
    },
    {
      name: "Chromium",
      atomicNumber: 24,
      symbol: "Cr",
      atomicMass: 52,
      classification: 0 /* Metal */
    },
    {
      name: "Manganese",
      atomicNumber: 25,
      symbol: "Mn",
      atomicMass: 54.94,
      classification: 0 /* Metal */
    },
    {
      name: "Iron",
      atomicNumber: 26,
      symbol: "Fe",
      atomicMass: 55.85,
      classification: 0 /* Metal */
    },
    {
      name: "Cobalt",
      atomicNumber: 27,
      symbol: "Co",
      atomicMass: 58.93,
      classification: 0 /* Metal */
    },
    {
      name: "Nickel",
      atomicNumber: 28,
      symbol: "Ni",
      atomicMass: 58.69,
      classification: 0 /* Metal */
    },
    {
      name: "Copper",
      atomicNumber: 29,
      symbol: "Cu",
      atomicMass: 63.55,
      classification: 0 /* Metal */
    },
    {
      name: "Zinc",
      atomicNumber: 30,
      symbol: "Zn",
      atomicMass: 65.38,
      classification: 0 /* Metal */
    },
    {
      name: "Gallium",
      atomicNumber: 31,
      symbol: "Ga",
      atomicMass: 69.72,
      classification: 0 /* Metal */
    },
    {
      name: "Germanium",
      atomicNumber: 32,
      symbol: "Ge",
      atomicMass: 72.63,
      classification: 2 /* Metalloid */
    },
    {
      name: "Arsenic",
      atomicNumber: 33,
      symbol: "As",
      atomicMass: 74.92,
      classification: 2 /* Metalloid */
    },
    {
      name: "Selenium",
      atomicNumber: 34,
      symbol: "Se",
      atomicMass: 78.97,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Bromine",
      atomicNumber: 35,
      symbol: "Br",
      atomicMass: 79.9,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Krypton",
      atomicNumber: 36,
      symbol: "Kr",
      atomicMass: 83.8,
      classification: 1 /* Nonmetal */
    }
  ],
  //end row 4
  [
    //row 5
    {
      name: "Rubidium",
      atomicNumber: 37,
      symbol: "Rb",
      atomicMass: 85.47,
      classification: 0 /* Metal */
    },
    {
      name: "Strontium",
      atomicNumber: 38,
      symbol: "Sr",
      atomicMass: 87.62,
      classification: 0 /* Metal */
    },
    null,
    {
      name: "Yttrium",
      atomicNumber: 39,
      symbol: "Y",
      atomicMass: 88.91,
      classification: 0 /* Metal */
    },
    {
      name: "Zirconium",
      atomicNumber: 40,
      symbol: "Zr",
      atomicMass: 91.22,
      classification: 0 /* Metal */
    },
    {
      name: "Niobium",
      atomicNumber: 41,
      symbol: "Nb",
      atomicMass: 92.91,
      classification: 0 /* Metal */
    },
    {
      name: "Molybdenum",
      atomicNumber: 42,
      symbol: "Mo",
      atomicMass: 95.95,
      classification: 0 /* Metal */
    },
    {
      name: "Technetium",
      atomicNumber: 43,
      symbol: "Tc",
      atomicMass: 97,
      classification: 0 /* Metal */
    },
    {
      name: "Ruthenium",
      atomicNumber: 44,
      symbol: "Ru",
      atomicMass: 101.07,
      classification: 0 /* Metal */
    },
    {
      name: "Rhodium",
      atomicNumber: 45,
      symbol: "Rh",
      atomicMass: 102.91,
      classification: 0 /* Metal */
    },
    {
      name: "Palladium",
      atomicNumber: 46,
      symbol: "Pd",
      atomicMass: 106.42,
      classification: 0 /* Metal */
    },
    {
      name: "Silver",
      atomicNumber: 47,
      symbol: "Ag",
      atomicMass: 107.87,
      classification: 0 /* Metal */
    },
    {
      name: "Cadmium",
      atomicNumber: 48,
      symbol: "Cd",
      atomicMass: 112.41,
      classification: 0 /* Metal */
    },
    {
      name: "Indium",
      atomicNumber: 49,
      symbol: "In",
      atomicMass: 114.82,
      classification: 0 /* Metal */
    },
    {
      name: "Tin",
      atomicNumber: 50,
      symbol: "Sn",
      atomicMass: 118.71,
      classification: 0 /* Metal */
    },
    {
      name: "Antimony",
      atomicNumber: 51,
      symbol: "Sb",
      atomicMass: 121.76,
      classification: 2 /* Metalloid */
    },
    {
      name: "Tellurium",
      atomicNumber: 52,
      symbol: "Te",
      atomicMass: 127.6,
      classification: 2 /* Metalloid */
    },
    {
      name: "Iodine",
      atomicNumber: 53,
      symbol: "I",
      atomicMass: 126.9,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Xenon",
      atomicNumber: 54,
      symbol: "Xe",
      atomicMass: 131.29,
      classification: 1 /* Nonmetal */
    }
  ],
  //end row 5
  [
    //row 6
    {
      name: "Cesium",
      atomicNumber: 55,
      symbol: "Cs",
      atomicMass: 132.91,
      classification: 0 /* Metal */
    },
    {
      name: "Barium",
      atomicNumber: 56,
      symbol: "Ba",
      atomicMass: 137.33,
      classification: 0 /* Metal */
    },
    {
      name: "57-70",
      atomicNumber: null,
      symbol: "*",
      atomicMass: null,
      classification: 0 /* Metal */
    },
    {
      name: "Lutetium",
      atomicNumber: 71,
      symbol: "Lu",
      atomicMass: 174.97,
      classification: 0 /* Metal */
    },
    {
      name: "Hafnium",
      atomicNumber: 72,
      symbol: "Hf",
      atomicMass: 178.49,
      classification: 0 /* Metal */
    },
    {
      name: "Tantalum",
      atomicNumber: 73,
      symbol: "Ta",
      atomicMass: 180.95,
      classification: 0 /* Metal */
    },
    {
      name: "Tungsten",
      atomicNumber: 74,
      symbol: "W",
      atomicMass: 183.84,
      classification: 0 /* Metal */
    },
    {
      name: "Rhenium",
      atomicNumber: 75,
      symbol: "Re",
      atomicMass: 186.21,
      classification: 0 /* Metal */
    },
    {
      name: "Osmium",
      atomicNumber: 76,
      symbol: "Os",
      atomicMass: 190.2,
      classification: 0 /* Metal */
    },
    {
      name: "Iridium",
      atomicNumber: 77,
      symbol: "Ir",
      atomicMass: 192.22,
      classification: 0 /* Metal */
    },
    {
      name: "Platinum",
      atomicNumber: 78,
      symbol: "Pt",
      atomicMass: 195.08,
      classification: 0 /* Metal */
    },
    {
      name: "Gold",
      atomicNumber: 79,
      symbol: "Au",
      atomicMass: 196.97,
      classification: 0 /* Metal */
    },
    {
      name: "Mercury",
      atomicNumber: 80,
      symbol: "Hg",
      atomicMass: 200.59,
      classification: 0 /* Metal */
    },
    {
      name: "Thallium",
      atomicNumber: 81,
      symbol: "Tl",
      atomicMass: 204.38,
      classification: 0 /* Metal */
    },
    {
      name: "Lead",
      atomicNumber: 82,
      symbol: "Pb",
      atomicMass: 207,
      classification: 0 /* Metal */
    },
    {
      name: "Bismuth",
      atomicNumber: 83,
      symbol: "Bi",
      atomicMass: 208.98,
      classification: 0 /* Metal */
    },
    {
      name: "Polonium",
      atomicNumber: 84,
      symbol: "Po",
      atomicMass: 208.93,
      classification: 2 /* Metalloid */
    },
    {
      name: "Astatine",
      atomicNumber: 85,
      symbol: "At",
      atomicMass: 209.99,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Radon",
      atomicNumber: 86,
      symbol: "Rn",
      atomicMass: 222.02,
      classification: 1 /* Nonmetal */
    }
  ],
  //end row 6
  [
    //row 7
    {
      name: "Francium",
      atomicNumber: 87,
      symbol: "Fr",
      atomicMass: 223.02,
      classification: 0 /* Metal */
    },
    {
      name: "Radium",
      atomicNumber: 88,
      symbol: "Ra",
      atomicMass: 226.03,
      classification: 0 /* Metal */
    },
    {
      name: "89-102",
      atomicNumber: null,
      symbol: "**",
      atomicMass: null,
      classification: 0 /* Metal */
    },
    {
      name: "Lawrencium",
      atomicNumber: 103,
      symbol: "Lr",
      atomicMass: 266.12,
      classification: 0 /* Metal */
    },
    {
      name: "Rutherfordium",
      atomicNumber: 104,
      symbol: "Rf",
      atomicMass: 267.12,
      classification: 0 /* Metal */
    },
    {
      name: "Dubnium",
      atomicNumber: 105,
      symbol: "Db",
      atomicMass: 168.13,
      classification: 0 /* Metal */
    },
    {
      name: "Seaborgium",
      atomicNumber: 106,
      symbol: "Sg",
      atomicMass: 269.13,
      classification: 0 /* Metal */
    },
    {
      name: "Bohrium",
      atomicNumber: 107,
      symbol: "Bh",
      atomicMass: 270.13,
      classification: 0 /* Metal */
    },
    {
      name: "Hassium",
      atomicNumber: 108,
      symbol: "Hs",
      atomicMass: 269.13,
      classification: 0 /* Metal */
    },
    {
      name: "Meitnerium",
      atomicNumber: 109,
      symbol: "Mt",
      atomicMass: 277.15,
      classification: 0 /* Metal */
    },
    {
      name: "Darmstadtium",
      atomicNumber: 110,
      symbol: "Ds",
      atomicMass: 282.16,
      classification: 0 /* Metal */
    },
    {
      name: "Roentgenium",
      atomicNumber: 111,
      symbol: "Rg",
      atomicMass: 282.17,
      classification: 0 /* Metal */
    },
    {
      name: "Copernicium",
      atomicNumber: 112,
      symbol: "Cn",
      atomicMass: 286.18,
      classification: 0 /* Metal */
    },
    {
      name: "Nihonium",
      atomicNumber: 113,
      symbol: "Nh",
      atomicMass: 286.18,
      classification: 0 /* Metal */
    },
    {
      name: "Flerovium",
      atomicNumber: 114,
      symbol: "Fl",
      atomicMass: 290.19,
      classification: 0 /* Metal */
    },
    {
      name: "Moscovium",
      atomicNumber: 115,
      symbol: "Mc",
      atomicMass: 290.2,
      classification: 0 /* Metal */
    },
    {
      name: "Livermorium",
      atomicNumber: 116,
      symbol: "Lv",
      atomicMass: 293.21,
      classification: 0 /* Metal */
    },
    {
      name: "Tennessine",
      atomicNumber: 117,
      symbol: "Ts",
      atomicMass: 294.21,
      classification: 1 /* Nonmetal */
    },
    {
      name: "Oganesson",
      atomicNumber: 118,
      symbol: "Og",
      atomicMass: 295.22,
      classification: 1 /* Nonmetal */
    }
  ],
  //end row 7
  [
    //row 8
    null,
    null,
    {
      name: "Lanthanum",
      atomicNumber: 57,
      symbol: "La",
      atomicMass: 138.91,
      classification: 0 /* Metal */
    },
    {
      name: "Cerium",
      atomicNumber: 58,
      symbol: "Ce",
      atomicMass: 140.12,
      classification: 0 /* Metal */
    },
    {
      name: "Praseodymium",
      atomicNumber: 59,
      symbol: "Pr",
      atomicMass: 140.91,
      classification: 0 /* Metal */
    },
    {
      name: "Neodymium",
      atomicNumber: 60,
      symbol: "Nd",
      atomicMass: 144.24,
      classification: 0 /* Metal */
    },
    {
      name: "Promethium",
      atomicNumber: 61,
      symbol: "Pm",
      atomicMass: 145,
      classification: 0 /* Metal */
    },
    {
      name: "Samarium",
      atomicNumber: 62,
      symbol: "Sm",
      atomicMass: 150.36,
      classification: 0 /* Metal */
    },
    {
      name: "Europium",
      atomicNumber: 63,
      symbol: "Eu",
      atomicMass: 151.96,
      classification: 0 /* Metal */
    },
    {
      name: "Gadolinium",
      atomicNumber: 64,
      symbol: "Gd",
      atomicMass: 157.25,
      classification: 0 /* Metal */
    },
    {
      name: "Terbium",
      atomicNumber: 65,
      symbol: "Tb",
      atomicMass: 158.93,
      classification: 0 /* Metal */
    },
    {
      name: "Dysprosium",
      atomicNumber: 66,
      symbol: "Dy",
      atomicMass: 162.5,
      classification: 0 /* Metal */
    },
    {
      name: "Holmium",
      atomicNumber: 67,
      symbol: "Ho",
      atomicMass: 164.93,
      classification: 0 /* Metal */
    },
    {
      name: "Erbium",
      atomicNumber: 68,
      symbol: "Er",
      atomicMass: 167.26,
      classification: 0 /* Metal */
    },
    {
      name: "Thulium",
      atomicNumber: 69,
      symbol: "Tm",
      atomicMass: 168.93,
      classification: 0 /* Metal */
    },
    {
      name: "Ytterbium",
      atomicNumber: 70,
      symbol: "Yb",
      atomicMass: 173.04,
      classification: 0 /* Metal */
    },
    null,
    null,
    null
  ],
  //end row 8
  [
    //row 9
    null,
    null,
    {
      name: "Actinium",
      atomicNumber: 89,
      symbol: "Ac",
      atomicMass: 227,
      classification: 0 /* Metal */
    },
    {
      name: "Thorium",
      atomicNumber: 90,
      symbol: "Th",
      atomicMass: 232.04,
      classification: 0 /* Metal */
    },
    {
      name: "Protactinium",
      atomicNumber: 91,
      symbol: "Pa",
      atomicMass: 231.04,
      classification: 0 /* Metal */
    },
    {
      name: "Uranium",
      atomicNumber: 92,
      symbol: "U",
      atomicMass: 238.03,
      classification: 0 /* Metal */
    },
    {
      name: "Neptunium",
      atomicNumber: 93,
      symbol: "Np",
      atomicMass: 237.05,
      classification: 0 /* Metal */
    },
    {
      name: "Plutonium",
      atomicNumber: 94,
      symbol: "Pu",
      atomicMass: 244,
      classification: 0 /* Metal */
    },
    {
      name: "Americium",
      atomicNumber: 95,
      symbol: "Am",
      atomicMass: 243,
      classification: 0 /* Metal */
    },
    {
      name: "Curium",
      atomicNumber: 96,
      symbol: "Cm",
      atomicMass: 247,
      classification: 0 /* Metal */
    },
    {
      name: "Berkelium",
      atomicNumber: 97,
      symbol: "Bk",
      atomicMass: 247,
      classification: 0 /* Metal */
    },
    {
      name: "Californium",
      atomicNumber: 98,
      symbol: "Cf",
      atomicMass: 251,
      classification: 0 /* Metal */
    },
    {
      name: "Einsteinium",
      atomicNumber: 99,
      symbol: "Es",
      atomicMass: 252,
      classification: 0 /* Metal */
    },
    {
      name: "Fermium",
      atomicNumber: 100,
      symbol: "Fm",
      atomicMass: 257,
      classification: 0 /* Metal */
    },
    {
      name: "Mendelevium",
      atomicNumber: 101,
      symbol: "Md",
      atomicMass: 258,
      classification: 0 /* Metal */
    },
    {
      name: "Nobelium",
      atomicNumber: 102,
      symbol: "No",
      atomicMass: 259,
      classification: 0 /* Metal */
    },
    null,
    null,
    null
  ]
  //end row 9
];

// src/element-decoder/word-placement/letter-definitions.ts
var letterMap = {
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

x`
};
var letterMapNormalized = Object.fromEntries(
  Object.entries(letterMap).map(([letter, letterDefinition]) => {
    if (letterDefinition.startsWith("\n")) {
      letterDefinition = letterDefinition.slice(1);
    }
    const rows = letterDefinition.split("\n");
    const normalizedLetter = rows.map((row) => {
      return row.split("").map((letter2) => {
        return letter2 === "x";
      });
    });
    return [letter, normalizedLetter];
  })
);
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

// src/element-decoder/word-placement/index.ts
var placeWord = (word) => {
  const wordUppercase = word.toUpperCase();
  const initialTable = periodicTable.map((row) => {
    return row.map((cell) => {
      if (cell === null) {
        return "  " /* Invalid */;
      } else {
        return "el" /* NotOccupied */;
      }
    });
  });
  let colIndex = 0;
  wordLoop:
    for (const letter of wordUppercase) {
      const letterDefinition = letterMapNormalized[letter];
      if (letterDefinition === void 0) {
        throw new Error(`${letter} is not defined in the letter map`);
      }
      const letterMaxWidth = letterDefinition.reduce((max, row) => {
        if (row.length > max) {
          return row.length;
        } else {
          return max;
        }
      }, 0);
      let letterFits = false;
      while (colIndex < initialTable[0].length - letterMaxWidth + 1) {
        rowLoop:
          for (let rowIndex = 0; rowIndex < initialTable.length - letterDefinition.length + 1; rowIndex++) {
            for (let letterDefRow = 0; letterDefRow < letterDefinition.length; letterDefRow++) {
              const letterRow = letterDefinition[letterDefRow];
              for (let letterDefCol = 0; letterDefCol < letterRow.length; letterDefCol++) {
                const letterExistsAtThisPosition = letterRow[letterDefCol];
                if (letterExistsAtThisPosition) {
                  const periodicTableValue = initialTable[letterDefRow + rowIndex][letterDefCol + colIndex];
                  if (periodicTableValue !== "el" /* NotOccupied */) {
                    continue rowLoop;
                  }
                }
              }
            }
            letterFits = true;
            for (let letterDefRow = 0; letterDefRow < letterDefinition.length; letterDefRow++) {
              const letterRow = letterDefinition[letterDefRow];
              for (let letterDefCol = 0; letterDefCol < letterRow.length; letterDefCol++) {
                const letterExistsAtThisPosition = letterRow[letterDefCol];
                if (letterExistsAtThisPosition) {
                  initialTable[letterDefRow + rowIndex][letterDefCol + colIndex] = "oc" /* Occupied */;
                }
              }
            }
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

// vite.config.ts
async function getDefaultWordList() {
  return JSON.parse(await fs.readFile("./src/word-list.json", "utf8"));
}
async function getWordList() {
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
          authorization: "Bearer 306d97cc36416136dec1925240ef29",
      "content-type": "application/json"
    },
    body: '{"query":"{\\n  wordList{\\n    words\\n  }\\n}","variables":null}',
    method: "POST",
    mode: "cors",
    credentials: "include"
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Invalid response (${response.status}).`);
  } else {
    if (!data.data.wordList.words) {
      return getDefaultWordList();
    } else {
      return data.data.wordList.words.split("\n");
    }
  }
}
var wordListPlugin = () => {
  const wordListId = "word-list";
  let cache = null;
  return {
    name: "word-list",
    resolveId(id) {
      if (id === wordListId)
        return wordListId;
    },
    async load(id) {
      if (id === wordListId) {
        if (cache)
          return cache;
        let wordList = (await getWordList()).filter(
          (word) => placeWord(word) !== false
        );
        if (wordList.length === 0) {
          wordList = (await getDefaultWordList()).filter(
            (word) => placeWord(word) !== false
          );
        }
        if (wordList.length === 0) {
          wordList = ["fill"];
        }
        cache = `export default ${JSON.stringify(wordList)}`;
        return cache;
      }
    }
  };
};
var vite_config_default = defineConfig({
  define: {
    "import.meta.vitest": "undefined"
  },
  plugins: [preact(), wordListPlugin()],
  test: {
    includeSource: ["src/**/*.ts", "src/**/*.tsx"]
  },
  build: {
    rollupOptions: {
      input: [
            "element-decoder/index.html",
        "compound-decoder/index.html",
        "ionic-tetris/index.html",
        "index.html"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2VsZW1lbnQtZGVjb2Rlci9wZXJpb2RpYy10YWJsZS1kYXRhLnRzIiwgInNyYy9lbGVtZW50LWRlY29kZXIvd29yZC1wbGFjZW1lbnQvbGV0dGVyLWRlZmluaXRpb25zLnRzIiwgInNyYy9lbGVtZW50LWRlY29kZXIvd29yZC1wbGFjZW1lbnQvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEZWxnZXJzYWlraGFuXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcTGFzdCBzZW1lc3RlclxcXFxTb2Z0d2FyZSBFbmdpbmVlcmluZ1xcXFxDdXJyZW50IEJyYW5jaFxcXFxIZXdpdHQtQ2hlbWlzdHJ5LUdhbWVzLUNvbXBvdW5kLURlY29kZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXERlbGdlcnNhaWtoYW5cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxMYXN0IHNlbWVzdGVyXFxcXFNvZnR3YXJlIEVuZ2luZWVyaW5nXFxcXEN1cnJlbnQgQnJhbmNoXFxcXEhld2l0dC1DaGVtaXN0cnktR2FtZXMtQ29tcG91bmQtRGVjb2RlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvRGVsZ2Vyc2Fpa2hhbi9PbmVEcml2ZS9EZXNrdG9wL0xhc3QlMjBzZW1lc3Rlci9Tb2Z0d2FyZSUyMEVuZ2luZWVyaW5nL0N1cnJlbnQlMjBCcmFuY2gvSGV3aXR0LUNoZW1pc3RyeS1HYW1lcy1Db21wb3VuZC1EZWNvZGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHByZWFjdCBmcm9tIFwiQHByZWFjdC9wcmVzZXQtdml0ZVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcclxuaW1wb3J0IHsgcGxhY2VXb3JkIH0gZnJvbSBcIi4vc3JjL2VsZW1lbnQtZGVjb2Rlci93b3JkLXBsYWNlbWVudFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGVmYXVsdFdvcmRMaXN0KCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICByZXR1cm4gSlNPTi5wYXJzZShhd2FpdCBmcy5yZWFkRmlsZShcIi4vc3JjL3dvcmQtbGlzdC5qc29uXCIsIFwidXRmOFwiKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIHdvcmRMaXN0IGZyb20gRGF0b0NNUyBhbmQgY2hlY2tzIGZvciBlcnJvcnMgaW4gcmV0cmlldmFsIG9yIGNvbnRlbnQgcmV0cmlldmVkLlxyXG4gKiBQYXVzZXMgZnVuY3Rpb24gd2hpbGUgd2FpdGluZyBmb3IgaGVhZGVycyBmcm9tIGZldGNoXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXb3JkTGlzdCgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmV0dXJucyBhIHByb21pc2VcclxuICAgKiAoYW4gb2JqZWN0IHRoYXQgaXMgZXhwZWN0ZWQgdG8gZXhpc3QgYXQgc29tZSBwb2ludCBidXQgZG9lcyBub3QgbmVjZXNzYXJpbHkgZXhpc3QgcmlnaHQgbm93KSxcclxuICAgKiBhbmQgb25jZSB0aGUgcHJvbWlzZSB2YWx1ZSBleGlzdHMgdGhlIGpzb24gZGF0YSAoYSBwcm9taXNlKVxyXG4gICAqIGlzIHBhc3NlZCB0byBzdGF0ZSB2YXJpYWJsZSBhcyBkYXRhLCBvbmNlIHRoZSBqc29uIGRhdGEgZXhpc3RzLlxyXG4gICAqL1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vXCIsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogXCJCZWFyZXIgMzA2ZDk3Y2MzNjQxNjEzNmRlYzE5MjUyNDBlZjI5XCIsXHJcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6ICd7XCJxdWVyeVwiOlwie1xcXFxuICB3b3JkTGlzdHtcXFxcbiAgICB3b3Jkc1xcXFxuICB9XFxcXG59XCIsXCJ2YXJpYWJsZXNcIjpudWxsfScsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgZGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIGFueTsgLy9hd2FpdCB1c2VkIGZvciBzYW1lIHJlYXNvbiBoZXJlIC0gY2FuJ3QgZ2V0IGpzb24gZGF0YSB1bnRpbCByZXNwb25zZSBhcnJpdmVzXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgLy9JZiB0aGUgZmV0Y2ggcmVzcG9uc2UgaXMgYW55dGhpbmcgb3RoZXIgXCJva1wiIChlLmcuIG91dHNpZGUgb2YgMjAwLTI5OSByYW5nZSlcclxuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByZXNwb25zZSAoJHtyZXNwb25zZS5zdGF0dXN9KS5gKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgXCJva1wiXHJcbiAgICBpZiAoIWRhdGEuZGF0YS53b3JkTGlzdC53b3Jkcykge1xyXG4gICAgICAvL2lmIHRoZSB3b3JkcyBmaWVsZCBvZiB0aGUgZGF0YSByZXRyaWV2ZWQgaXMgdW5kZWZpbmVkXHJcbiAgICAgIHJldHVybiBnZXREZWZhdWx0V29yZExpc3QoKTsgLy91c2UgdGhlIGRlZmF1bHQgd29yZExpc3QgZnJvbSAuL3dvcmQtbGlzdC5qc29uXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL2lmIHdlIGZvdW5kIGEgdmFsaWQgd29yZExpc3QgZnJvbSB0aGUgZGF0YSByZXRyaWV2ZWRcclxuICAgICAgcmV0dXJuIGRhdGEuZGF0YS53b3JkTGlzdC53b3Jkcy5zcGxpdChcIlxcblwiKTsgLy9zcGxpdCB0aGUgZGF0YSBvbiBuZXdsaW5lIGNoYXJhY3RlcixcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGEgY3VzdG9tIHZpdGUgcGx1Z2luIHRoYXQgd2lsbCBjcmVhdGUgYSBcIm1hZ2ljXCIgbW9kdWxlIGNhbGxlZCBcIndvcmQtbGlzdFwiLlxyXG4gKiBXaGVuIHlvdSBgaW1wb3J0IHdvcmRMaXN0IGZyb20gXCJ3b3JkTGlzdFwiYCxcclxuICogdGhpcyBwbHVnaW4gd2lsbCBmZXRjaCB0aGUgdXAtdG8tZGF0ZSB3b3JkIGxpc3QgZnJvbSB0aGUgQ01TLFxyXG4gKiBhbmQgcmV0dXJuIHRoYXQgZGF0YSBhcyBhIG1vZHVsZS5cclxuICogVGhpcyB3YXksIHdlIGRvbid0IHJlcXVpcmUgbG9hZGluZyBkYXRhIGZyb20gdGhlIENNUyBjbGllbnQtc2lkZSwgaXQgaXMgb25seSBsb2FkZWQgb25jZSBhdCBidWlsZCB0aW1lLlxyXG4gKiBXaGVuIHRoZSB3b3JkIGxpc3QgY2hhbmdlcyBpbiB0aGUgQ01TLCBhIHJlYnVpbGQgY2FuIGJlIHRyaWdnZXJlZC5cclxuICovXHJcbmNvbnN0IHdvcmRMaXN0UGx1Z2luID0gKCk6IGltcG9ydChcInZpdGVcIikuUGx1Z2luID0+IHtcclxuICBjb25zdCB3b3JkTGlzdElkID0gXCJ3b3JkLWxpc3RcIjtcclxuICBsZXQgY2FjaGUgPSBudWxsO1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBcIndvcmQtbGlzdFwiLFxyXG4gICAgcmVzb2x2ZUlkKGlkKSB7XHJcbiAgICAgIGlmIChpZCA9PT0gd29yZExpc3RJZCkgcmV0dXJuIHdvcmRMaXN0SWQ7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9hZChpZCkge1xyXG4gICAgICBpZiAoaWQgPT09IHdvcmRMaXN0SWQpIHtcclxuICAgICAgICBpZiAoY2FjaGUpIHJldHVybiBjYWNoZTtcclxuICAgICAgICBsZXQgd29yZExpc3QgPSAoYXdhaXQgZ2V0V29yZExpc3QoKSkuZmlsdGVyKFxyXG4gICAgICAgICAgKHdvcmQpID0+IHBsYWNlV29yZCh3b3JkKSAhPT0gZmFsc2UsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAod29yZExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBJZiBub25lIG9mIHRoZSBDTVMgd29yZHMgZml0IChvciB0aGVyZSBhcmUgbm8gQ01TIHdvcmRzKSxcclxuICAgICAgICAgIC8vIHVzZSB0aGUgZGVmYXVsdCB3b3JkIGxpc3QgZnJvbSB0aGUgZmlsZS5cclxuICAgICAgICAgIHdvcmRMaXN0ID0gKGF3YWl0IGdldERlZmF1bHRXb3JkTGlzdCgpKS5maWx0ZXIoXHJcbiAgICAgICAgICAgICh3b3JkKSA9PiBwbGFjZVdvcmQod29yZCkgIT09IGZhbHNlLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdvcmRMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gV29yc3QtY2FzZSAodGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuKSB3ZSBrbm93IHRoaXMgd29yZCB3b3Jrcy5cclxuICAgICAgICAgIC8vIEJldHRlciB0aGFuIGhhdmluZyBub3RoaW5nIHdvcmsuXHJcbiAgICAgICAgICB3b3JkTGlzdCA9IFtcImZpbGxcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhY2hlID0gYGV4cG9ydCBkZWZhdWx0ICR7SlNPTi5zdHJpbmdpZnkod29yZExpc3QpfWA7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGRlZmluZToge1xyXG4gICAgXCJpbXBvcnQubWV0YS52aXRlc3RcIjogXCJ1bmRlZmluZWRcIixcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtwcmVhY3QoKSwgd29yZExpc3RQbHVnaW4oKV0sXHJcbiAgdGVzdDoge1xyXG4gICAgaW5jbHVkZVNvdXJjZTogW1wic3JjLyoqLyoudHNcIiwgXCJzcmMvKiovKi50c3hcIl0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogW1xyXG4gICAgICAgIFwiZWxlbWVudC1kZWNvZGVyL2luZGV4Lmh0bWxcIixcclxuICAgICAgICBcImlvbmljLXRldHJpcy9pbmRleC5odG1sXCIsXHJcbiAgICAgICAgXCJpbmRleC5odG1sXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXERlbGdlcnNhaWtoYW5cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxMYXN0IHNlbWVzdGVyXFxcXFNvZnR3YXJlIEVuZ2luZWVyaW5nXFxcXEN1cnJlbnQgQnJhbmNoXFxcXEhld2l0dC1DaGVtaXN0cnktR2FtZXMtQ29tcG91bmQtRGVjb2RlclxcXFxzcmNcXFxcZWxlbWVudC1kZWNvZGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEZWxnZXJzYWlraGFuXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcTGFzdCBzZW1lc3RlclxcXFxTb2Z0d2FyZSBFbmdpbmVlcmluZ1xcXFxDdXJyZW50IEJyYW5jaFxcXFxIZXdpdHQtQ2hlbWlzdHJ5LUdhbWVzLUNvbXBvdW5kLURlY29kZXJcXFxcc3JjXFxcXGVsZW1lbnQtZGVjb2RlclxcXFxwZXJpb2RpYy10YWJsZS1kYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EZWxnZXJzYWlraGFuL09uZURyaXZlL0Rlc2t0b3AvTGFzdCUyMHNlbWVzdGVyL1NvZnR3YXJlJTIwRW5naW5lZXJpbmcvQ3VycmVudCUyMEJyYW5jaC9IZXdpdHQtQ2hlbWlzdHJ5LUdhbWVzLUNvbXBvdW5kLURlY29kZXIvc3JjL2VsZW1lbnQtZGVjb2Rlci9wZXJpb2RpYy10YWJsZS1kYXRhLnRzXCI7LyoqXHJcbiAqIEVudW1lcmF0ZWQgdHlwZSB0byBlYXNpbHkgZGVzY3JpYmUgdGhlIGNsYXNzaWZpY2F0aW9uIG9mIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRWxlbWVudENsYXNzaWZpY2F0aW9uIHtcclxuICAvKipcclxuICAgKiBUaGUgZWxlbWVudCBjbGFzc2lmaWNhdGlvbiBpcyBtZXRhbCAoZ2VuZXJhbGx5IG9uIHRoZSBsZWZ0IHNpZGUgb2YgcGVyaW9kaWMgdGFibGUpLlxyXG4gICAqL1xyXG4gIE1ldGFsLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBlbGVtZW50IGNsYXNzaWZpY2F0aW9uIGlzIGEgbm9ubWV0YWwgKGdlbmVyYWxseSBvbiB0aGUgZmFyIHJpZ2h0IG9mIHRoZSBwZXJpb2RpYyB0YWJsZSkuXHJcbiAgICovXHJcbiAgTm9ubWV0YWwsXHJcbiAgLyoqXHJcbiAgICogVGhlIGVsZW1lbnQgY2xhc3NpZmljYXRpb24gaXMgYSBtZXRhbGxvaWQgKGJldHdlZW4gbWV0YWxzIGFuZCBub25tZXRhbHMsIHRvd2FyZHMgdGhlIHJpZ2h0LWhhbmQgc2lkZSBvZiB0aGUgcGVyaW9kaWMgdGFibGUpLlxyXG4gICAqL1xyXG4gIE1ldGFsbG9pZCxcclxuXHJcbiAgQWxrYWxpTWV0YWwsXHJcbiAgLy8gLyoqXHJcbiAgLy8gVGhlIGVsZW1lbnQgY2xhc3NpZmljYXRpb24gZm9yIGFsa2FsaW1ldGFsXHJcblxyXG4gIC8vICoqL1xyXG5cclxuICBBbGthbGluZUVhcnRoTWV0YWwsIC8qKmFsa2FpbmUgZWFydGggbWV0YWwgKi9cclxuXHJcbiAgQWN0aW5pZGUsIC8qKiBhY3RpbmlkZSAqL1xyXG5cclxuICBVbmtub3duLCAvKipVbmtub3duIGNoZW1pY2FsIGNvbXBvdW5kcyAgKi9cclxuXHJcbiAgUG9seWF0b21pY05vbk1ldGFsLCAvKipQb2x5IEF0bW9taWMgTm9uIE1ldGFscyAqL1xyXG5cclxuICBEaWF0b21pY05vbk1ldGFsLCAvKiogRGlhdG9taWMgbm9uIG1ldGFsIGVsZW1lbnQgY2xhc3NpZmljYXRpb24gICovXHJcblxyXG4gIE5vYmxlR2FzLCAvKiplbGVtZW50IGNsYXNzaWZpY2F0aW9uIGZvciBub2JsZSBnYXMgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluaW5nIG91ciBvd24gUGVyaW9kaWNUYWJsZUVsZW1lbnQgdHlwZSwgd2hpY2ggY29uc2lzdHMgb2ZcclxuICogYW4gZWxlbWVudCdzIG5hbWUsIHN5bWJvbCwgYXRvbWljIG51bWJlciwgYXRvbWljIG1hc3MsIGFuZCBjbGFzc2lmaWNhdGlvbiAobWV0YWwsIG1ldGFsbG9pZCwgbm9ubWV0YWwpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljVGFibGVFbGVtZW50IHtcclxuICBhdG9taWNOdW1iZXI6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3ltYm9sOiBzdHJpbmc7XHJcbiAgYXRvbWljTWFzczogbnVtYmVyO1xyXG4gIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYW51YWxseSBkZWZpbmVkLCBpbiBtZW1vcnkgaW1wbGVtZW50YXRpb24gb2YgdGhlIHBlcmlvZGljIHRhYmxlIGFzIGEgMkQgYXJyYXkuXHJcbiAqIEluZGljZXMgb2YgdGhlIDJEIGFycmF5IGFyZSBlaXRoZXIgb2YgdHlwZSBQZXJpb2RpY1RhYmxlRWxlbWVudCBvciBudWxsLiBOdWxsXHJcbiAqIGluZGljZXMgaW5kaWNhdGUgdGhlIGdhcHMgYWNyb3NzIHRoZSB0b3Agcm93cyBvZiB0aGUgcGVyaW9kaWMgdGFibGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGVyaW9kaWNUYWJsZTogKFBlcmlvZGljVGFibGVFbGVtZW50IHwgbnVsbClbXVtdID0gW1xyXG4gIFtcclxuICAgIC8vcm93IDFcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJIeWRyb2dlblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDEsXHJcbiAgICAgIHN5bWJvbDogXCJIXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDEuMDEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGVsaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMixcclxuICAgICAgc3ltYm9sOiBcIkhlXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDQuMCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgXSwgLy9lbmQgcm93IDFcclxuICBbXHJcbiAgICAvL3JvdyAyXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTGl0aGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDMsXHJcbiAgICAgIHN5bWJvbDogXCJMaVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiA2Ljk0LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCZXJ5bGxpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA0LFxyXG4gICAgICBzeW1ib2w6IFwiQmVcIixcclxuICAgICAgYXRvbWljTWFzczogOS4wMSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCb3JvblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDUsXHJcbiAgICAgIHN5bWJvbDogXCJCXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDEwLjgxLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsbG9pZCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2FyYm9uXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNixcclxuICAgICAgc3ltYm9sOiBcIkNcIixcclxuICAgICAgYXRvbWljTWFzczogMTIuMDEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk5pdHJvZ2VuXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNyxcclxuICAgICAgc3ltYm9sOiBcIk5cIixcclxuICAgICAgYXRvbWljTWFzczogMTQuMDEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk94eWdlblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDgsXHJcbiAgICAgIHN5bWJvbDogXCJPXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE2LjAsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkZsb3VyaW5lXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogOSxcclxuICAgICAgc3ltYm9sOiBcIkZcIixcclxuICAgICAgYXRvbWljTWFzczogMTkuMCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTmVvblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDEwLFxyXG4gICAgICBzeW1ib2w6IFwiTmVcIixcclxuICAgICAgYXRvbWljTWFzczogMjAuMTgsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gIF0sIC8vZW5kIHJvdyAyXHJcbiAgW1xyXG4gICAgLy9yb3cgM1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNvZGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDExLFxyXG4gICAgICBzeW1ib2w6IFwiTmFcIixcclxuICAgICAgYXRvbWljTWFzczogMjIuOTksXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1hZ25lc2l1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDEyLFxyXG4gICAgICBzeW1ib2w6IFwiTWdcIixcclxuICAgICAgYXRvbWljTWFzczogMjQuMzEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQWx1bWludW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMyxcclxuICAgICAgc3ltYm9sOiBcIkFsXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI2Ljk4LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTaWxpY29uXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMTQsXHJcbiAgICAgIHN5bWJvbDogXCJTaVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyOC4wOSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbGxvaWQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBob3NwaG9ydXNcIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxNSxcclxuICAgICAgc3ltYm9sOiBcIlBcIixcclxuICAgICAgYXRvbWljTWFzczogMzAuOTcsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN1bGZ1clwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDE2LFxyXG4gICAgICBzeW1ib2w6IFwiU1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAzMi4wNyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2hsb3JpbmVcIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxNyxcclxuICAgICAgc3ltYm9sOiBcIkNsXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDM1LjQ1LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk5vbm1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBcmdvblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDE4LFxyXG4gICAgICBzeW1ib2w6IFwiQXJcIixcclxuICAgICAgYXRvbWljTWFzczogMzkuOTUsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gIF0sIC8vZW5kIHJvdyAzXHJcbiAgW1xyXG4gICAgLy9yb3cgNFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBvdGFzc2l1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDE5LFxyXG4gICAgICBzeW1ib2w6IFwiS1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAzOS4xLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDYWxjaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMjAsXHJcbiAgICAgIHN5bWJvbDogXCJDYVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiA0MC4wOCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICBudWxsLFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNjYW5kaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMjEsXHJcbiAgICAgIHN5bWJvbDogXCJTY1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiA0NC45NixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVGl0YW5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAyMixcclxuICAgICAgc3ltYm9sOiBcIlRpXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDQ3Ljg3LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJWYW5hZGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDIzLFxyXG4gICAgICBzeW1ib2w6IFwiVlwiLFxyXG4gICAgICBhdG9taWNNYXNzOiA1MC45NCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2hyb21pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAyNCxcclxuICAgICAgc3ltYm9sOiBcIkNyXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDUyLjAsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1hbmdhbmVzZVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDI1LFxyXG4gICAgICBzeW1ib2w6IFwiTW5cIixcclxuICAgICAgYXRvbWljTWFzczogNTQuOTQsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklyb25cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAyNixcclxuICAgICAgc3ltYm9sOiBcIkZlXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDU1Ljg1LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDb2JhbHRcIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAyNyxcclxuICAgICAgc3ltYm9sOiBcIkNvXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDU4LjkzLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOaWNrZWxcIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAyOCxcclxuICAgICAgc3ltYm9sOiBcIk5pXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDU4LjY5LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDb3BwZXJcIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAyOSxcclxuICAgICAgc3ltYm9sOiBcIkN1XCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDYzLjU1LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJaaW5jXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMzAsXHJcbiAgICAgIHN5bWJvbDogXCJablwiLFxyXG4gICAgICBhdG9taWNNYXNzOiA2NS4zOCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiR2FsbGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDMxLFxyXG4gICAgICBzeW1ib2w6IFwiR2FcIixcclxuICAgICAgYXRvbWljTWFzczogNjkuNzIsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkdlcm1hbml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDMyLFxyXG4gICAgICBzeW1ib2w6IFwiR2VcIixcclxuICAgICAgYXRvbWljTWFzczogNzIuNjMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWxsb2lkLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBcnNlbmljXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMzMsXHJcbiAgICAgIHN5bWJvbDogXCJBc1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiA3NC45MixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbGxvaWQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNlbGVuaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMzQsXHJcbiAgICAgIHN5bWJvbDogXCJTZVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiA3OC45NyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQnJvbWluZVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDM1LFxyXG4gICAgICBzeW1ib2w6IFwiQnJcIixcclxuICAgICAgYXRvbWljTWFzczogNzkuOSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiS3J5cHRvblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDM2LFxyXG4gICAgICBzeW1ib2w6IFwiS3JcIixcclxuICAgICAgYXRvbWljTWFzczogODMuOCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgXSwgLy9lbmQgcm93IDRcclxuICBbXHJcbiAgICAvL3JvdyA1XHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUnViaWRpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAzNyxcclxuICAgICAgc3ltYm9sOiBcIlJiXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDg1LjQ3LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdHJvbnRpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAzOCxcclxuICAgICAgc3ltYm9sOiBcIlNyXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDg3LjYyLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIG51bGwsXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiWXR0cml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDM5LFxyXG4gICAgICBzeW1ib2w6IFwiWVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiA4OC45MSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiWmlyY29uaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNDAsXHJcbiAgICAgIHN5bWJvbDogXCJaclwiLFxyXG4gICAgICBhdG9taWNNYXNzOiA5MS4yMixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTmlvYml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDQxLFxyXG4gICAgICBzeW1ib2w6IFwiTmJcIixcclxuICAgICAgYXRvbWljTWFzczogOTIuOTEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1vbHliZGVudW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA0MixcclxuICAgICAgc3ltYm9sOiBcIk1vXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDk1Ljk1LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJUZWNobmV0aXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNDMsXHJcbiAgICAgIHN5bWJvbDogXCJUY1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiA5Ny4wLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSdXRoZW5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA0NCxcclxuICAgICAgc3ltYm9sOiBcIlJ1XCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDEwMS4wNyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmhvZGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDQ1LFxyXG4gICAgICBzeW1ib2w6IFwiUmhcIixcclxuICAgICAgYXRvbWljTWFzczogMTAyLjkxLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQYWxsYWRpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA0NixcclxuICAgICAgc3ltYm9sOiBcIlBkXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDEwNi40MixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU2lsdmVyXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNDcsXHJcbiAgICAgIHN5bWJvbDogXCJBZ1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxMDcuODcsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhZG1pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA0OCxcclxuICAgICAgc3ltYm9sOiBcIkNkXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDExMi40MSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSW5kaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNDksXHJcbiAgICAgIHN5bWJvbDogXCJJblwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxMTQuODIsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRpblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDUwLFxyXG4gICAgICBzeW1ib2w6IFwiU25cIixcclxuICAgICAgYXRvbWljTWFzczogMTE4LjcxLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBbnRpbW9ueVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDUxLFxyXG4gICAgICBzeW1ib2w6IFwiU2JcIixcclxuICAgICAgYXRvbWljTWFzczogMTIxLjc2LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsbG9pZCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVGVsbHVyaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNTIsXHJcbiAgICAgIHN5bWJvbDogXCJUZVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxMjcuNixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbGxvaWQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklvZGluZVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDUzLFxyXG4gICAgICBzeW1ib2w6IFwiSVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxMjYuOSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiWGVub25cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA1NCxcclxuICAgICAgc3ltYm9sOiBcIlhlXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDEzMS4yOSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgXSwgLy9lbmQgcm93IDVcclxuICBbXHJcbiAgICAvL3JvdyA2XHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2VzaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNTUsXHJcbiAgICAgIHN5bWJvbDogXCJDc1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxMzIuOTEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJhcml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDU2LFxyXG4gICAgICBzeW1ib2w6IFwiQmFcIixcclxuICAgICAgYXRvbWljTWFzczogMTM3LjMzLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCI1Ny03MFwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IG51bGwsXHJcbiAgICAgIHN5bWJvbDogXCIqXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IG51bGwsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkx1dGV0aXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNzEsXHJcbiAgICAgIHN5bWJvbDogXCJMdVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxNzQuOTcsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhhZm5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA3MixcclxuICAgICAgc3ltYm9sOiBcIkhmXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE3OC40OSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVGFudGFsdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA3MyxcclxuICAgICAgc3ltYm9sOiBcIlRhXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE4MC45NSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVHVuZ3N0ZW5cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA3NCxcclxuICAgICAgc3ltYm9sOiBcIldcIixcclxuICAgICAgYXRvbWljTWFzczogMTgzLjg0LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSaGVuaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNzUsXHJcbiAgICAgIHN5bWJvbDogXCJSZVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxODYuMjEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9zbWl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDc2LFxyXG4gICAgICBzeW1ib2w6IFwiT3NcIixcclxuICAgICAgYXRvbWljTWFzczogMTkwLjIsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklyaWRpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA3NyxcclxuICAgICAgc3ltYm9sOiBcIklyXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE5Mi4yMixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUGxhdGludW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA3OCxcclxuICAgICAgc3ltYm9sOiBcIlB0XCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE5NS4wOCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiR29sZFwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDc5LFxyXG4gICAgICBzeW1ib2w6IFwiQXVcIixcclxuICAgICAgYXRvbWljTWFzczogMTk2Ljk3LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNZXJjdXJ5XCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogODAsXHJcbiAgICAgIHN5bWJvbDogXCJIZ1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyMDAuNTksXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRoYWxsaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogODEsXHJcbiAgICAgIHN5bWJvbDogXCJUbFwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyMDQuMzgsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxlYWRcIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA4MixcclxuICAgICAgc3ltYm9sOiBcIlBiXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDIwNy4wLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCaXNtdXRoXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogODMsXHJcbiAgICAgIHN5bWJvbDogXCJCaVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyMDguOTgsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBvbG9uaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogODQsXHJcbiAgICAgIHN5bWJvbDogXCJQb1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyMDguOTMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWxsb2lkLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBc3RhdGluZVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDg1LFxyXG4gICAgICBzeW1ib2w6IFwiQXRcIixcclxuICAgICAgYXRvbWljTWFzczogMjA5Ljk5LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk5vbm1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSYWRvblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDg2LFxyXG4gICAgICBzeW1ib2w6IFwiUm5cIixcclxuICAgICAgYXRvbWljTWFzczogMjIyLjAyLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk5vbm1ldGFsLFxyXG4gICAgfSxcclxuICBdLCAvL2VuZCByb3cgNlxyXG4gIFtcclxuICAgIC8vcm93IDdcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGcmFuY2l1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDg3LFxyXG4gICAgICBzeW1ib2w6IFwiRnJcIixcclxuICAgICAgYXRvbWljTWFzczogMjIzLjAyLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSYWRpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA4OCxcclxuICAgICAgc3ltYm9sOiBcIlJhXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDIyNi4wMyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiODktMTAyXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogbnVsbCxcclxuICAgICAgc3ltYm9sOiBcIioqXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IG51bGwsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxhd3JlbmNpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDMsXHJcbiAgICAgIHN5bWJvbDogXCJMclwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNjYuMTIsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJ1dGhlcmZvcmRpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDQsXHJcbiAgICAgIHN5bWJvbDogXCJSZlwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNjcuMTIsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkR1Ym5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDUsXHJcbiAgICAgIHN5bWJvbDogXCJEYlwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxNjguMTMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNlYWJvcmdpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDYsXHJcbiAgICAgIHN5bWJvbDogXCJTZ1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNjkuMTMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJvaHJpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDcsXHJcbiAgICAgIHN5bWJvbDogXCJCaFwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNzAuMTMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhhc3NpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDgsXHJcbiAgICAgIHN5bWJvbDogXCJIc1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNjkuMTMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1laXRuZXJpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDksXHJcbiAgICAgIHN5bWJvbDogXCJNdFwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNzcuMTUsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkRhcm1zdGFkdGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDExMCxcclxuICAgICAgc3ltYm9sOiBcIkRzXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI4Mi4xNixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUm9lbnRnZW5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMTEsXHJcbiAgICAgIHN5bWJvbDogXCJSZ1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyODIuMTcsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNvcGVybmljaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMTEyLFxyXG4gICAgICBzeW1ib2w6IFwiQ25cIixcclxuICAgICAgYXRvbWljTWFzczogMjg2LjE4LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOaWhvbml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDExMyxcclxuICAgICAgc3ltYm9sOiBcIk5oXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI4Ni4xOCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRmxlcm92aXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMTE0LFxyXG4gICAgICBzeW1ib2w6IFwiRmxcIixcclxuICAgICAgYXRvbWljTWFzczogMjkwLjE5LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNb3Njb3ZpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMTUsXHJcbiAgICAgIHN5bWJvbDogXCJNY1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyOTAuMixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTGl2ZXJtb3JpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMTYsXHJcbiAgICAgIHN5bWJvbDogXCJMdlwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyOTMuMjEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRlbm5lc3NpbmVcIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMTcsXHJcbiAgICAgIHN5bWJvbDogXCJUc1wiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyOTQuMjEsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTm9ubWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9nYW5lc3NvblwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDExOCxcclxuICAgICAgc3ltYm9sOiBcIk9nXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI5NS4yMixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5Ob25tZXRhbCxcclxuICAgIH0sXHJcbiAgXSwgLy9lbmQgcm93IDdcclxuICBbXHJcbiAgICAvL3JvdyA4XHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYW50aGFudW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA1NyxcclxuICAgICAgc3ltYm9sOiBcIkxhXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDEzOC45MSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2VyaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNTgsXHJcbiAgICAgIHN5bWJvbDogXCJDZVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxNDAuMTIsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlByYXNlb2R5bWl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDU5LFxyXG4gICAgICBzeW1ib2w6IFwiUHJcIixcclxuICAgICAgYXRvbWljTWFzczogMTQwLjkxLFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOZW9keW1pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA2MCxcclxuICAgICAgc3ltYm9sOiBcIk5kXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE0NC4yNCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUHJvbWV0aGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDYxLFxyXG4gICAgICBzeW1ib2w6IFwiUG1cIixcclxuICAgICAgYXRvbWljTWFzczogMTQ1LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTYW1hcml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDYyLFxyXG4gICAgICBzeW1ib2w6IFwiU21cIixcclxuICAgICAgYXRvbWljTWFzczogMTUwLjM2LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJFdXJvcGl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDYzLFxyXG4gICAgICBzeW1ib2w6IFwiRXVcIixcclxuICAgICAgYXRvbWljTWFzczogMTUxLjk2LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJHYWRvbGluaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNjQsXHJcbiAgICAgIHN5bWJvbDogXCJHZFwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxNTcuMjUsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRlcmJpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA2NSxcclxuICAgICAgc3ltYm9sOiBcIlRiXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE1OC45MyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRHlzcHJvc2l1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDY2LFxyXG4gICAgICBzeW1ib2w6IFwiRHlcIixcclxuICAgICAgYXRvbWljTWFzczogMTYyLjUsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhvbG1pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA2NyxcclxuICAgICAgc3ltYm9sOiBcIkhvXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE2NC45MyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRXJiaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNjgsXHJcbiAgICAgIHN5bWJvbDogXCJFclwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxNjcuMjYsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRodWxpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA2OSxcclxuICAgICAgc3ltYm9sOiBcIlRtXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDE2OC45MyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiWXR0ZXJiaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogNzAsXHJcbiAgICAgIHN5bWJvbDogXCJZYlwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAxNzMuMDQsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gIF0sIC8vZW5kIHJvdyA4XHJcbiAgW1xyXG4gICAgLy9yb3cgOVxyXG4gICAgbnVsbCxcclxuICAgIG51bGwsXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQWN0aW5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA4OSxcclxuICAgICAgc3ltYm9sOiBcIkFjXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDIyNyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVGhvcml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDkwLFxyXG4gICAgICBzeW1ib2w6IFwiVGhcIixcclxuICAgICAgYXRvbWljTWFzczogMjMyLjA0LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQcm90YWN0aW5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA5MSxcclxuICAgICAgc3ltYm9sOiBcIlBhXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDIzMS4wNCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVXJhbml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDkyLFxyXG4gICAgICBzeW1ib2w6IFwiVVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyMzguMDMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk5lcHR1bml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDkzLFxyXG4gICAgICBzeW1ib2w6IFwiTnBcIixcclxuICAgICAgYXRvbWljTWFzczogMjM3LjA1LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQbHV0b25pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA5NCxcclxuICAgICAgc3ltYm9sOiBcIlB1XCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI0NCxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQW1lcmljaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogOTUsXHJcbiAgICAgIHN5bWJvbDogXCJBbVwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNDMsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkN1cml1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDk2LFxyXG4gICAgICBzeW1ib2w6IFwiQ21cIixcclxuICAgICAgYXRvbWljTWFzczogMjQ3LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCZXJrZWxpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA5NyxcclxuICAgICAgc3ltYm9sOiBcIkJrXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI0NyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2FsaWZvcm5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA5OCxcclxuICAgICAgc3ltYm9sOiBcIkNmXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI1MSxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRWluc3RlaW5pdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiA5OSxcclxuICAgICAgc3ltYm9sOiBcIkVzXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI1MixcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRmVybWl1bVwiLFxyXG4gICAgICBhdG9taWNOdW1iZXI6IDEwMCxcclxuICAgICAgc3ltYm9sOiBcIkZtXCIsXHJcbiAgICAgIGF0b21pY01hc3M6IDI1NyxcclxuICAgICAgY2xhc3NpZmljYXRpb246IEVsZW1lbnRDbGFzc2lmaWNhdGlvbi5NZXRhbCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWVuZGVsZXZpdW1cIixcclxuICAgICAgYXRvbWljTnVtYmVyOiAxMDEsXHJcbiAgICAgIHN5bWJvbDogXCJNZFwiLFxyXG4gICAgICBhdG9taWNNYXNzOiAyNTgsXHJcbiAgICAgIGNsYXNzaWZpY2F0aW9uOiBFbGVtZW50Q2xhc3NpZmljYXRpb24uTWV0YWwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk5vYmVsaXVtXCIsXHJcbiAgICAgIGF0b21pY051bWJlcjogMTAyLFxyXG4gICAgICBzeW1ib2w6IFwiTm9cIixcclxuICAgICAgYXRvbWljTWFzczogMjU5LFxyXG4gICAgICBjbGFzc2lmaWNhdGlvbjogRWxlbWVudENsYXNzaWZpY2F0aW9uLk1ldGFsLFxyXG4gICAgfSxcclxuICAgIG51bGwsXHJcbiAgICBudWxsLFxyXG4gICAgbnVsbCxcclxuICBdLCAvL2VuZCByb3cgOVxyXG5dO1xyXG5cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEZWxnZXJzYWlraGFuXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcTGFzdCBzZW1lc3RlclxcXFxTb2Z0d2FyZSBFbmdpbmVlcmluZ1xcXFxDdXJyZW50IEJyYW5jaFxcXFxIZXdpdHQtQ2hlbWlzdHJ5LUdhbWVzLUNvbXBvdW5kLURlY29kZXJcXFxcc3JjXFxcXGVsZW1lbnQtZGVjb2RlclxcXFx3b3JkLXBsYWNlbWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRGVsZ2Vyc2Fpa2hhblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXExhc3Qgc2VtZXN0ZXJcXFxcU29mdHdhcmUgRW5naW5lZXJpbmdcXFxcQ3VycmVudCBCcmFuY2hcXFxcSGV3aXR0LUNoZW1pc3RyeS1HYW1lcy1Db21wb3VuZC1EZWNvZGVyXFxcXHNyY1xcXFxlbGVtZW50LWRlY29kZXJcXFxcd29yZC1wbGFjZW1lbnRcXFxcbGV0dGVyLWRlZmluaXRpb25zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EZWxnZXJzYWlraGFuL09uZURyaXZlL0Rlc2t0b3AvTGFzdCUyMHNlbWVzdGVyL1NvZnR3YXJlJTIwRW5naW5lZXJpbmcvQ3VycmVudCUyMEJyYW5jaC9IZXdpdHQtQ2hlbWlzdHJ5LUdhbWVzLUNvbXBvdW5kLURlY29kZXIvc3JjL2VsZW1lbnQtZGVjb2Rlci93b3JkLXBsYWNlbWVudC9sZXR0ZXItZGVmaW5pdGlvbnMudHNcIjsvKiogbWFudWFsbHkgZGVmaW5lZCBsZXR0ZXJzIGFuZCBjaGFyYWN0ZXJzICovXHJcbmNvbnN0IGxldHRlck1hcCA9IHtcclxuICBBOiBgXHJcbnh4eFxyXG54IHhcclxueHh4XHJcbnggeGAsXHJcbiAgQjogYFxyXG54eFxyXG54IHhcclxueHhcclxueCB4XHJcbnh4YCxcclxuICBDOiBgXHJcbnh4eFxyXG54XHJcbnh4eGAsXHJcbiAgRDogYFxyXG54eHhcclxueCAgeFxyXG54ICB4XHJcbnh4eGAsXHJcbiAgRTogYFxyXG54eHhcclxueHhcclxueFxyXG54eHhgLFxyXG4gIEY6IGBcclxueHh4XHJcbnggIFxyXG54eCBcclxueCAgYCxcclxuICBHOiBgXHJcbnh4eHhcclxueFxyXG54IHh4XHJcbnh4eHhgLFxyXG4gIEg6IGBcclxueCB4XHJcbnh4eFxyXG54IHhgLFxyXG4gIEk6IGBcclxueHh4XHJcbiB4XHJcbiB4IFxyXG54eHhgLFxyXG4gIEo6IGAgXHJcbnh4eFxyXG4gIHhcclxueCB4XHJcbnh4eGAsXHJcbiAgSzogYFxyXG54IHhcclxueHhcclxueCB4ICBcclxuYCxcclxuICBMOiBgXHJcbnggIFxyXG54ICBcclxueHh4YCxcclxuICBNOiBgXHJcbnh4eHh4XHJcbnggeCB4XHJcbnggICB4YCxcclxuICBOOiBgXHJcbnggIHhcclxueHggeFxyXG54IHh4YCxcclxuICBPOiBgXHJcbiB4eFxyXG54ICB4XHJcbnggIHhcclxuIHh4YCxcclxuICBQOiBgXHJcbnh4XHJcbnggeFxyXG54eFxyXG54YCxcclxuICBROiBgXHJcbnh4eFxyXG54IHhcclxueHh4XHJcbiAgIHhgLFxyXG4gIFI6IGBcclxueHhcclxueCB4XHJcbnh4XHJcbnggeGAsXHJcbiAgUzogYFxyXG54eHhcclxueFxyXG4geHhcclxueHh4YCxcclxuICBUOiBgXHJcbnh4eFxyXG4geFxyXG4geGAsXHJcbiAgVTogYFxyXG54ICB4XHJcbnggIHhcclxuIHh4YCxcclxuICBWOiBgXHJcbnggICB4XHJcbiB4IHhcclxuICB4YCxcclxuICBXOiBgXHJcbnggICB4XHJcbnggeCB4XHJcbnh4eHh4YCxcclxuICBYOiBgXHJcbnggeFxyXG4geFxyXG54IHhgLFxyXG4gIFk6IGBcclxueCB4XHJcbnggeFxyXG4geFxyXG4geGAsXHJcbiAgWjogYFxyXG54eHh4XHJcbiAgeFxyXG4geFxyXG54eHh4YCxcclxuICBcIiFcIjogYFxyXG54XHJcbnhcclxueFxyXG5cclxueGAsXHJcbn07XHJcblxyXG4vKiogQWxsIG9mIHRoZSBsZXR0ZXIgZGVmaW5pdGlvbnMgYXMgMmQgYXJyYXlzIG9mIGJvb2xlYW5zICovXHJcbmV4cG9ydCBjb25zdCBsZXR0ZXJNYXBOb3JtYWxpemVkID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gIE9iamVjdC5lbnRyaWVzKGxldHRlck1hcCkubWFwKChbbGV0dGVyLCBsZXR0ZXJEZWZpbml0aW9uXSkgPT4ge1xyXG4gICAgaWYgKGxldHRlckRlZmluaXRpb24uc3RhcnRzV2l0aChcIlxcblwiKSkge1xyXG4gICAgICBsZXR0ZXJEZWZpbml0aW9uID0gbGV0dGVyRGVmaW5pdGlvbi5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvd3MgPSBsZXR0ZXJEZWZpbml0aW9uLnNwbGl0KFwiXFxuXCIpO1xyXG5cclxuICAgIC8qKiBjb252ZXJ0cyBzcGFjZXMgYW5kIHgncyB0byB0cnVlcyBhbmQgZmFsc2VzICovXHJcbiAgICBjb25zdCBub3JtYWxpemVkTGV0dGVyID0gcm93cy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICByZXR1cm4gcm93LnNwbGl0KFwiXCIpLm1hcCgobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxldHRlciA9PT0gXCJ4XCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2xldHRlciwgbm9ybWFsaXplZExldHRlcl07XHJcbiAgfSksXHJcbik7XHJcblxyXG4vLyBpbiBsaW5lIHRlc3QgdG8gbWFrZSBzdXJlIGxldHRlciBtYXAgbm9ybWFsaXphdGlvbiB3b3Jrcy5cclxuaWYgKGltcG9ydC5tZXRhLnZpdGVzdCkge1xyXG4gIGNvbnN0IHsgaXQsIGV4cGVjdCB9ID0gaW1wb3J0Lm1ldGEudml0ZXN0O1xyXG4gIGl0KFwiY2hlY2sgdGhhdCBGIGlzIGNvcnJlY3RcIiwgKCkgPT4ge1xyXG4gICAgZXhwZWN0KGxldHRlck1hcE5vcm1hbGl6ZWQuRikudG9NYXRjaElubGluZVNuYXBzaG90KGBcclxuICAgICAgW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICBmYWxzZSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIF1cclxuICAgIGApO1xyXG4gIH0pO1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRGVsZ2Vyc2Fpa2hhblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXExhc3Qgc2VtZXN0ZXJcXFxcU29mdHdhcmUgRW5naW5lZXJpbmdcXFxcQ3VycmVudCBCcmFuY2hcXFxcSGV3aXR0LUNoZW1pc3RyeS1HYW1lcy1Db21wb3VuZC1EZWNvZGVyXFxcXHNyY1xcXFxlbGVtZW50LWRlY29kZXJcXFxcd29yZC1wbGFjZW1lbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXERlbGdlcnNhaWtoYW5cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxMYXN0IHNlbWVzdGVyXFxcXFNvZnR3YXJlIEVuZ2luZWVyaW5nXFxcXEN1cnJlbnQgQnJhbmNoXFxcXEhld2l0dC1DaGVtaXN0cnktR2FtZXMtQ29tcG91bmQtRGVjb2RlclxcXFxzcmNcXFxcZWxlbWVudC1kZWNvZGVyXFxcXHdvcmQtcGxhY2VtZW50XFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EZWxnZXJzYWlraGFuL09uZURyaXZlL0Rlc2t0b3AvTGFzdCUyMHNlbWVzdGVyL1NvZnR3YXJlJTIwRW5naW5lZXJpbmcvQ3VycmVudCUyMEJyYW5jaC9IZXdpdHQtQ2hlbWlzdHJ5LUdhbWVzLUNvbXBvdW5kLURlY29kZXIvc3JjL2VsZW1lbnQtZGVjb2Rlci93b3JkLXBsYWNlbWVudC9pbmRleC50c1wiO2ltcG9ydCB7IHBlcmlvZGljVGFibGUgfSBmcm9tIFwiLi4vcGVyaW9kaWMtdGFibGUtZGF0YVwiO1xyXG5pbXBvcnQgeyBsZXR0ZXJNYXBOb3JtYWxpemVkIH0gZnJvbSBcIi4vbGV0dGVyLWRlZmluaXRpb25zXCI7XHJcblxyXG4vKiogZW51bSB0byBtYWtlIGl0IG1vcmUgY2xlYXIgaW4gb3VyIGNvZGUgd2hhdCB0aGUgc3RhdHVzIG9mIHRoZSBnYW1lIGJvYXJkIGlzICovXHJcbmV4cG9ydCBlbnVtIFNwYWNlRGVmIHtcclxuICAvKiogUGFydCBvZiBhIGxldHRlciBvY2N1cGllcyB0aGlzIHNwYWNlLCBhbmQgYW4gZWxlbWVudCBpcyBoZXJlICovXHJcbiAgT2NjdXBpZWQgPSBcIm9jXCIsXHJcbiAgLyoqIEFuIGVsZW1lbnQgaXMgaGVyZSwgYnV0IG5vIGxldHRlciBvY2N1cGllcyB0aGlzIHNwYWNlICovXHJcbiAgTm90T2NjdXBpZWQgPSBcImVsXCIsXHJcbiAgLyoqIE5vIGVsZW1lbnQgb3IgbGV0dGVyIG9jY3VwaWVzIHRoaXMgc3BhY2UgKi9cclxuICBJbnZhbGlkID0gXCIgIFwiLFxyXG59XHJcblxyXG4vKipcclxuICogcGxhY2VXb3JkIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgd29yZCBhbmQgcGxhY2VzIGl0IG9udG8gYSAyZCBhcnJheSByZXByZXNlbnRpbmcgdGhlIHBlcmlvZGljIHRhYmxlLCBpZiB0aGUgd29yZCBmaXRzXHJcbiAqIEBwYXJhbSB3b3JkIEEgd29yZCBpbiB0aGUgZm9ybSBvZiBhIHN0cmluZywgZ2VuZXJhbGx5IGFyb3VuZCA0LTUgY2hhcmFjdGVycyBsb25nICh0byBmaXQgb24gdGhlIHRhYmxlKVxyXG4gKiBAcmV0dXJucyBvdXRwdXRzIC0gcmV0dXJucyBhIGdyaWQgb2YgdGhlIHdvcmQgcGxhY2VkIG9uIHRoZSBwZXJpb2RpYyB0YWJsZSwgb3IgcmV0dXJucyBmYWxzZSBpZiB0aGUgd29yZCBjYW5ub3QgYmUgcGxhY2VkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGxhY2VXb3JkID0gKHdvcmQ6IHN0cmluZyk6IFNwYWNlRGVmW11bXSB8IGZhbHNlID0+IHtcclxuICBjb25zdCB3b3JkVXBwZXJjYXNlID0gd29yZC50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAvKipcclxuICAgKiBnZXRzIHRoZSBpbml0aWFsIHRhYmxlIHdpdGhvdXQgd29yZHMvbGV0dGVycyBwbGFjZWQsXHJcbiAgICogdGFrZW4gZnJvbSB0aGUgcGVyaW9kaWNUYWJsZSBkZWZhdWx0IGRlZmluaXRpb24gaW4gLi4vcGVyaW9kaWMtdGFibGUudHNcclxuICAgKi9cclxuICBjb25zdCBpbml0aWFsVGFibGU6IFNwYWNlRGVmW11bXSA9IHBlcmlvZGljVGFibGUubWFwKChyb3cpID0+IHtcclxuICAgIHJldHVybiByb3cubWFwKChjZWxsKSA9PiB7XHJcbiAgICAgIGlmIChjZWxsID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFNwYWNlRGVmLkludmFsaWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFNwYWNlRGVmLk5vdE9jY3VwaWVkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLyoqIHRoZSBjb2x1bW4gaW5kZXggd2lsbCBuZXZlciBkZWNyZWFzZSwgc28gaXQgaXMgZGVjbGFyZWQgaGVyZSB0byBiZSB1c2VkIGluIGEgd2hpbGUgbG9vcCAqL1xyXG4gIGxldCBjb2xJbmRleCA9IDA7XHJcblxyXG4gIC8vIGxvb3AgdGhyb3VnaCBhbmQgc2V0IGxldHRlciBpbiB0YWJsZVxyXG4gIHdvcmRMb29wOiBmb3IgKGNvbnN0IGxldHRlciBvZiB3b3JkVXBwZXJjYXNlKSB7XHJcbiAgICBjb25zdCBsZXR0ZXJEZWZpbml0aW9uID0gbGV0dGVyTWFwTm9ybWFsaXplZFtsZXR0ZXJdO1xyXG4gICAgaWYgKGxldHRlckRlZmluaXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvL2Vycm9yIGNoZWNrXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtsZXR0ZXJ9IGlzIG5vdCBkZWZpbmVkIGluIHRoZSBsZXR0ZXIgbWFwYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIGZpbmRzIHdpZHRoIG9mIHRoZSBsZXR0ZXIsIGZvciBjaGVja2luZyBib3VuZHMgb24gdGhlIHBlcmlvZGljIHRhYmxlIGxhdGVyKi9cclxuICAgIGNvbnN0IGxldHRlck1heFdpZHRoID0gbGV0dGVyRGVmaW5pdGlvbi5yZWR1Y2UoKG1heCwgcm93KSA9PiB7XHJcbiAgICAgIGlmIChyb3cubGVuZ3RoID4gbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIHJvdy5sZW5ndGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG1heDtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgLyoqIHVzZWQgdG8gcmV0dXJuIGZhbHNlIGlmIGxldHRlciBkb2Vzbid0IGZpdCAqL1xyXG4gICAgbGV0IGxldHRlckZpdHMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyB3ZSBhcmUgZGV0ZXJtaW5pbmcgaWYgbGV0dGVycyBjYW4gYmUgcGxhY2VkIGJ5IGdvaW5nIHRvcCB0byBib3R0b20sIHRoZW4gbGVmdCB0byByaWdodC4gc28gdGhlcmUgaXMgYSBwcmVmZXJlbmNlIHRvd2FyZHNcclxuICAgIC8vIHBsYWNpbmcgbGV0dGVycyB0b3dhcmRzIHRoZSBsZWZ0IGFuZCB0b3Agb2YgdGhlIHRhYmxlLiBUaGlzIGlzIG9uZSByZWFzb24gd2h5IGxldHRlcnMgc3VjaCBhcyBcIkxcIiBhcmUgc2VlbiBvdXQgb2Ygc3luY1xyXG4gICAgLy8gd2l0aCB0aGUgcmVzdCBvZiB0aGUgbGV0dGVycyBpZiB0b3dhcmRzIHRoZSBlbmQgb2YgdGhlIHdvcmRcclxuXHJcbiAgICAvLyBsb29wIHRocm91Z2ggdGhlIGNvbHVtbnMgb2YgcGVyaW9kaWMgdGFibGUgdG8gY2hlY2sgaWYgbGV0dGVyIGNhbiBiZSBwbGFjZWRcclxuICAgIHdoaWxlIChjb2xJbmRleCA8IGluaXRpYWxUYWJsZVswXS5sZW5ndGggLSBsZXR0ZXJNYXhXaWR0aCArIDEpIHtcclxuICAgICAgLy8gbG9vcCB0aHJvdWdoIHJvd3MgdG8gc2VlIGlmIHRoZSBsZXR0ZXIgY2FuIGJlIHBsYWNlZCBpbiB0aGlzIHJvd1xyXG4gICAgICByb3dMb29wOiBmb3IgKFxyXG4gICAgICAgIGxldCByb3dJbmRleCA9IDA7XHJcbiAgICAgICAgcm93SW5kZXggPCBpbml0aWFsVGFibGUubGVuZ3RoIC0gbGV0dGVyRGVmaW5pdGlvbi5sZW5ndGggKyAxO1xyXG4gICAgICAgIHJvd0luZGV4KytcclxuICAgICAgKSB7XHJcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGluZGl2aWR1YWwgcm93cyBpbiB0aGUgY29sdW1uc1xyXG4gICAgICAgIC8vIHN0YXJ0aW5nIHBvc2l0aW9uIGlzIChyb3dJbmRleCwgY29sSW5kZXgpXHJcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGxldHRlciBkZWZpbml0aW9uIHRvIHNlZSBpZiBpdCBmaXRzXHJcbiAgICAgICAgLy8gRm9yIGVhY2ggcG9zaXRpb24gaW4gdGhlIGxldHRlciBkZWZpbml0aW9uLFxyXG4gICAgICAgIC8vIElmIHRoZSBwb3NpdGlvbiBpcyBcInRydWVcIiwgY2hlY2sgdGhhdCB0aGUgY29ycmVzcG9uZGluZyAocm93LCBjb2wpICsgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uIChyb3csIGNvbCkgaXMgdW5vY2N1cGllZFxyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHJvd3Mgb2YgdGhlIGxldHRlciBkZWZpbml0aW9uICYgY2hlY2tzIGlmIHRoZSBsZXR0ZXIgZml0c1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICBsZXQgbGV0dGVyRGVmUm93ID0gMDtcclxuICAgICAgICAgIGxldHRlckRlZlJvdyA8IGxldHRlckRlZmluaXRpb24ubGVuZ3RoO1xyXG4gICAgICAgICAgbGV0dGVyRGVmUm93KytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IGxldHRlclJvdyA9IGxldHRlckRlZmluaXRpb25bbGV0dGVyRGVmUm93XTtcclxuICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgY29sdW1ucyBvZiB0aGUgbGV0dGVyIGRlZmluaXRpb25cclxuICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgIGxldCBsZXR0ZXJEZWZDb2wgPSAwO1xyXG4gICAgICAgICAgICBsZXR0ZXJEZWZDb2wgPCBsZXR0ZXJSb3cubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXR0ZXJEZWZDb2wrK1xyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldHRlckV4aXN0c0F0VGhpc1Bvc2l0aW9uID0gbGV0dGVyUm93W2xldHRlckRlZkNvbF07XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXJFeGlzdHNBdFRoaXNQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIHNwYWNlIGlzIHVub2NjdXBpZWQgKGFuZCBpcyBhbiBlbGVtZW50KSBpbiB0aGUgcGVyaW9kaWMgdGFibGVcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgcGVyaW9kaWNUYWJsZVZhbHVlID1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxUYWJsZVtsZXR0ZXJEZWZSb3cgKyByb3dJbmRleF1bbGV0dGVyRGVmQ29sICsgY29sSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocGVyaW9kaWNUYWJsZVZhbHVlICE9PSBTcGFjZURlZi5Ob3RPY2N1cGllZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWUgcm93TG9vcDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldHRlckZpdHMgPSB0cnVlOyAvLyBUaGUgbGV0dGVyIGhhcyBiZWVuIGRldGVybWluZWQgdG8gZml0IGJ1dCBqdXN0IG5lZWRzIHRvIGJlIHBsYWNlZFxyXG5cclxuICAgICAgICAvLyBwbGFjZSB0aGUgd29yZCBzaW5jZSBpdCBmaXRzIGluIHRoZSBzcG90LCBhcyBkZXRlcm1pbmVkIGFib3ZlXHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBsZXR0ZXJEZWZSb3cgPSAwO1xyXG4gICAgICAgICAgbGV0dGVyRGVmUm93IDwgbGV0dGVyRGVmaW5pdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgICBsZXR0ZXJEZWZSb3crK1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgbGV0dGVyUm93ID0gbGV0dGVyRGVmaW5pdGlvbltsZXR0ZXJEZWZSb3ddO1xyXG4gICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBjb2x1bW5zIG9mIHRoZSBsZXR0ZXIgZGVmaW5pdGlvblxyXG4gICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgbGV0IGxldHRlckRlZkNvbCA9IDA7XHJcbiAgICAgICAgICAgIGxldHRlckRlZkNvbCA8IGxldHRlclJvdy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldHRlckRlZkNvbCsrXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyRXhpc3RzQXRUaGlzUG9zaXRpb24gPSBsZXR0ZXJSb3dbbGV0dGVyRGVmQ29sXTtcclxuICAgICAgICAgICAgaWYgKGxldHRlckV4aXN0c0F0VGhpc1Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFRhYmxlW2xldHRlckRlZlJvdyArIHJvd0luZGV4XVtsZXR0ZXJEZWZDb2wgKyBjb2xJbmRleF0gPVxyXG4gICAgICAgICAgICAgICAgU3BhY2VEZWYuT2NjdXBpZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdlIGhhdmUgY29tcGxldGVkIGEgbGV0dGVyLCBjb250aW51ZSBwbGFjaW5nIHRoZSB3b3JkXHJcbiAgICAgICAgY29sSW5kZXggKz0gbGV0dGVyTWF4V2lkdGggKyAxO1xyXG4gICAgICAgIGNvbnRpbnVlIHdvcmRMb29wO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbEluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFsZXR0ZXJGaXRzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbml0aWFsVGFibGU7XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNmtCLFNBQVMsb0JBQW9CO0FBQzFtQixPQUFPLFlBQVk7QUFDbkIsWUFBWSxRQUFROzs7QUNtRGIsSUFBTSxnQkFBbUQ7QUFBQSxFQUM5RDtBQUFBO0FBQUEsSUFFRTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsSUFFRTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsSUFFRTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsSUFFRTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLElBRUU7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUNBO0FBQUE7QUFBQSxJQUVFO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBQ0E7QUFBQTtBQUFBLElBRUU7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsSUFFRTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFDQTtBQUFBO0FBQUEsSUFFRTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJ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
