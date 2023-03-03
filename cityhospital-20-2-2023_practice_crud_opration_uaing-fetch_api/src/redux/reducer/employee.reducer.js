import * as ActionType from '../ActionType'

const initialState = {
    isLoading: false,
    employee: [],
    error: null
}

export const employeeReducer = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case ActionType.EMPLOYEE_GET:
            return {
                ...state,
                employee: action.payload
            }
        case ActionType.EMPLOYEE_ADD:
            return {
                ...state,
                employee: state.employee.concat(action.payload)
            }
        case ActionType.EMPLOYEE_UPDATE:
            let UpdataData = state.employee.map((m) => {
                if (m.id === action.payload.id) {
                    return action.payload
                } else {
                    return m;
                }
            })
            return {
                ...state,
                employee:UpdataData
            }
            case ActionType.EMPLOYEE_DELETE:
                let Demployee = state.employee.filter((m) => m.id !== action.payload)
                return {
                    ...state,
                    employee : Demployee
                }
        default:
            return state
    }
}