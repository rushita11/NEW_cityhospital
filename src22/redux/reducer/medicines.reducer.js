import * as ActionTypes from '../ActionTypes'

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const medicinesReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.MEDICINES_GET:
            return {
                ...state,
                medicines: action.payload
            }
        case ActionTypes.MEDICINES_ADD:
            return {
                ...state,
                medicines: state.medicines.concat(action.payload)
            }
        case ActionTypes.MEDICINES_UPDATE:
            let uData = state.medicines.map((m) => {
                if (m.id === action.payload.id) {
                    return action.payload
                } else {
                    return m;
                }
            })
            return {
                ...state,
                medicines: uData
            }
        case ActionTypes.MEDICINES_DELETE:
            let dData = state.medicines.filter((m) => m.id !== action.payload);
            return {
                ...state,
                medicines: dData
            }
        default:
            return state
    }
}