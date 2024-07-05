"use client";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import NavbarItem from "./NavbarItem";
import LocaleSwitcher from "../Context/LocaleSwitcher";
import { useState } from "react";

function BurgerNavbar() {
  const [isActive, setIsActive] = useState(false);

  function handleOnClick() {
    setIsActive(!isActive);
  }

  return (
    <nav className="duration-500 md:hidden">
      {isActive ? (
        <MdOutlineClose
          className="text-3xl cursor-pointer"
          onClick={handleOnClick}
        />
      ) : (
        <MdMenu className="text-3xl cursor-pointer" onClick={handleOnClick} />
      )}
      <NavbarItem
        className={`${
          isActive ? "flex" : "hidden"
        } flex-col items-end gap-4 absolute top-16 left-0 right-0 w-full px-8 pt-4 pb-6 bg-white shadow-md burger-menu`}
      >
        <LocaleSwitcher className="text-3xl"/>
      </NavbarItem>
    </nav>
  );
}

export default BurgerNavbar;
