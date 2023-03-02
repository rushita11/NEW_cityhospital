import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";

import { medicinReducer } from "./medicin.reducer";


export const rootReducer = combineReducers({
    count: counterReducer,
    medicine: medicinReducer,
   
})