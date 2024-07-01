"use client";
import { useTheme } from "next-themes";
import { BsMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  if (theme === "light") {
    return (
      <BsMoonFill
        onClick={() => setTheme("dark")}
        className="cursor-pointer h-5"
      />
    );
  }

  if (theme === "dark") {
    return (
      <BsSun onClick={() => setTheme("light")} className="cursor-pointer" />
    );
  }
}
export default ThemeSwitcher;
