/**
 * This file will define data structures and storage of the compounds
 * so they can be used in the compound decoder game
 */



/**
 * This import is not currently being used, but could be used to handle comparisons
 * between the elements and their corresponding compounds.
 */
import { PeriodicTableElement } from "../element-decoder/periodic-table-data";

/**
 * Enumerated type to describe the classification of the compound.
 * Currently only consists of Binary Ionic Compounds
 */

export enum CompoundClassification {
  /**
   * The first classification is Binary Ionic Compounds
   */
  BinaryIonicCompound,
}
/**
 *  Defining a Compound type to store necessary information, like Name
 *  Elements, Chemical Formula, and Compound Classfication
 */

export interface Compound {
  name: string; //Name of the Compound
  elements: string[]; //Element Names - in order
  atomicNumbers: number[]; //ID Numbers - in order
  formula: string;
  classification: CompoundClassification;
}

export const compoundQuestions: (Compound)[] = 
[
    {
        name: "Aluminum Nitride",
        elements: ["Aluminum", "Nitrogen"],
        atomicNumbers: [13,7],
        formula: "Al N",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Aluminum Phosphide",
        elements: ["Aluminum", "Phosphorus"],
        atomicNumbers: [13,15],
        formula: "Al P",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name:"Berylium Oxide",
        elements: ["Berylium", "Oxygen"],
        atomicNumbers: [4,8],
        formula: "Be O",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Magnesium Oxide",
        elements: ["Magnesium","Oxygen"],
        atomicNumbers: [12,8],
        formula: "Mg O",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Calcium Oxide",
        elements: ["Calcium","Oxygen"],
        atomicNumbers: [20,8],
        formula: "Ca O",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Strontium Oxide",
        elements: ["Strontium","Oxygen"],
        atomicNumbers: [38,8],
        formula: "Sr 0",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Barium Oxide",
        elements: ["Barium","Oxygen"],
        atomicNumbers: [56,8],
        formula: "Ba O",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Radium Oxide",
        elements: ["Radium","Oxygen"],
        atomicNumbers: [88,8],
        formula: "Ra O",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Beryllium Sulfide",
        elements: ["Beryllium","Sulfur"],
        atomicNumbers: [4,16],
        formula: "Be S",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Magnesium Sulfide",
        elements: ["Magnesium","Sulfur"],
        atomicNumbers: [12,16],
        formula: "Mg S",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Calcium Sulfide",
        elements: ["Calcium","Sulfur"],
        atomicNumbers: [20,16],
        formula: "Ca S",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Strontium Sulfide",
        elements: ["Strontium","Sulfur"],
        atomicNumbers: [38,16],
        formula: "Sr S",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Barium Sulfide",
        elements: ["Barium","Sulfur"],
        atomicNumbers: [56,16],
        formula: "Ba S",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Radium Sulfide",
        elements: ["Radium","Sulfur"],
        atomicNumbers: [88,16],
        formula: "Ra S",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Lithium Fluoride",
        elements: ["Lithium","Fluorine"],
        atomicNumbers: [3,9],
        formula: "Li F",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Sodium Fluoride",
        elements: ["Sodium","Fluorine"],
        atomicNumbers: [11,9],
        formula: "Na F",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Potassium Fluoride",
        elements: ["Potassium","Fluorine"],
        atomicNumbers: [19,9],
        formula: "K F",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Rubidium Fluoride",
        elements: ["Rubidium","Fluorine"],
        atomicNumbers: [37,9],
        formula: "Rb F",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Cesium Fluoride",
        elements: ["Cesium","Fluorine"],
        atomicNumbers: [55,9],
        formula: "Cs F",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Lithium Chloride",
        elements: ["Lithium","Chlorine"],
        atomicNumbers: [3,17],
        formula: "Li Cl",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Potassium Chloride",
        elements: ["Potassium","Chlorine"],
        atomicNumbers: [19,17],
        formula: "K Cl",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Rubidium Chloride",
        elements: ["Rubidium","Chlorine"],
        atomicNumbers: [37,17],
        formula: "Rb Cl",
        classification: CompoundClassification.BinaryIonicCompound
    },
    {
        name: "Cesium Chloride",
        elements: ["Cesium","Chlorine"],
        atomicNumbers: [55,17],
        formula: "Cs Cl",
        classification: CompoundClassification.BinaryIonicCompound
    },
]