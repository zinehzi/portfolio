import { useTranslations } from "next-intl";

function MyStory() {
  const t = useTranslations("About");
  return <div className="md:text-2xl">{t("about-sec4-title")}</div>;
}

export default MyStory;
