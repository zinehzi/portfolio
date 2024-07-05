import BttIcon from "./BttIcon";
import Navbar from "./NavBar/Navbar";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <div className="flex flex-col z-0">
      <SocialMedia />
      <BttIcon />
      <footer className="flex items-center justify-between bg-bgLightGray px-8 py-[15px] border-t-2 relative">
        <span className="text-textNav">&copy; 2024 Zineh Ziaraty</span>
        <Navbar />
      </footer>
    </div>
  );
}

export default Footer;
