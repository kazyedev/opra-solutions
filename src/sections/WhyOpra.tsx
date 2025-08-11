"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyOpra() {
  const t = useTranslations("WhyOpra");
  const bullets = t.raw("bullets") as string[];
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-6"
      >
        {t("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-6"
      >
        {t("summary")}
      </motion.p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {bullets.map((item, idx) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-md border border-border bg-card p-3 flex items-start gap-2"
          >
            <CheckCircle2 className="mt-0.5 text-primary" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
