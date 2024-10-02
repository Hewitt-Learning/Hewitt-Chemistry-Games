/**
 * Enumerated type to easily describe the classification of elements.
 */
export enum ElementClassification {
  /**
   * The element classification is metal (generally on the left side of periodic table).
   */
  Metal,
  /**
   * The element classification is a nonmetal (generally on the far right of the periodic table).
   */
  Nonmetal,
  /**
   * The element classification is a metalloid (between metals and nonmetals, towards the right-hand side of the periodic table).
   */
  Metalloid,

  AlkaliMetal,
  // /**
  // The element classification for alkalimetal

  // **/

  AlkalineEarthMetal, /**alkaine earth metal */

  Actinide, /** actinide */

  Unknown, /**Unknown chemical compounds  */

  PolyatomicNonMetal, /**Poly Atmomic Non Metals */

  DiatomicNonMetal, /** Diatomic non metal element classification  */

  NobleGas, /**element classification for noble gas */
}

/**
 * Defining our own PeriodicTableElement type, which consists of
 * an element's name, symbol, atomic number, atomic mass, and classification (metal, metalloid, nonmetal)
 */
export interface PeriodicTableElement {
  atomicNumber: number;
  name: string;
  symbol: string;
  atomicMass: number;
  classification: ElementClassification;
}

/**
 * Manually defined, in memory implementation of the periodic table as a 2D array.
 * Indices of the 2D array are either of type PeriodicTableElement or null. Null
 * indices indicate the gaps across the top rows of the periodic table.
 */
