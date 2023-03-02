import * as ActionType from '../ActionType'

const initialState = {
    isLoading: false,
    medicine: [],
    error: null
}
export const medicineReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ActionType.MEDICINE_GET:
            return {
                ...state,
                medicine: action.payload,
                isLoading: false,
                error: null
            }
        case ActionType.MEDICINE_ADD:
            return {
                ...state,
                medicine: state.medicine.concat(action.payload),
                isLoading: false,
                error: null
            }
        case ActionType.MEDICINES_UPDATE:
            let uData = state.medicine.map((m) => {
                if (m.id === action.payload.id) {
                    return action.payload
                } else {
                    return m;
                }
            })
            return {
                ...state,
                medicine: uData
            }
        case ActionType.MEDICINES_DELETE:
            let dData = state.medicine.filter((m) => m.id !== action.payload);
            return {
                ...state,
                medicine: dData,
                isLoading: false,
                error: null
            }
        case ActionType.MEDICINE_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.MEDICINE_ERROR:
            return{
                ...state,
                error: action.payload,
                isLoading:false
            }
        default:
            return state
    }
}