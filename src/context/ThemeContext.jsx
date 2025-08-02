import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme1")

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            <div className={`${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeContext
