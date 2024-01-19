import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

const ThemeContext = createContext();

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('error');
    }
    return theme;
};

export const ThemeProvider = ({ children }) => {
    const storedValue = localStorage.getItem('isDarkMode');

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return storedValue ? JSON.parse(storedValue) : false;
    });

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        if (storedValue !== null) {
            setIsDarkMode(JSON.parse(storedValue));
        }
    }, [storedValue]);

    const theme = {
        isDarkMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={theme}>
            <StyledProvider theme={theme}>{children}</StyledProvider>
        </ThemeContext.Provider>
    );
};
