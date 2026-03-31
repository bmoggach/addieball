"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Spring-like easing
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(parseFloat((eased * value).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-black text-blue-400/70 leading-none tracking-tight font-mono"
        style={{ textShadow: "0 0 30px rgba(0,120,255,0.15)" }}
      >
        {display}{suffix}
      </div>
      <div className="text-[0.45rem] font-semibold text-blue-400/25 tracking-[0.3em] uppercase mt-3">
        {label}
      </div>
    </div>
  );
}

export default function TheNumbers() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,80,255,0.04)_0%,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
          Season Two
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          The <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Numbers</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto relative z-10"
      >
        <AnimatedStat value={14.2} label="Points Per Game" />
        <AnimatedStat value={5.8} label="Rebounds Per Game" />
        <AnimatedStat value={3.1} label="Assists Per Game" />
        <AnimatedStat value={2.4} label="Steals Per Game" />
      </motion.div>

      {/* Divider line */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/[0.1] to-transparent" />
      </div>

      {/* Secondary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center gap-16 mt-12"
      >
        {[
          { value: "12-6", label: "Win-Loss" },
          { value: "48%", label: "FG%" },
          { value: "22", label: "Season High" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-black text-white/40 tracking-tight">{stat.value}</div>
            <div className="text-[0.4rem] font-medium text-blue-400/20 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
