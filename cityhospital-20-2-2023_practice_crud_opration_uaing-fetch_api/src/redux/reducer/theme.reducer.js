import * as ActionType from '../ActionType'

export const themeReducer = (state, action) => {
    switch(action.type) {
        case ActionType.THEME_TOGGLE: {
            return {
                ...state,
                theme: action.payload
            }
        }
    }
}