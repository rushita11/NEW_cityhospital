import * as ActionType from '../ActionType'
const initialState = {
     isloading: false,
     employee : [],
     errors: null
}
export const employeeReducer = (state= initialState, action) => {
     switch(action.type){
        case ActionType.EMPLOYEE_GET:
            return {
               ...state,
               employee: action.payload
            }
        default :{
            return state
        }
     }
}