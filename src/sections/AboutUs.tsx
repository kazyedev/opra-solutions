"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function AboutUs() {
  const t = useTranslations("Company");
  return (
    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">{t("welcomeTitle")}</h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">{t("welcomeBody")}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <Eye className="text-primary" />
              <h2 className="text-xl font-semibold">{t("visionTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("visionBody")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <Target className="text-primary" />
              <h2 className="text-xl font-semibold">{t("missionTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("missionBody")}</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative overflow-hidden rounded-xl border border-border bg-card p-6"
        >
          <Image
            src="/images/logo.png"
            alt="Opra Solutions"
            width={600}
            height={400}
            className="mx-auto h-auto w-[240px] opacity-90"
            priority
          />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
          <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-secondary/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}