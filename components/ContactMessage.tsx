import Space from "@/components/Space";
import { useTranslations } from "next-intl";

function Message({ name }: { name: string }) {
  const t = useTranslations("Contact");
  return (
    <>
      <p className="text-xl">
        {t("contact-msg-title")}
        <span className="font-bold"> {name}</span>
      </p>
      <Space />
      <p>{t("contact-msg-desc1")}</p>
      <p>{t("contact-msg-desc2")}</p>
    </>
  );
}

function Error() {
  const t = useTranslations("Contact");

  return (
    <>
      <p>{t("contact-sec1-error1")}</p>
      <p>{t("contact-sec1-error2")}</p>
    </>
  );
}

export { Message, Error };
