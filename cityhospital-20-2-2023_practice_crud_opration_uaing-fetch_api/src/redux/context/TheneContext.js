import * as ActionType from '../ActionType'
import { useReducer } from "react";
import { createContext } from "react";
import { themeReducer } from "../reducer/theme.reducer";

const ThemeContext = createContext();

const initialstate = {
    theme: "light"
}

export const ThemeProvider = ({ children }) => {
    // console.log("theme provider");
    const [ state, dispatch ] = useReducer(themeReducer, initialstate);

    const toggle_theme = (themeval) => {
        // console.log(themeval);
        const newTheme = themeval === "light" ? "dark" : "light";
        dispatch({ type: ActionType.THEME_TOGGLE, payload: newTheme })
    }
    
    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggle_theme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext;
