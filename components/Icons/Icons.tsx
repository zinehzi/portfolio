import GitHub from "./IconSVGs/GitHub";
import LinkedIn from "./IconSVGs/LinkedIn";
import Instagram from "./IconSVGs/Instagram";
import Twitter from "./IconSVGs/Twitter";
import FaceBook from "./IconSVGs/FaceBook";
import LightBtt from "./IconSVGs/Light-Btt";
import DarkBtt from "./IconSVGs/Dark-Btt";

const list = {
  GitHub: GitHub,
  LinkedIn: LinkedIn,
  Instagram: Instagram,
  Twitter: Twitter,
  FaceBook: FaceBook,
  LightBtt: LightBtt,
  DarkBtt: DarkBtt,
};

function Icons({
  name,
  className,
}: {
  name: React.ReactNode;
  className?: string;
}) {
  const Icon = list[name];

  return (
    <span className={`icon ${className} ${name}`}>
      <Icon />
    </span>
  );
}

export default Icons;
