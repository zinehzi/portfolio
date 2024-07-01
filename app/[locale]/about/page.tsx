import Button from "@/components/Button";
import Space from "@/components/Space";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
import AboutImg from "../../../public/assets/images/HomePhoto3.jpg";
import { Link } from "@/i18n.config";
import Devider from "@/components/Devider";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("About");

  return (
    <>
      <section className="flex flex-col items-center gap-12 md:flex-row">
        <div className="md:w-2/4">
          <p className="md:text-[26px] pb-10">{t("about-sec1-title")}</p>
          <p className="pb-6">
            {t("about-sec1-desc1")}
            <Space />
            {t("about-sec1-desc2")}
            <Space />
            {t("about-sec1-desc3")}
          </p>
          <p className="md:text-[20px] font-light pb-6">{t("about-sec1-desc4")}</p>
          <a href="MyResume.pdf">
            <Button type="button">
              {t("about-sec1-btn")}
              <BsFillCheckCircleFill />
            </Button>
          </a>
        </div>
        <div className="md:w-2/4">
          <Image src={AboutImg} alt="About Photo" />
        </div>
      </section>
      <Devider />
      <section>
        <div>
          <p className="md:text-[26px] pb-10">{t("about-sec2-title")}</p>
          <ul className="list-disc px-5">
            <li>{t("about-sec2-desc1")}</li>
            <li>Figma</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Responsive Design</li>
            <li>LESS/SASS</li>
            <li>Bootstrap5</li>
            <li>JavaScript / ES6</li>
            <li>JQuery</li>
            <li>React JS</li>
          </ul>
        </div>
      </section>
      <Devider />
      <section>
        <div>
          <p className="md:text-[26px] pb-10">{t("about-sec3-title")}</p>
          <p className="pb-6">
            {t("about-sec3-desc1")}
            <Space />
            {t("about-sec3-desc2")}
          </p>
          <Link
            href="/about/my-story"
            className="md:text-[20px] font-light underline"
          >
            {t("about-sec3-link")}
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;
