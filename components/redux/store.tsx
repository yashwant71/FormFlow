import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer";
// import thunk from "redux-thunk";

// Create the store using configureStore
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)