"use client";
import { BsTranslate } from "react-icons/bs";
import { type Locale } from "../../i18n.config";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LocaleSwitcher({ className }: { className?: string }) {
  const [isActive, setIsActive] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const router = useRouter();

  function handleClick(newLocale: Locale) {
    // document.cookie = `NEXT_LOCALE = ${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    // router.refresh();
    setIsActive(!isActive);
    if (isActive) {
      setLocale("fa");
    } else {
      setLocale("en");
    }
    const nextLocale = newLocale;
    router.replace(`/${nextLocale}`);
  }

  return (
    <span className={`cursor-pointer text-primary ${className}`}>
      <BsTranslate
        title={locale}
        className={`${isActive ? "opacity-100" : "opacity-50"}`}
        onClick={() => handleClick(locale)}
      />
    </span>
  );
}

export default LocaleSwitcher;
