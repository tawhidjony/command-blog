"use client";
import { ThemeContextProvider } from "@/context/ThemeContextProvider";

type IThemeProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: IThemeProps) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default ThemeProvider;
