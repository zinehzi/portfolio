import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";
import { FC } from "react";

function NavbarItem({
  className,
  children,
  handleOnClick,
}: {
  className?: string;
  children?: React.ReactNode;
  handleOnClick: FC;
}) {
  const t = useTranslations("Navbar");

  return (
    <ul className={className}>
      {children}
      <Link href="/" onClick={handleOnClick}>
        <li>{t("navbar-home")}</li>
      </Link>
      <Link href="/about" onClick={handleOnClick}>
        <li>{t("navbar-about")}</li>
      </Link>
      <Link href="/portfolio" onClick={handleOnClick}>
        <li>{t("navbar-portfolio")}</li>
      </Link>
      <Link href="/contact" onClick={handleOnClick}>
        <li>{t("navbar-contact")}</li>
      </Link>
    </ul>
  );
}

export default NavbarItem;
