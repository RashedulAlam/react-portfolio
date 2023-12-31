"use client";
import { createContext, PropsWithChildren, useState, useEffect } from "react";

export const ThemeContext = createContext<any>([
  typeof window !== "undefined" ? localStorage.theme : "light",
]);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" ? localStorage.theme : undefined
  );

  const [loading, setLoading] = useState(true);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
    setLoading(false);
  }, [theme, colorTheme]);

  return (
    <ThemeContext.Provider value={[colorTheme, setTheme]}>
      {!loading && children}
    </ThemeContext.Provider>
  );
};
