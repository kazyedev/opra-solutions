"use client";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Moon, Store, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const otherLocale = locale === "ar" ? "en" : "ar";
  const t = useTranslations("Nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinkClass = (active: boolean) =>
    `block rounded-md px-3 py-2 text-foreground hover:text-primary/80 ${
      active ? "text-primary font-semibold" : ""
    }`;

  return (
    <header className="flex justify-between items-center p-4 border-b border-border backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center gap-3">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-lg font-semibold tracking-tight">
          Opra <span className="text-primary">Solutions</span>
        </span>
      </div>

      <nav className="hidden md:flex gap-4">
        <Link href="/" className={navLinkClass(pathname === `/${locale}`)}>
          {t("home")}
        </Link>
        <Link href="/about" className={navLinkClass(pathname === `/${locale}/about`)}>
          {t("about")}
        </Link>
        <Link href="/services" className={navLinkClass(pathname === `/${locale}/services`)}>
          {t("services")}
        </Link>
        <Link href="/solutions" className={navLinkClass(pathname === `/${locale}/solutions`)}>
          {t("solutions")}
        </Link>
        <Link href="/contact" className={navLinkClass(pathname === `/${locale}/contact`)}>
          {t("contact")}
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-border bg-background"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

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
            const root = document.documentElement.classList;
            const willBeDark = !root.contains("dark");
            if (willBeDark) {
              root.add("dark");
              try { localStorage.setItem("theme", "dark"); } catch {}
            } else {
              root.remove("dark");
              try { localStorage.setItem("theme", "light"); } catch {}
            }
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

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute left-4 right-4 top-full mt-3 rounded-xl border border-border bg-card shadow-lg"
          role="menu"
        >
          <div className="flex flex-col p-2">
            <Link href="/" className={navLinkClass(pathname === `/${locale}`)}>
              {t("home")}
            </Link>
            <Link href="/about" className={navLinkClass(pathname === `/${locale}/about`)}>
              {t("about")}
            </Link>
            <Link href="/services" className={navLinkClass(pathname === `/${locale}/services`)}>
              {t("services")}
            </Link>
            <Link href="/solutions" className={navLinkClass(pathname === `/${locale}/solutions`)}>
              {t("solutions")}
            </Link>
            <Link href="/contact" className={navLinkClass(pathname === `/${locale}/contact`)}>
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}