"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Linkedin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const tNav = useTranslations("Nav");
  const tContact = useTranslations("Contact");

  return (
    <footer className="mt-16 border-t border-border bg-secondary/30 text-sm">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-10 grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr] text-foreground/80">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/logo.png" alt="Opra Solutions" width={36} height={36} />
            <span className="text-base font-semibold tracking-tight">Opra Solutions</span>
          </div>
          <p className="text-muted-foreground max-w-prose">
            {tContact("website")}
          </p>
          <div className="mt-4 flex items-center gap-3 text-muted-foreground">
            <a className="hover:text-primary inline-flex items-center gap-2" href={tContact("website") as string} target="_blank" rel="noreferrer">
              <Globe size={16} /> <span>Website</span>
            </a>
            <a className="hover:text-primary inline-flex items-center gap-2" href="https://www.linkedin.com/company/opra-solutions" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav className="grid gap-2 content-start">
          <Link href="/" className="hover:text-primary transition-colors">
            {tNav("home")}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {tNav("about")}
          </Link>
          <Link href="/services" className="hover:text-primary transition-colors">
            {tNav("services")}
          </Link>
          <Link href="/solutions" className="hover:text-primary transition-colors">
            {tNav("solutions")}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {tNav("contact")}
          </Link>
        </nav>

        {/* Contact */}
        <div className="grid gap-3 content-start">
          <div className="flex items-center gap-2">
            <Phone className="text-primary" size={16} />
            <span>{tContact("phone")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-primary" size={16} />
            <div className="flex flex-col">
              <a className="hover:text-primary" href="mailto:aziz@oprasolutions.com">{tContact("emails.aziz")}</a>
              <a className="hover:text-primary" href="mailto:sales@oprasolutions.com">{tContact("emails.sales")}</a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="text-primary mt-0.5" size={16} />
            <span className="text-foreground/70">{tContact("address")}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-muted-foreground">
          <p>© {new Date().getFullYear()} Opra Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-primary" href="#">Privacy</a>
            <a className="hover:text-primary" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


