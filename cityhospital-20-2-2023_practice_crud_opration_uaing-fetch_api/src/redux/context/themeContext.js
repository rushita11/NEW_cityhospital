import * as ActionType from '../ActionType'
import { createContext } from "react";
import { ThemeProvider } from '@emotion/react';


const ThemeContext = createContext();
 const initialstate = {
    theme: "light"
 }
export const themeProvider = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);

    const toggle_theme = (themeval) => {
        const newTheme = themeval === "light" ? "dark" : "light";
        dispatch({type:ActionType.THEME_TOGGLE, payload: newTheme})
    }

    return (
        <ThemeContext.Provider 
        value = {{
            ...state,
            toggle_theme
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}