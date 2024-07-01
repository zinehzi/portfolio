"use client";
import Icons from "./Icons/Icons";
import { useTheme } from "next-themes";

function Btt() {
  const { theme, setTheme } = useTheme();

  return (
    <a href="#" className="flex self-center h-[50px] relative z-10">
      {theme === "dark" ? (
        <Icons name="DarkBtt" className="Btt" />
      ) : (
        <Icons name="LightBtt" className="Btt" />
      )}
    </a>
  );
}

export default Btt;
