"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurClients() {
  const t = useTranslations("Clients");
  const clients = t.raw("list") as { name: string; image: string }[];

  const ClientLogo = ({ image, name }: { image: string, name: string }) => {



    return (
      <Image
        src={image}
        alt={name}
        width={120}
        height={48}
        className="h-8 w-auto object-contain opacity-90"
        onError={(e) => {
          // Fallback to placeholder if logo missing
          const target = e.target as HTMLImageElement;
          if (target.src.endsWith("/vercel.svg")) return;
          target.src = "/vercel.svg";
        }}
      />
    );
  };

  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-20">
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
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-muted-foreground mt-2 mb-8"
      >
        {t("subtitle")}
      </motion.p>

      {/* Infinite marquee for client logos */}
      <div className="relative mb-10 overflow-hidden border border-border rounded-lg bg-card/50">
        <motion.div
          className="flex items-center gap-10 py-6 will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: [0, -1000, 0] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...clients, ...clients].map(({image, name}, idx) => (
            <div
              key={`${name}-${idx}`}
              className="shrink-0 flex items-center gap-3 px-4 opacity-80 hover:opacity-100 transition-opacity"
            >
              <ClientLogo image={image} name={name} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Grid of logos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {clients.map(({image, name}, idx) => (
          <div
            key={`${name}-${idx}`}
            className="rounded-md border border-border bg-card p-4 flex items-center justify-center hover:shadow-sm transition-shadow"
            title={name}
          >
            <ClientLogo image={image} name={name} />
          </div>
        ))}
      </div>
    </section>
  );
}


