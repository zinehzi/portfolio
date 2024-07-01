import { Link } from "@/i18n.config";
import Navbar from "./Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import BurgerNavbar from "./BurgerNavbar";

function Header() {
  return (
    <header className="flex items-center justify-between gap-8 px-8 py-6 shadow-md">
      <div className="flex items-center gap-7">
        <Link href="/">
          <span className="text-4xl">Z</span>
          <span className="w-[3px] h-[55px] bg-textPrimary absolute top-0 left-14"></span>
        </Link>
        <ThemeSwitcher />
      </div>
      <BurgerNavbar />
      <Navbar />
      <LocaleSwitcher className="text-4xl hidden md:block" />
    </header>
  );
}

export default Header;
