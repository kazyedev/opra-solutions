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
    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-20 overflow-hidden">
      {/* Fiber lights background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 120px at 10% 20%, color-mix(in oklab, var(--primary) 30%, transparent), transparent), radial-gradient(900px 100px at 90% 30%, color-mix(in oklab, var(--primary) 24%, transparent), transparent), radial-gradient(1200px 120px at 20% 90%, color-mix(in oklab, var(--primary) 18%, transparent), transparent)",
          filter: "blur(20px)",
          opacity: 0.35,
        }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute inset-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C20,55 40,65 60,60 80,55 90,45 100,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          className="text-primary/30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,70 C25,65 45,75 65,70 85,65 95,55 100,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-primary/20"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </motion.svg>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-6"
      >
        {t("title")}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {items.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-lg border border-border bg-card/80 backdrop-blur-[2px] p-5 hover:shadow-md transition-shadow"
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
