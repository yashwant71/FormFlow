import { combineReducers } from "redux";
import itemreducer from "./itemReducer";

const reducers = combineReducers({
    item: itemreducer
})

export default reducers;