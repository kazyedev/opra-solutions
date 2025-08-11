"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Boxes } from "lucide-react";
import Image from "next/image";

export default function OurPartners() {
  const t = useTranslations("TechPartners");
  const products = t.raw("products") as Record<string, string[]>;
  const brands = t.raw("brands") as string[];
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

      {/* Infinite sliding brand row */}
      <div className="relative mb-10 overflow-hidden border border-border rounded-lg bg-card/50">
        <motion.div
          className="flex items-center gap-10 py-6 will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: [0, -1000, 0] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="shrink-0 flex items-center gap-3 px-2 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="size-10 rounded-md bg-secondary/40 flex items-center justify-center">
                <Boxes className="text-primary" />
              </div>
              <span className="text-sm md:text-base">{brand}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(products).map(([category, list], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Boxes className="text-primary" />
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              {list.map((item) => (
                <li key={item} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
