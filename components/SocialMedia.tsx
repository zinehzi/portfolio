import GitHub from "./Icons/IconSVGs/GitHub";
import Instagram from "./Icons/IconSVGs/Instagram";
import LinkedIn from "./Icons/IconSVGs/LinkedIn";

const SocialMedia = () => {
  return (
    <div className="social fixed bottom-0 left-12 flex flex-col items-center gap-4">
      <ul className="flex flex-col gap-4">
        <li>
          <a target="blank" href="https://github.com/zinehzi">
            <GitHub />
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.linkedin.com/in/zineh-ziaraty/">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.instagram.com/ziaraty.zi/">
            <Instagram />
          </a>
        </li>
      </ul>
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full w-[5px] h-[5px] bg-textPrimary"></div>
        <div className="w-[3px] h-[90px] bg-textPrimary"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
