"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Video,
  ScreenShare,
  Mic2,
  PenTool,
  Cpu,
  Zap,
  Monitor,
  Sliders,
  LayoutGrid,
  Activity,
} from "lucide-react";
import Image from "next/image";

export default function VideoCollaborationSection() {
  // Video Collaboration content
  const tVC = useTranslations("VideoCollaboration");
  const bulletsVC = tVC.raw("bullets") as string[];
  const portfolio = tVC.raw("portfolio") as string[] | undefined;
  const iconsVC = [Video, ScreenShare, Mic2, PenTool, Cpu, Zap];

  // Video Wall content
  const tVW = useTranslations("VideoWall");
  const bulletsVW = tVW.raw("bullets") as string[];
  const iconsVW = [Monitor, Sliders, LayoutGrid, Activity];

  return (
    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-20 overflow-hidden">
      {/* Subtle animated brand accent (from VideoWall) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 100px at 10% 30%, color-mix(in oklab, var(--primary) 20%, transparent), transparent), radial-gradient(700px 80px at 90% 70%, color-mix(in oklab, var(--primary) 16%, transparent), transparent)",
          filter: "blur(14px)",
          opacity: 0.3,
        }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Video Collaboration block */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-2"
      >
        {tVC("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-6"
      >
        {tVC("body")}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bulletsVC.map((b, idx) => {
            const Icon = iconsVC[idx % iconsVC.length];
            return (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-lg border border-border bg-card p-4 flex items-start gap-3"
              >
                <Icon className="text-primary" />
                <span className="text-sm text-foreground/80">{b}</span>
              </motion.div>
            );
          })}
        </div>

        {portfolio && (
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-3">Solution Portfolio</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {portfolio.map((p) => (
                <li key={p} className="rounded-md border border-border/50 bg-background px-3 py-2">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Video Wall block */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-3"
      >
        {tVW("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-8 max-w-3xl"
      >
        {tVW("body")}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Decorative gallery */}
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-xl border border-border bg-card p-4 ${
                i % 2 ? "translate-y-6" : ""
              }`}
            >
              <Image
                src="/window.svg"
                alt="Video wall visual"
                width={300}
                height={200}
                className="w-full h-auto opacity-90"
              />
            </motion.div>
          ))}
        </div>

        {/* Bullets */}
        <div className="grid gap-4">
          {bulletsVW.map((b, idx) => {
            const Icon = iconsVW[idx % iconsVW.length];
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
        </div>
      </div>
    </section>
  );
}


