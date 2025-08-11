"use client";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Network, Video, Shield, Server, Database, Cog, Cloud } from "lucide-react";
import { useRef } from "react";

export default function OurServices() {
  const t = useTranslations("Services");
  const items = t.raw("items") as { title: string; desc: string }[];
  const icons = [Network, Cog, Video, Shield, Server, Database, Shield, Cloud];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 20%", "end 80%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-[1280px] px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-6"
      >
        {t("title")}
      </motion.h2>
      <div className="relative">
        {/* Static track */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        {/* Scroll-driven progress line */}
        <motion.div
          aria-hidden
          className="absolute left-4 top-0 w-1 -translate-x-1/2 rounded bg-primary"
          style={{ height: lineHeight }}
        />

        <div className="ml-10 flex flex-col gap-6">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="relative"
              >
                {/* Node dot */}
                <div className="absolute -left-[42px] top-3 size-3 rounded-full border border-primary bg-background" />
                <div className="rounded-lg border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-primary" />
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
