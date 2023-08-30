"use Client";
import { darkTheme, lightTheme } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
type ThemeContextType = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
};
type IThemeContextProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
});

export const ThemeContextProvider = ({ children }: IThemeContextProps) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === "false"?true:false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', darkMode.toString())
  };
  
  const theme = darkMode ? darkTheme : lightTheme;

  const initialValue: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={initialValue}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
