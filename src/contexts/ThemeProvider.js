import React, { createContext, useState, useContext } from 'react';
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
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(() => !isDarkMode);
    };

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
