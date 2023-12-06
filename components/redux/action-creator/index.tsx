// designerActions.ts
import { FormElementInstance } from "../../FormElements";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./yourRootReducerFile"; // Replace with the actual path to your root reducer file
import { Dispatch } from "redux";

type AddElementAction = {
  type: "ADD_ELEMENT";
  payload: [number, FormElementInstance];
};

export const addElement = (index: number, element: FormElementInstance): ThunkAction<void, RootState, null, AddElementAction> => {
  return (dispatch: Dispatch<AddElementAction>) => {
    dispatch({
      type: "ADD_ELEMENT",
      payload: [index, element],
    });
  };
};
// export const addElement = (index: number, element: FormElementInstance) => ({
//   type: "ADD_ELEMENT" as const,
//   index,
//   element,
// });
export const removeElement = (id: string) => {
  return (dispatch:any) => {
    dispatch({
      type: "REMOVE_ELEMENT" as const,
      payload:id,
    });
  };
};
// export const removeElement = (id: string) => ({
//   type: "REMOVE_ELEMENT" as const,
//   id,
// });

export const updateElement = (id: string, element: FormElementInstance) => {
  return (dispatch:any) => {
    dispatch({
      type: "UPDATE_ELEMENT" as const,
      payload:[id,element]
    });
  };
};

// export const updateElement = (id: string, element: FormElementInstance) => ({
//   type: "UPDATE_ELEMENT" as const,
//   id,
//   element,
// });

export const setSelectedElement = (selectedElement: FormElementInstance | null) => {
  return (dispatch:any) => {
    dispatch({
      type: "SET_SELECTED_ELEMENT" as const,
      payload: selectedElement,
    });
  };
};
// export const setSelectedElement = (selectedElement: FormElementInstance | null) => ({
//   type: "SET_SELECTED_ELEMENT" as const,
//   selectedElement,
// });

