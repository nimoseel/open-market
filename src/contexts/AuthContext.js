import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(localStorage.getItem('token') || null);
    const [ userType, setUserType ] = useState(localStorage.getItem('user_type') || null);

    const setAuthToken = (newToken, newUserType) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('user_type', newUserType);
        setToken(newToken);
        setUserType(newUserType);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_type');
        setToken(null);
        setUserType(null);
    };

    return (
        <AuthContext.Provider value={{ token, userType, setAuthToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};