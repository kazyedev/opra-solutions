"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Fingerprint, IdCard, Activity, Users } from "lucide-react";
import Image from "next/image";

export default function AccessControlsSection() {
  const t = useTranslations("AccessControls");
  const bullets = (t.raw("bullets") as string[]) || [];
  const icons = [Fingerprint, Activity, Users];

  return (
    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-20 overflow-hidden">
      {/* soft brand glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 90px at 12% 25%, color-mix(in oklab, var(--primary) 18%, transparent), transparent)",
          filter: "blur(12px)",
          opacity: 0.3,
        }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-3"
      >
        {t("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-8 max-w-3xl"
      >
        {t("body")}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* illustrative image grid (placeholders) */}
        <div className="grid grid-cols-3 gap-3">
          {["/window.svg", "/next.svg", "/globe.svg", "/vercel.svg", "/file.svg", "/window.svg"].map((src, i) => (
            <motion.div
              key={`${src}-${i}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-xl border border-border bg-card p-4 ${i % 2 ? "translate-y-4" : ""}`}
            >
              <Image src={src} alt="Access control visual" width={300} height={200} className="w-full h-auto opacity-90" />
            </motion.div>
          ))}
        </div>

        {/* bullets */}
        <div className="grid gap-4">
          {bullets.map((b, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-lg border border-border bg-card p-4 flex items-start gap-3"
              >
                <Icon className="text-primary shrink-0" />
                <span className="text-foreground/80">{b}</span>
              </motion.div>
            );
          })}
          <div className="rounded-md border border-border bg-card/60 p-3 text-sm text-muted-foreground">
            Smart Access. Total Control.
          </div>
        </div>
      </div>
    </section>
  );
}


