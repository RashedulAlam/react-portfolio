"use client";
import { ThemeContext } from "@/contexts/themeContext";
import React, { useContext, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useContext(ThemeContext);
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </>
  );
}
