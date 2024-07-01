import Button from "@/components/Button";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import HomeImg from "../../public/assets/images/HomePhoto.jpg";
import Space from "@/components/Space";
import { useTranslations } from "next-intl";

function Home() {
  const t = useTranslations("Home");
  return (
    <section className="flex flex-col md:items-center gap-12 md:flex-row">
      <div>
        <p className="text-[24px] md:text-[28px] font-bold pb-10">{t("home-sec1-title")}</p>
        <p className="pb-6">
          {t("home-sec1-desc1")}{" "}
          <span className="font-bold">{t("home-sec1-span1")} </span>
          {t("home-sec1-desc2")}{" "}
          <span className="font-bold">{t("home-sec1-span2")}</span>.
          <Space />
          {t("home-sec1-desc3")}
          <Space />
          {t("home-sec1-desc4")}
        </p>
        <a href="MyResume.pdf">
          <Button type="button">
            {t("home-sec1-btn")}
            <BsFillCheckCircleFill />
          </Button>
        </a>
      </div>
      <div className="md:w-3/4">
        <Image
          src={HomeImg}
          alt="Home Photo"
          className="border p-1 rounded-md"
        />
      </div>
    </section>
  );
}

export default Home;
