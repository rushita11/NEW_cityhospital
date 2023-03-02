import { combineReducers } from "redux";
import { counterReducer } from "./couter.reducer";
import { medicinesReducer } from "./medicines.reducer";

export const rootReducer = combineReducers({
    count: counterReducer,
    medicines: medicinesReducer
})