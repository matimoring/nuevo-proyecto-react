import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [darkTheme, setDarkTheme] = useState(false)
    
    const data = {
        darkTheme,
    }

    return(
    <ThemeContext.Provider>
        {children}
    </ThemeContext.Provider>
    )
}

export {ThemeContext}
export default ThemeProvider