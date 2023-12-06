// designerReducer.ts
import { FormElementInstance } from "../FormElements";

interface DesignerState {
  elements: FormElementInstance[];
  selectedElement: FormElementInstance | null;
}

const initialState: DesignerState = {
  elements: [],
  selectedElement: null,
};

type DesignerAction =
  | { type: "ADD_ELEMENT"; index: number; element: FormElementInstance }
  | { type: "REMOVE_ELEMENT"; id: string }
  | { type: "UPDATE_ELEMENT"; id: string; element: FormElementInstance }
  | { type: "SET_SELECTED_ELEMENT"; selectedElement: FormElementInstance };

const designerReducer = (state: DesignerState = initialState, action: DesignerAction): DesignerState => {
  switch (action.type) {
    case "ADD_ELEMENT":
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, action.index),
          action.element,
          ...state.elements.slice(action.index),
        ],
      };

    case "REMOVE_ELEMENT":
      return {
        ...state,
        elements: state.elements.filter((element) => element.id !== action.id),
      };

    case "UPDATE_ELEMENT":
      return {
        ...state,
        elements: state.elements.map((element) =>
          element.id === action.id ? action.element : element
        ),
      };

    case "SET_SELECTED_ELEMENT":
      return {
        ...state,
        selectedElement: action.selectedElement,
      };

    default:
      return state;
  }
};

export default designerReducer;
