"use client";
import DarkBtt from "./Icons/IconSVGs/Dark-Btt";
import LightBtt from "./Icons/IconSVGs/Light-Btt";
import { useTheme } from "next-themes";

function Btt() {
  const { theme, setTheme } = useTheme();

  return (
    <a href="#" className="flex self-center h-[50px] relative z-10">
      {theme === "dark" ? <DarkBtt /> : <LightBtt />}
    </a>
  );
}

export default Btt;
