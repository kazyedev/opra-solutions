"use client";
import { motion } from "framer-motion";

export default function DataFlowBackground() {
  const lanes = [8, 18, 28, 38, 50, 62, 74, 86];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Subtle moving grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          color: "var(--border)",
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(80% 60% at 50% 40%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(80% 60% at 50% 40%, black, transparent 80%)",
          opacity: 0.15,
        }}
        animate={{ x: [0, 24, 0], y: [0, 12, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Vertical data streaks */}
      {lanes.map((left, i) => (
        <motion.div
          key={left}
          aria-hidden
          className="absolute top-[-20vh] h-[30vh] w-px"
          style={{ left: `${left}vw`, background: "linear-gradient(to bottom, hsl(0 0% 100% / 0), var(--primary), hsl(0 0% 100% / 0))" }}
          animate={{ y: ["-20vh", "120vh"] }}
          transition={{ duration: 8 + i * 0.6, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
        />
      ))}

      {/* Diagonal faint streaks */}
      {lanes.slice(0, 5).map((left, i) => (
        <motion.div
          key={`d-${left}`}
          aria-hidden
          className="absolute top-[-25vh] h-[28vh] w-[2px] origin-top"
          style={{
            left: `${left + 5}vw`,
            transform: "rotate(12deg)",
            background:
              "linear-gradient(to bottom, hsl(0 0% 100% / 0), color-mix(in oklab, var(--primary) 70%, transparent), hsl(0 0% 100% / 0))",
            opacity: 0.6,
          }}
          animate={{ y: ["-25vh", "125vh"] }}
          transition={{ duration: 12 + i, repeat: Infinity, ease: "linear", delay: i * 1.1 }}
        />
      ))}

      {/* Soft radial glows */}
      <motion.div
        aria-hidden
        className="absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 right-[12%] h-80 w-80 rounded-full bg-secondary/30 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}


