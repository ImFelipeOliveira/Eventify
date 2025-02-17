"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { system } from "./theme";
import { getCookie, setCookie } from "cookies-next";
import { ThemeContext } from "./theme-context";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initialColorMode =
    (getCookie("color-mode") as "light" | "dark") || "light";
  const [theme, setTheme] = useState<"light" | "dark">(initialColorMode);

  const setColorMode = () => {
    setCookie("color-mode", theme);
  };

  useEffect(() => {
    setColorMode();
  }, [theme]);

  const toggleTheme = () => {
    const newMode = theme === "light" ? "dark" : "light";
    setTheme(newMode);
  };

  return (
    <ChakraProvider value={system}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NextThemeProvider
          enableSystem
          disableTransitionOnChange
          defaultTheme="light"
          forcedTheme={theme}
        >
          {children}
        </NextThemeProvider>
      </ThemeContext.Provider>
    </ChakraProvider>
  );
}
