import PortfolioRepo from "@/components/PortfolioRepo";
import Space from "@/components/Space";
import { useTranslations } from "next-intl";

function Portfolio() {
  const t = useTranslations("Portfolio")
  return (
    <section className="flex flex-col">
      <p className="text-[22px] md:text-[26px] pb-10">
        {t("port-sec1-title1")}
        <Space />
       {t("port-sec1-title2")}
      </p>
      <ol className="flex flex-col gap-5">
        <PortfolioRepo />
      </ol>
    </section>
  );
}

export default Portfolio;
