import { Compound } from "../../compound-decoder/compound-data";
import {
  PeriodicTableElement as PeriodicTableElementType,
  ElementClassification,
} from "../periodic-table-data";
import { Compound as CompoundType, CompoundClassification } from "../../compound-decoder/compound-data";
import "./periodic-table-element.css";
import clsx from "clsx";
import { useState } from "preact/hooks";
import { ElementState } from "./periodic-table";
import { Level } from "./periodic-table";
import { addSpace, addSpaces} from "./periodic-table-space";

interface Props {
  /**
   * Gives information about the element, e.g. name, atomic number, symbol, atomic mass, & classification
   */
  activeElement: PeriodicTableElementType;


  /**
   * Property for the difficulty of the game
   */
  level: Level;

  /**
   * Gives information regarding compounds, e.g. name, elements used, chemical formulation, classification
   */
  comp: Compound | null;
}

/**
 * Displays element to search for based on the difficulty of the game
 * @param element - The element that player needs to find from the periodic table
 * @param level - The difficulty of the game, There is Beginner, Intermediate and Advanced and Compound
 * @param comp - The Compound that the element is in.
 */
export const ElementToFind = ({ activeElement: element, level, comp }: Props) => {
  return level === Level.Beginner ? (
    <button
      class={clsx(
        "periodic-table-element",
        "periodic-table-element-to-find",
        element.classification === ElementClassification.Metal &&
        "periodic-table-element-metal",
        element.classification === ElementClassification.Metalloid &&
        "periodic-table-element-metalloid",
        element.classification === ElementClassification.Nonmetal &&
        "periodic-table-element-nonmetal",
        element.classification === ElementClassification.AlkaliMetal &&
        "periodic-table-element-alkalimetal",
        element.classification === ElementClassification.AlkalineEarthMetal &&
        "periodic-table-element-alkalineearthmetal",
        element.classification === ElementClassification.Actinide &&
        "periodic-table-element-actinide",
        element.classification === ElementClassification.Unknown &&
        "periodic-table-element-unknown",
        element.classification === ElementClassification.PolyatomicNonMetal &&
        "periodic-table-element-poly",
        element.classification === ElementClassification.DiatomicNonMetal &&
        "periodic-table-element-di",
        element.classification === ElementClassification.NobleGas &&
        "periodic-table-element-noblegas",
      )}
    >
      <span class="periodic-table-element-atomic-number">
        {element.atomicNumber}
      </span>
      <span class="periodic-table-element-symbol">
        {addSpace(element.symbol)}
      </span>
      <span class="periodic-table-element-name">{addSpace(element.name)}</span>
      <span class="periodic-table-element-atomic-mass">
        {element.atomicMass}
      </span>
    </button>
  ) : level === Level.Intermediate ? (
    <button
      class={clsx("periodic-table-element", "periodic-table-element-to-find")}
    >
      <span class="periodic-table-element-symbol">
        {addSpace(element.symbol)}
      </span>
      <span class="periodic-table-element-name">{addSpace(element.name)}</span>
    </button>
  ) : level === Level.Advanced ? (
    <button
      class={clsx(
        "periodic-table-element",
        "periodic-table-element-to-find",
        "periodic-table-element-advanced",
      )}

    >
      <span>{addSpaces()}</span>
      <span class="periodic-table-element-name">{addSpace(element.name)}</span>
    </button>
  ) : level === Level.Compound ? (
    <button
      class={clsx(
        "periodic-table-element",
        "periodic-table-element-to-find",
        "periodic-table-element-advanced",
      )}>
        <span>{addSpaces()}</span>
      <span class="periodic-table-element-name">{CompNull(comp, element)}</span>
    </button>
  ) : (
    <></>
  );
};


/**
 * This function checks to see if a compound was supplied with element,
 * if yes it will display the compound name, if no it will display the 
 * element name.
 * @param comp - compound passed into <ElementToFind>
 * @param element - current element being displayed
 * @returns - compound name, or element name if compound is null or missing name.
 */
function CompNull(comp: Compound | null, element: PeriodicTableElementType): string {
  if (comp !== null) {
    //The addspace function doesn't work with strings with spaces, so that functionality
    //has been taken out for compound name.
    return comp?.name;
  } else {
    return addSpace(element.name);
  }
}