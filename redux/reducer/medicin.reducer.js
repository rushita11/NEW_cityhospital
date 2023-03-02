import * as ActionType from '../ActionType'
const initialState = {
    isloading: false,
    medicines: [],
    error: null
}

export const medicinReducer = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case ActionType.MEDICINE_GET:
            return {
                ...state,
                medicines: action.payload
            }
    }
}