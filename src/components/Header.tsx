"use client";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Moon, Store, Sun } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const otherLocale = locale === "ar" ? "en" : "ar";
  const t = useTranslations("Nav");

  return (
    <header className="flex justify-between items-center p-4  border-b border-border backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center gap-3">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-lg font-semibold tracking-tight">
          Opra <span className="text-primary">Solutions</span>
        </span>
      </div>
      <nav className="flex gap-4">
        <Link
          href="/"
          className={`text-foreground hover:text-primary/80 ${pathname === `/${locale}` ? "text-primary font-semibold" : ""}`}
        >
          {t("home")}
        </Link>
        <Link
          href="/about"
          className={`text-foreground hover:text-primary/80 ${pathname === `/${locale}/about` ? "text-primary font-semibold" : ""}`}
        >
          {t("about")}
        </Link>
        <Link
          href="/services"
          className={`text-foreground hover:text-primary/80 ${pathname === `/${locale}/services` ? "text-primary font-semibold" : ""}`}
        >
          {t("services")}
        </Link>
        <Link
          href="/solutions"
          className={`text-foreground hover:text-primary/80 ${pathname === `/${locale}/solutions` ? "text-primary font-semibold" : ""}`}
        >
          {t("solutions")}
        </Link>
        <Link
          href="/contact"
          className={`text-foreground hover:text-primary/80 ${pathname === `/${locale}/contact` ? "text-primary font-semibold" : ""}`}
        >
          {t("contact")}
        </Link>
      </nav>
      <div className="flex gap-2">
        <Link href="/store" className="inline-flex">
          <Button variant="outline" className="cursor-pointer" aria-label="Store">
            <Store />
          </Button>
        </Link>
        <Button
          variant="outline"
          className="cursor-pointer"
          aria-label="Toggle theme"
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
        >
          <Sun className="hidden dark:block" />
          <Moon className="dark:hidden" />
        </Button>
        <Link href={pathname} locale={otherLocale} className="inline-flex">
          <Button variant="outline" className="cursor-pointer" aria-label="Switch locale">
            <Globe />
          </Button>
        </Link>
      </div>
    </header>
  );
}