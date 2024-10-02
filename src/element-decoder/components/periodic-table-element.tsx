import {
  PeriodicTableElement as PeriodicTableElementType,
  ElementClassification,
} from "../periodic-table-data";
import { Compound as CompoundType, CompoundClassification } from "../../compound-decoder/compound-data";
import "./periodic-table-element.css";
import clsx from "clsx";
import { ElementState } from "./periodic-table";
import { addSpace } from "./periodic-table-space";
import { JSXInternal } from "preact/src/jsx";

interface Props {
  /**
   * Gives information about the element, e.g. name, atomic number, symbol, atomic mass, & classification
   */
  element: PeriodicTableElementType;
  /**
   * Determines what to display based on occupied status:
   * Red to element:background animation is incorrect guess (element not occupied/doesn't create a letter)
   * Black background means the element does create a letter, and the guess was correct.
   */
  elementState: ElementState;
  /**
   * Property for checking if the element was clicked
   */
  onClick: () => void;
  style: JSXInternal.CSSProperties;
}

interface Prop {
  compoundData: CompoundType;
  elementState: ElementState;

  onClick: () => void;
  style: JSXInternal.CSSProperties;
}

export const PeriodicTableElement = ({
  element,
  onClick,
  elementState,
  style,
}: Props) => {
  return (
    <button
      style={style}
      onClick={onClick}
      class={clsx(
        "periodic-table-element",
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
        elementState === ElementState.FoundElement &&
          "periodic-table-element-good-click",
        elementState === ElementState.WrongElementClicked &&
          "periodic-table-element-bad-click",
        elementState === ElementState.Compound &&
          "periodic-table-element-compound-click",
      
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
  );
};

export const CompoundTableElement = ({
  compoundData,
  style,
  elementState,
  onClick,
}: Prop) => {
  return (
    <button
      style={style}
      onClick={onClick}
      class={clsx(
        "periodic-table-element",
        compoundData.classification === CompoundClassification.BinaryIonicCompound &&
          "periodic-table-compound-binaryIonic",
        elementState === ElementState.FoundElement &&
          "periodic-table-element-good-click",
        elementState === ElementState.WrongElementClicked &&
          "periodic-table-element-bad-click",
        elementState === ElementState.Compound && 
          "periodic-table-element-compound-click",
      )}
    >
      <span class="periodic-table-compound-atomic-number">
        {compoundData.atomicNumbers}
      </span>
      <span class="periodic-table-element-formula">
        {compoundData.formula}
      </span>
      <span class="periodic-table-compound-name">
        {compoundData.name}
      </span>
      <span class="periodic-table-compound-elements">
        {compoundData.elements}
      </span>
    </button>
  );
};