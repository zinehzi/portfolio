import Icons from "./Icons/Icons";

const SocialMedia = () => {
  return (
    <div className="social fixed bottom-0 left-12 flex flex-col items-center gap-4">
      <ul className="flex flex-col gap-4">
        <li>
          <a target="blank" href="https://github.com/zinehzi">
            <Icons name="GitHub" />
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.linkedin.com/in/zineh-ziaraty/">
            <Icons name="LinkedIn" />
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.instagram.com/ziaraty.zi/">
            <Icons name="Instagram" />
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