export const periodicTable: (PeriodicTableElement | null)[][] = [
  [
    //row 1
    {
      name: "Hydrogen",
      atomicNumber: 1,
      symbol: "H",
      atomicMass: 1.01,
      classification: ElementClassification.Nonmetal,
    },
    // null,
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
      atomicMass: 4.0,
      classification: ElementClassification.Nonmetal,
    },
  ], //end row 1
  [
    //row 2
    {
      name: "Lithium",
      atomicNumber: 3,
      symbol: "Li",
      atomicMass: 6.94,
      classification: ElementClassification.Metal,
    },
    {
      name: "Beryllium",
      atomicNumber: 4,
      symbol: "Be",
      atomicMass: 9.01,
      classification: ElementClassification.Metal,
    },
    // null,
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
      classification: ElementClassification.Metalloid,
    },
    {
      name: "Carbon",
      atomicNumber: 6,
      symbol: "C",
      atomicMass: 12.01,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Nitrogen",
      atomicNumber: 7,
      symbol: "N",
      atomicMass: 14.01,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Oxygen",
      atomicNumber: 8,
      symbol: "O",
      atomicMass: 16.0,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Fluorine",
      atomicNumber: 9,
      symbol: "F",
      atomicMass: 19.0,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Neon",
      atomicNumber: 10,
      symbol: "Ne",
      atomicMass: 20.18,
      classification: ElementClassification.Nonmetal,
    },
  ], //end row 2
  [
    //row 3
    {
      name: "Sodium",
      atomicNumber: 11,
      symbol: "Na",
      atomicMass: 22.99,
      classification: ElementClassification.Metal,
    },
    {
      name: "Magnesium",
      atomicNumber: 12,
      symbol: "Mg",
      atomicMass: 24.31,
      classification: ElementClassification.Metal,
    },
    // null,
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
      classification: ElementClassification.Metal,
    },
    {
      name: "Silicon",
      atomicNumber: 14,
      symbol: "Si",
      atomicMass: 28.09,
      classification: ElementClassification.Metalloid,
    },
    {
      name: "Phosphorus",
      atomicNumber: 15,
      symbol: "P",
      atomicMass: 30.97,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Sulfur",
      atomicNumber: 16,
      symbol: "S",
      atomicMass: 32.07,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Chlorine",
      atomicNumber: 17,
      symbol: "Cl",
      atomicMass: 35.45,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Argon",
      atomicNumber: 18,
      symbol: "Ar",
      atomicMass: 39.95,
      classification: ElementClassification.Nonmetal,
    },
  ], //end row 3
  [
    //row 4
    {
      name: "Potassium",
      atomicNumber: 19,
      symbol: "K",
      atomicMass: 39.1,
      classification: ElementClassification.Metal,
    },
    {
      name: "Calcium",
      atomicNumber: 20,
      symbol: "Ca",
      atomicMass: 40.08,
      classification: ElementClassification.Metal,
    },
    // null,
    {
      name: "Scandium",
      atomicNumber: 21,
      symbol: "Sc",
      atomicMass: 44.96,
      classification: ElementClassification.Metal,
    },
    {
      name: "Titanium",
      atomicNumber: 22,
      symbol: "Ti",
      atomicMass: 47.87,
      classification: ElementClassification.Metal,
    },
    {
      name: "Vanadium",
      atomicNumber: 23,
      symbol: "V",
      atomicMass: 50.94,
      classification: ElementClassification.Metal,
    },
    {
      name: "Chromium",
      atomicNumber: 24,
      symbol: "Cr",
      atomicMass: 52.0,
      classification: ElementClassification.Metal,
    },
    {
      name: "Manganese",
      atomicNumber: 25,
      symbol: "Mn",
      atomicMass: 54.94,
      classification: ElementClassification.Metal,
    },
    {
      name: "Iron",
      atomicNumber: 26,
      symbol: "Fe",
      atomicMass: 55.85,
      classification: ElementClassification.Metal,
    },
    {
      name: "Cobalt",
      atomicNumber: 27,
      symbol: "Co",
      atomicMass: 58.93,
      classification: ElementClassification.Metal,
    },
    {
      name: "Nickel",
      atomicNumber: 28,
      symbol: "Ni",
      atomicMass: 58.69,
      classification: ElementClassification.Metal,
    },
    {
      name: "Copper",
      atomicNumber: 29,
      symbol: "Cu",
      atomicMass: 63.55,
      classification: ElementClassification.Metal,
    },
    {
      name: "Zinc",
      atomicNumber: 30,
      symbol: "Zn",
      atomicMass: 65.38,
      classification: ElementClassification.Metal,
    },
    {
      name: "Gallium",
      atomicNumber: 31,
      symbol: "Ga",
      atomicMass: 69.72,
      classification: ElementClassification.Metal,
    },
    {
      name: "Germanium",
      atomicNumber: 32,
      symbol: "Ge",
      atomicMass: 72.63,
      classification: ElementClassification.Metalloid,
    },
    {
      name: "Arsenic",
      atomicNumber: 33,
      symbol: "As",
      atomicMass: 74.92,
      classification: ElementClassification.Metalloid,
    },
    {
      name: "Selenium",
      atomicNumber: 34,
      symbol: "Se",
      atomicMass: 78.97,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Bromine",
      atomicNumber: 35,
      symbol: "Br",
      atomicMass: 79.9,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Krypton",
      atomicNumber: 36,
      symbol: "Kr",
      atomicMass: 83.8,
      classification: ElementClassification.Nonmetal,
    },
  ], //end row 4
  [
    //row 5
    {
      name: "Rubidium",
      atomicNumber: 37,
      symbol: "Rb",
      atomicMass: 85.47,
      classification: ElementClassification.Metal,
    },
    {
      name: "Strontium",
      atomicNumber: 38,
      symbol: "Sr",
      atomicMass: 87.62,
      classification: ElementClassification.Metal,
    },
    // null,
    {
      name: "Yttrium",
      atomicNumber: 39,
      symbol: "Y",
      atomicMass: 88.91,
      classification: ElementClassification.Metal,
    },
    {
      name: "Zirconium",
      atomicNumber: 40,
      symbol: "Zr",
      atomicMass: 91.22,
      classification: ElementClassification.Metal,
    },
    {
      name: "Niobium",
      atomicNumber: 41,
      symbol: "Nb",
      atomicMass: 92.91,
      classification: ElementClassification.Metal,
    },
    {
      name: "Molybdenum",
      atomicNumber: 42,
      symbol: "Mo",
      atomicMass: 95.95,
      classification: ElementClassification.Metal,
    },
    {
      name: "Technetium",
      atomicNumber: 43,
      symbol: "Tc",
      atomicMass: 97.0,
      classification: ElementClassification.Metal,
    },
    {
      name: "Ruthenium",
      atomicNumber: 44,
      symbol: "Ru",
      atomicMass: 101.07,
      classification: ElementClassification.Metal,
    },
    {
      name: "Rhodium",
      atomicNumber: 45,
      symbol: "Rh",
      atomicMass: 102.91,
      classification: ElementClassification.Metal,
    },
    {
      name: "Palladium",
      atomicNumber: 46,
      symbol: "Pd",
      atomicMass: 106.42,
      classification: ElementClassification.Metal,
    },
    {
      name: "Silver",
      atomicNumber: 47,
      symbol: "Ag",
      atomicMass: 107.87,
      classification: ElementClassification.Metal,
    },
    {
      name: "Cadmium",
      atomicNumber: 48,
      symbol: "Cd",
      atomicMass: 112.41,
      classification: ElementClassification.Metal,
    },
    {
      name: "Indium",
      atomicNumber: 49,
      symbol: "In",
      atomicMass: 114.82,
      classification: ElementClassification.Metal,
    },
    {
      name: "Tin",
      atomicNumber: 50,
      symbol: "Sn",
      atomicMass: 118.71,
      classification: ElementClassification.Metal,
    },
    {
      name: "Antimony",
      atomicNumber: 51,
      symbol: "Sb",
      atomicMass: 121.76,
      classification: ElementClassification.Metalloid,
    },
    {
      name: "Tellurium",
      atomicNumber: 52,
      symbol: "Te",
      atomicMass: 127.6,
      classification: ElementClassification.Metalloid,
    },
    {
      name: "Iodine",
      atomicNumber: 53,
      symbol: "I",
      atomicMass: 126.9,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Xenon",
      atomicNumber: 54,
      symbol: "Xe",
      atomicMass: 131.29,
      classification: ElementClassification.Nonmetal,
    },
  ], //end row 5
  [
    //row 6
    {
      name: "Cesium",
      atomicNumber: 55,
      symbol: "Cs",
      atomicMass: 132.91,
      classification: ElementClassification.Metal,
    },
    {
      name: "Barium",
      atomicNumber: 56,
      symbol: "Ba",
      atomicMass: 137.33,
      classification: ElementClassification.Metal,
    },
    /* {
      name: "57-70",
      atomicNumber: null,
      symbol: "*",
      atomicMass: null,
      classification: ElementClassification.Metal,
    }, */
    {
      name: "Lutetium",
      atomicNumber: 71,
      symbol: "Lu",
      atomicMass: 174.97,
      classification: ElementClassification.Metal,
    },
    {
      name: "Hafnium",
      atomicNumber: 72,
      symbol: "Hf",
      atomicMass: 178.49,
      classification: ElementClassification.Metal,
    },
    {
      name: "Tantalum",
      atomicNumber: 73,
      symbol: "Ta",
      atomicMass: 180.95,
      classification: ElementClassification.Metal,
    },
    {
      name: "Tungsten",
      atomicNumber: 74,
      symbol: "W",
      atomicMass: 183.84,
      classification: ElementClassification.Metal,
    },
    {
      name: "Rhenium",
      atomicNumber: 75,
      symbol: "Re",
      atomicMass: 186.21,
      classification: ElementClassification.Metal,
    },
    {
      name: "Osmium",
      atomicNumber: 76,
      symbol: "Os",
      atomicMass: 190.2,
      classification: ElementClassification.Metal,
    },
    {
      name: "Iridium",
      atomicNumber: 77,
      symbol: "Ir",
      atomicMass: 192.22,
      classification: ElementClassification.Metal,
    },
    {
      name: "Platinum",
      atomicNumber: 78,
      symbol: "Pt",
      atomicMass: 195.08,
      classification: ElementClassification.Metal,
    },
    {
      name: "Gold",
      atomicNumber: 79,
      symbol: "Au",
      atomicMass: 196.97,
      classification: ElementClassification.Metal,
    },
    {
      name: "Mercury",
      atomicNumber: 80,
      symbol: "Hg",
      atomicMass: 200.59,
      classification: ElementClassification.Metal,
    },
    {
      name: "Thallium",
      atomicNumber: 81,
      symbol: "Tl",
      atomicMass: 204.38,
      classification: ElementClassification.Metal,
    },
    {
      name: "Lead",
      atomicNumber: 82,
      symbol: "Pb",
      atomicMass: 207.0,
      classification: ElementClassification.Metal,
    },
    {
      name: "Bismuth",
      atomicNumber: 83,
      symbol: "Bi",
      atomicMass: 208.98,
      classification: ElementClassification.Metal,
    },
    {
      name: "Polonium",
      atomicNumber: 84,
      symbol: "Po",
      atomicMass: 208.93,
      classification: ElementClassification.Metalloid,
    },
    {
      name: "Astatine",
      atomicNumber: 85,
      symbol: "At",
      atomicMass: 209.99,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Radon",
      atomicNumber: 86,
      symbol: "Rn",
      atomicMass: 222.02,
      classification: ElementClassification.Nonmetal,
    },
  ], //end row 6
  [
    //row 7
    {
      name: "Francium",
      atomicNumber: 87,
      symbol: "Fr",
      atomicMass: 223.02,
      classification: ElementClassification.Metal,
    },
    {
      name: "Radium",
      atomicNumber: 88,
      symbol: "Ra",
      atomicMass: 226.03,
      classification: ElementClassification.Metal,
    },
    /* {
      name: "89-102",
      atomicNumber: null,
      symbol: "**",
      atomicMass: null,
      classification: ElementClassification.Metal,
    }, */
    {
      name: "Lawrencium",
      atomicNumber: 103,
      symbol: "Lr",
      atomicMass: 266.12,
      classification: ElementClassification.Metal,
    },
    {
      name: "Rutherfordium",
      atomicNumber: 104,
      symbol: "Rf",
      atomicMass: 267.12,
      classification: ElementClassification.Metal,
    },
    {
      name: "Dubnium",
      atomicNumber: 105,
      symbol: "Db",
      atomicMass: 168.13,
      classification: ElementClassification.Metal,
    },
    {
      name: "Seaborgium",
      atomicNumber: 106,
      symbol: "Sg",
      atomicMass: 269.13,
      classification: ElementClassification.Metal,
    },
    {
      name: "Bohrium",
      atomicNumber: 107,
      symbol: "Bh",
      atomicMass: 270.13,
      classification: ElementClassification.Metal,
    },
    {
      name: "Hassium",
      atomicNumber: 108,
      symbol: "Hs",
      atomicMass: 269.13,
      classification: ElementClassification.Metal,
    },
    {
      name: "Meitnerium",
      atomicNumber: 109,
      symbol: "Mt",
      atomicMass: 277.15,
      classification: ElementClassification.Metal,
    },
    {
      name: "Darmstadtium",
      atomicNumber: 110,
      symbol: "Ds",
      atomicMass: 282.16,
      classification: ElementClassification.Metal,
    },
    {
      name: "Roentgenium",
      atomicNumber: 111,
      symbol: "Rg",
      atomicMass: 282.17,
      classification: ElementClassification.Metal,
    },
    {
      name: "Copernicium",
      atomicNumber: 112,
      symbol: "Cn",
      atomicMass: 286.18,
      classification: ElementClassification.Metal,
    },
    {
      name: "Nihonium",
      atomicNumber: 113,
      symbol: "Nh",
      atomicMass: 286.18,
      classification: ElementClassification.Metal,
    },
    {
      name: "Flerovium",
      atomicNumber: 114,
      symbol: "Fl",
      atomicMass: 290.19,
      classification: ElementClassification.Metal,
    },
    {
      name: "Moscovium",
      atomicNumber: 115,
      symbol: "Mc",
      atomicMass: 290.2,
      classification: ElementClassification.Metal,
    },
    {
      name: "Livermorium",
      atomicNumber: 116,
      symbol: "Lv",
      atomicMass: 293.21,
      classification: ElementClassification.Metal,
    },
    {
      name: "Tennessine",
      atomicNumber: 117,
      symbol: "Ts",
      atomicMass: 294.21,
      classification: ElementClassification.Nonmetal,
    },
    {
      name: "Oganesson",
      atomicNumber: 118,
      symbol: "Og",
      atomicMass: 295.22,
      classification: ElementClassification.Nonmetal,
    },
  ], //end row 7
