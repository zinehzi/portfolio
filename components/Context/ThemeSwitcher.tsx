"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  const switchTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setIsActive(!isActive);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span>
      {isActive ? (
        <BsSun onClick={switchTheme} className="cursor-pointer h-5" />
      ) : (
        <BsMoonFill onClick={switchTheme} className="cursor-pointer h-5" />
      )}
    </span>
  );
}
export default ThemeSwitcher;
