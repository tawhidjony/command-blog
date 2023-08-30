import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";
type ThemeContextType = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
};
export const useThemeHook = () => {
  const context = useContext<ThemeContextType>(ThemeContext);
  return context;
};
