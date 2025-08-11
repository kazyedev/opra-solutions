"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Shield, Server, Cloud } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("HomePage.hero");
  return (
    <section className="relative flex items-center justify-center h-[70vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/40 to-background" />

      {/* Animated grid pattern */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          color: "var(--border)",
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
        animate={{ x: [0, 24, 0], y: [0, 12, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto w-full max-w-[1280px] px-6 text-center relative">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/contact">
            <Button size="lg">{t.raw("ctaPrimary") ?? "Get in touch"}</Button>
          </Link>
          <Link href="/solutions">
            <Button size="lg" variant="outline">
              {t.raw("ctaSecondary") ?? "Explore solutions"}
            </Button>
          </Link>
        </div>
      </div>
      {/* Animated color orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 right-1/2 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 left-1/2 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
        animate={{ x: [0, -20, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating tech icons */}
      <motion.div
        aria-hidden
        className="absolute left-8 top-10 text-primary/30"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield size={56} />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute right-10 top-16 text-primary/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Server size={60} />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute bottom-10 right-1/3 text-primary/30"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud size={64} />
      </motion.div>
    </section>
  );
}