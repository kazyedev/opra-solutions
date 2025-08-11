"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FileSpreadsheet, UsersRound, LifeBuoy, IdCard, Wrench, Smartphone } from "lucide-react";

export default function OurSolutions() {
  const t = useTranslations("Solutions");
  const items = t.raw("items") as { title: string; desc: string }[];
  const icons = [
    FileSpreadsheet,
    UsersRound,
    LifeBuoy,
    IdCard,
    Wrench,
    Smartphone,
  ];
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="text-primary" />
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
