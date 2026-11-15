import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext(null);

function getInitialTheme() {
    try {
        const savedTheme = localStorage.getItem("blog-theme");
        return savedTheme === "dark" ? "dark" : "light";
    } catch {
        return "light";
    }
}

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(getInitialTheme);
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("blog-theme", theme);
        } catch {}
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}