import Btt from "./Btt";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <div className="flex flex-col z-0">
      <SocialMedia />
      <Btt />
      <footer className="flex items-center justify-between bg-bgLightGray px-8 py-[15px] border-t-2 relative">
        <span className="text-textNav">&copy; 2024 Zineh Ziaraty</span>
        <Navbar />
      </footer>
    </div>
  );
}

export default Footer;
