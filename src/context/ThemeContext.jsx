import React, { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme1")
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme", theme)
        // animation
        setAnimating(true);
        const timer = setTimeout(() => setAnimating(false), 300); // 0.3s
        return () => clearTimeout(timer);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme} ${animating ? "theme-fade" : ""}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeContext
