"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShoppingBag, Shield, Server, MonitorSmartphone, Cable } from "lucide-react";
import Image from "next/image";

export default function StorePromo() {
  const t = useTranslations("Store");
  const badges = t.raw("badges") as string[];

  return (
    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-24 overflow-hidden">
      {/* background accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 100px at 15% 30%, color-mix(in oklab, var(--primary) 20%, transparent), transparent), radial-gradient(600px 80px at 85% 70%, color-mix(in oklab, var(--secondary) 20%, transparent), transparent)",
          filter: "blur(12px)",
          opacity: 0.35,
        }}
        animate={{ opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-3"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-muted-foreground mb-6"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map((b) => (
              <span key={b} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80">
                {b}
              </span>
            ))}
          </motion.div>
          <motion.a
            href="https://store.oprasolutions.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-primary-foreground hover:bg-primary/90"
          >
            <ShoppingBag /> {t("cta")}
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-xl border border-border bg-card p-6"
        >
          <Image
            src="/images/logo.png"
            alt="Opra Store"
            width={480}
            height={320}
            className="mx-auto h-auto w-[200px] opacity-90"
          />
          <div className="pointer-events-none absolute -top-4 right-6 text-primary/40">
            <Server size={56} />
          </div>
          <div className="pointer-events-none absolute -bottom-4 left-6 text-primary/40">
            <Shield size={56} />
          </div>
          <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-primary/30">
            <MonitorSmartphone size={60} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