/*   [
    //row 8
    null,
    null,
    {
      name: "Lanthanum",
      atomicNumber: 57,
      symbol: "La",
      atomicMass: 138.91,
      classification: ElementClassification.Metal,
    },
    {
      name: "Cerium",
      atomicNumber: 58,
      symbol: "Ce",
      atomicMass: 140.12,
      classification: ElementClassification.Metal,
    },
    {
      name: "Praseodymium",
      atomicNumber: 59,
      symbol: "Pr",
      atomicMass: 140.91,
      classification: ElementClassification.Metal,
    },
    {
      name: "Neodymium",
      atomicNumber: 60,
      symbol: "Nd",
      atomicMass: 144.24,
      classification: ElementClassification.Metal,
    },
    {
      name: "Promethium",
      atomicNumber: 61,
      symbol: "Pm",
      atomicMass: 145,
      classification: ElementClassification.Metal,
    },
    {
      name: "Samarium",
      atomicNumber: 62,
      symbol: "Sm",
      atomicMass: 150.36,
      classification: ElementClassification.Metal,
    },
    {
      name: "Europium",
      atomicNumber: 63,
      symbol: "Eu",
      atomicMass: 151.96,
      classification: ElementClassification.Metal,
    },
    {
      name: "Gadolinium",
      atomicNumber: 64,
      symbol: "Gd",
      atomicMass: 157.25,
      classification: ElementClassification.Metal,
    },
    {
      name: "Terbium",
      atomicNumber: 65,
      symbol: "Tb",
      atomicMass: 158.93,
      classification: ElementClassification.Metal,
    },
    {
      name: "Dysprosium",
      atomicNumber: 66,
      symbol: "Dy",
      atomicMass: 162.5,
      classification: ElementClassification.Metal,
    },
    {
      name: "Holmium",
      atomicNumber: 67,
      symbol: "Ho",
      atomicMass: 164.93,
      classification: ElementClassification.Metal,
    },
    {
      name: "Erbium",
      atomicNumber: 68,
      symbol: "Er",
      atomicMass: 167.26,
      classification: ElementClassification.Metal,
    },
    {
      name: "Thulium",
      atomicNumber: 69,
      symbol: "Tm",
      atomicMass: 168.93,
      classification: ElementClassification.Metal,
    },
    {
      name: "Ytterbium",
      atomicNumber: 70,
      symbol: "Yb",
      atomicMass: 173.04,
      classification: ElementClassification.Metal,
    },
    null,
    null,
    null,
  ], //end row 8
  [
    //row 9
    null,
    null,
    {
      name: "Actinium",
      atomicNumber: 89,
      symbol: "Ac",
      atomicMass: 227,
      classification: ElementClassification.Metal,
    },
    {
      name: "Thorium",
      atomicNumber: 90,
      symbol: "Th",
      atomicMass: 232.04,
      classification: ElementClassification.Metal,
    },
    {
      name: "Protactinium",
      atomicNumber: 91,
      symbol: "Pa",
      atomicMass: 231.04,
      classification: ElementClassification.Metal,
    },
    {
      name: "Uranium",
      atomicNumber: 92,
      symbol: "U",
      atomicMass: 238.03,
      classification: ElementClassification.Metal,
    },
    {
      name: "Neptunium",
      atomicNumber: 93,
      symbol: "Np",
      atomicMass: 237.05,
      classification: ElementClassification.Metal,
    },
    {
      name: "Plutonium",
      atomicNumber: 94,
      symbol: "Pu",
      atomicMass: 244,
      classification: ElementClassification.Metal,
    },
    {
      name: "Americium",
      atomicNumber: 95,
      symbol: "Am",
      atomicMass: 243,
      classification: ElementClassification.Metal,
    },
    {
      name: "Curium",
      atomicNumber: 96,
      symbol: "Cm",
      atomicMass: 247,
      classification: ElementClassification.Metal,
    },
    {
      name: "Berkelium",
      atomicNumber: 97,
      symbol: "Bk",
      atomicMass: 247,
      classification: ElementClassification.Metal,
    },
    {
      name: "Californium",
      atomicNumber: 98,
      symbol: "Cf",
      atomicMass: 251,
      classification: ElementClassification.Metal,
    },
    {
      name: "Einsteinium",
      atomicNumber: 99,
      symbol: "Es",
      atomicMass: 252,
      classification: ElementClassification.Metal,
    },
    {
      name: "Fermium",
      atomicNumber: 100,
      symbol: "Fm",
      atomicMass: 257,
      classification: ElementClassification.Metal,
    },
    {
      name: "Mendelevium",
      atomicNumber: 101,
      symbol: "Md",
      atomicMass: 258,
      classification: ElementClassification.Metal,
    },
    {
      name: "Nobelium",
      atomicNumber: 102,
      symbol: "No",
      atomicMass: 259,
      classification: ElementClassification.Metal,
    },
    null,
    null,
    null,
  ], //end row 9 */
];

