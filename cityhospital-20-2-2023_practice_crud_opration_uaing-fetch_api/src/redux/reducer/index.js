import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { employeeReducer } from "./employee.reducer";
import { medicineReducer } from "./medicine.reducer";

export const rootReducer = combineReducers({
    count: counterReducer,
    medicine: medicineReducer,
    employee : employeeReducer
})