import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";

function NavbarItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const t = useTranslations("Navbar");

  return (
    <ul className={className}>
      {children}
      <Link href="/">
        <li>{t("navbar-home")}</li>
      </Link>
      <Link href="/about">
        <li>{t("navbar-about")}</li>
      </Link>
      <Link href="/portfolio">
        <li>{t("navbar-portfolio")}</li>
      </Link>
      <Link href="/contact">
        <li>{t("navbar-contact")}</li>
      </Link>
    </ul>
  );
}

export default NavbarItem;
