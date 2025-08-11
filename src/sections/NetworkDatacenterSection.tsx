"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Network, Server, Shield, Router, Cable } from "lucide-react";
import Image from "next/image";

export default function NetworkDatacenterSection() {
  // Network Cabling content
  const tNC = useTranslations("NetworkCabling");
  const highlightsNC = (tNC.raw("highlights") as string[]) || [];

  // Network & Datacenter content
  const tDC = useTranslations("NetworkDatacenter");
  const highlightsDC = (tDC.raw("highlights") as string[]) || [];
  const iconsDC = [Network, Server, Shield, Router];

  return (
    <section className="relative mx-auto w-full max-w-[1280px] px-6 py-20 overflow-hidden">
      {/* Network Cabling block */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-3"
      >
        {tNC("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-8 max-w-3xl"
      >
        {tNC("body")}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        <div className="grid grid-cols-2 gap-3">
          {["/window.svg", "/globe.svg", "/next.svg", "/vercel.svg"].map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative rounded-xl border border-border bg-card p-6 ${
                idx % 2 ? "translate-y-4" : ""
              }`}
            >
              <Image src={src} alt="Cabling" width={360} height={220} className="w-full h-auto opacity-80" />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3">
          {highlightsNC.map((h) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35 }}
              className="rounded-lg border border-border bg-card p-4 flex items-start gap-3"
            >
              <Cable className="text-primary" />
              <span className="text-foreground/80">{h}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Network & Datacenter block */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold mb-3"
      >
        {tDC("title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mb-8 max-w-3xl"
      >
        {tDC("body")}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="grid grid-cols-2 gap-3">
          {["/vercel.svg", "/next.svg", "/globe.svg", "/window.svg"].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-xl border border-border bg-card p-6 ${i % 2 ? "translate-y-4" : ""}`}
            >
              <Image src={src} alt="Network & DC" width={360} height={220} className="w-full h-auto opacity-80" />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3">
          {highlightsDC.map((h, i) => {
            const Icon = iconsDC[i % iconsDC.length];
            return (
              <motion.div
                key={h}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-lg border border-border bg-card p-4 flex items-start gap-3"
              >
                <Icon className="text-primary" />
                <span className="text-foreground/80">{h}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


