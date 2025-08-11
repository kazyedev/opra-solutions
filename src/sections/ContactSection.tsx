"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useMemo, useState } from "react";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [sent, setSent] = useState(false);
  const phoneRaw = t("phone") as string;
  const telHref = `tel:${phoneRaw.replace(/\s+/g, '').replace(/^00/, '+')}`;
  const address = t("address") as string;
  const mapSrc = useMemo(() => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encoded}&output=embed`;
  }, [address]);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-2"
      >
        {t("title")}
      </motion.h2>
      <p className="text-muted-foreground mb-8">{t("website")}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact details and form */}
        <div className="space-y-5">
          <div className="rounded-lg border border-border bg-card p-5">
            <a className="flex items-center gap-3 mb-3 hover:text-primary" href={telHref}>
              <Phone className="text-primary" />
              <span>{phoneRaw}</span>
            </a>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-primary" />
              <div className="flex flex-col">
                <a className="hover:text-primary" href="mailto:aziz@oprasolutions.com">{t("emails.aziz")}</a>
                <a className="hover:text-primary" href="mailto:sales@oprasolutions.com">{t("emails.sales")}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" />
              <span className="text-sm text-muted-foreground">{t("address")}</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold mb-4">{t("form.title")}</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input className="col-span-1 rounded-md border border-border bg-background p-2" placeholder={t("form.name") as string} required />
              <input className="col-span-1 rounded-md border border-border bg-background p-2" placeholder={t("form.email") as string} type="email" required />
              <input className="col-span-1 rounded-md border border-border bg-background p-2" placeholder={t("form.phone") as string} />
              <textarea className="col-span-1 md:col-span-2 rounded-md border border-border bg-background p-2 min-h-28" placeholder={t("form.message") as string} />
              <button className="col-span-1 md:col-span-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
                {t("form.submit")}
              </button>
              {sent && (
                <p className="col-span-2 text-green-600 text-sm">{t("form.success")}</p>
              )}
            </form>
          </div>
        </div>

        {/* Map / location */}
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <div className="p-5 border-b border-border">
            <h3 className="font-semibold">{t("location.title")}</h3>
          </div>
          <div className="h-[90%]">
            <iframe
              title="location"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


