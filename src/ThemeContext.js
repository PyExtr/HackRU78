import React, { createContext, useState } from 'react';

// Create the theme context
export const ThemeContext = createContext();

// Create the theme provider
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define the theme object
  const theme = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
