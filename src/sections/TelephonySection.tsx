"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Brain, PhoneCall, Cloud, Shield, Network, Video, Headphones, Smartphone, Boxes, Users, Code2, HardDrive } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Artificial Intelligence": Brain,
  ACCS: HardDrive,
  "Call Recording": PhoneCall,
  "High Availability": Shield,
  "Multi-Site Networking": Network,
  Cloud: Cloud,
  "Contact Center": Headphones,
  "Video Conferencing": Video,
  Devices: Boxes,
  Mobility: Smartphone,
  "Development Kit": Code2,
  "Up to 3000 users": Users,
};

export default function TelephonySection() {
  const t = useTranslations("Telephony");
  const features = t.raw("features") as string[];

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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {features.map((f, idx) => {
          const Icon = iconMap[f] ?? Boxes;
          return (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-lg border border-border bg-card p-4 flex items-center gap-2"
            >
              <Icon className="text-primary" />
              <span className="text-sm">{f}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


