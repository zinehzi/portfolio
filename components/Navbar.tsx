import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="md:text-lg text-textNav hidden justify-end items-center flex-grow md:flex">
      <NavbarItem className="items-center hidden md:flex gap-8" />
    </nav>
  );
}

export default Navbar;
