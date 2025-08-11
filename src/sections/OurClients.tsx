"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function OurClients() {
  const t = useTranslations("Clients");
  const clients = t.raw("list") as string[];

  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold"
      >
        {t("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mt-2 mb-8"
      >
        {t("subtitle")}
      </motion.p>

      {/* Infinite marquee for client names */}
      <div className="relative mb-10 overflow-hidden border border-border rounded-lg bg-card/50">
        <motion.div
          className="flex items-center gap-10 py-6 will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: [0, -1000, 0] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...clients, ...clients].map((name, idx) => (
            <div key={`${name}-${idx}`} className="shrink-0 flex items-center gap-3 px-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="size-9 rounded-md bg-secondary/40 flex items-center justify-center">
                <Building2 className="text-primary" />
              </div>
              <span className="text-sm md:text-base">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Grid for better SEO and scanability */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {clients.map((name) => (
          <div key={name} className="rounded-md border border-border bg-card p-3 text-center text-sm text-muted-foreground hover:shadow-sm transition-shadow">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}


