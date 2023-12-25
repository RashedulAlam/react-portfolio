"use client";
import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" ? localStorage.theme : false
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
