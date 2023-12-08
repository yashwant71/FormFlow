import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store"; // Make sure to import your store
import { FormElementInstance } from "../../FormElements";

interface DesignerState {
  elements: FormElementInstance[];
  selectedElement: FormElementInstance | null;
}

const initialState: DesignerState = {
  elements: [],
  selectedElement: null,
};

// export const fetchElements = createAsyncThunk("designer/fetchElements", async () => {
//   // Your async logic to fetch elements can go here
//   return [];
// });

const designerSlice = createSlice({
  name: "designer",
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<{ index: number; element: FormElementInstance }>) => {
      const { index, element } = action.payload;
      state.elements.splice(index, 0, element);
    },
    removeElement: (state, action: PayloadAction<string>) => {
      state.elements = state.elements.filter((element) => element.id !== action.payload);
    },
    updateElement: (state, action: PayloadAction<{ id: string; element: FormElementInstance }>) => {
      const { id, element } = action.payload;
      const index = state.elements.findIndex((el) => el.id === id);
      state.elements[index] = element;
    },
    setSelectedElement: (state, action: PayloadAction<FormElementInstance | null>) => {
      state.selectedElement = action.payload;
    },
    setElements: (state, action: PayloadAction<FormElementInstance[]>) => {
      state.elements = action.payload;
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchElements.fulfilled, (state, action: PayloadAction<FormElementInstance[]>) => {
//         state.elements = action.payload;
//       });
//   },
});

export const {
  addElement,
  removeElement,
  updateElement,
  setSelectedElement,
  setElements,
} = designerSlice.actions;

// export const selectDesigner = (state: RootState) => state.designer;

export default designerSlice.reducer;
