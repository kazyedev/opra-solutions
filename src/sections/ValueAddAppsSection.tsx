"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ValueAddAppsSection() {
  const t = useTranslations("ValueAdd");
  const apps = t.raw("apps") as string[];

  return (
    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-20 overflow-hidden">
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
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-6"
      >
        {t("subtitle")}
      </motion.p>

      {/* Infinite sliding ring of value-add apps (two rows opposite directions) */}
      <div className="relative overflow-hidden rounded-lg border border-border bg-card/50">
        <motion.div
          className="flex items-center gap-6 py-5 will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: [0, -1200, 0] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...apps, ...apps].map((name, idx) => (
            <div key={`top-${name}-${idx}`} className="shrink-0 rounded-full border border-border bg-background px-4 py-2 text-xs flex items-center gap-2">
              <Sparkles className="text-primary" size={14} />
              <span>{name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex items-center gap-6 py-5 will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: [0, 1200, 0] }}
          transition={{ duration: 42, ease: "linear", repeat: Infinity }}
        >
          {[...apps, ...apps].map((name, idx) => (
            <div key={`bot-${name}-${idx}`} className="shrink-0 rounded-full border border-border bg-background px-4 py-2 text-xs flex items-center gap-2 opacity-80">
              <Sparkles className="text-primary" size={14} />
              <span>{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


