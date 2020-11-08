import React, { createContext, useState, useEffect } from "react";
import { ThemeName, themes } from "../styles/Themes";
import { ThemeProvider } from 'styled-components';

interface ThemeContextProps {
  themeName: ThemeName;
  toggleTheme: Function;
}

const ThemeContext = createContext<ThemeContextProps>({
  themeName: 'dark',
  toggleTheme: () => { },
});

const CustomThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>('dark');
  const currentTheme = themes[themeName];
  const toggleTheme = () => {
    if(themeName === 'light'){
      setThemeName('dark');
      window.localStorage.setItem('themeName', 'dark')
    } else {
      setThemeName('light');
      window.localStorage.setItem('themeName', 'light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeName');
    localTheme && setThemeName(localTheme as ThemeName);
  }, []);
  
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, CustomThemeProvider };
