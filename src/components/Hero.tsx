"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      if (textRef.current) {
        textRef.current.style.transform = `translate3d(${x * 8}px, ${y * 5}px, 0)`;
      }
      if (numberRef.current) {
        numberRef.current.style.transform = `translate3d(${x * -15}px, ${y * -10}px, 0)`;
      }
      if (photoRef.current) {
        photoRef.current.style.transform = `translate3d(${x * 4}px, ${y * 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-[20%] w-[60%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,80,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-[radial-gradient(ellipse,rgba(0,140,255,0.04)_0%,transparent_60%)]" />
      </div>

      {/* Court lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none">
        <div className="absolute bottom-20 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/[0.08] to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] border border-blue-500/[0.04] border-b-0 rounded-t-full" />
      </div>

      {/* Energy rings (subtle) */}
      {[0, 2, 4].map((delay, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/[0.03] pointer-events-none animate-ring-expand"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}

      {/* ═══════════════════════════════════
          SPLIT LAYOUT: Left text / Right photo
          ═══════════════════════════════════ */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-end">

        {/* ── LEFT SIDE: Typography ── */}
        <div className="relative z-20 flex-1 flex flex-col justify-end pb-[6vh] md:pb-[12vh] pl-6 md:pl-[clamp(2rem,6vw,6rem)]">

          {/* Big #35 watermark behind text */}
          <div
            ref={numberRef}
            className="absolute bottom-[5vh] left-[clamp(1rem,4vw,4rem)] pointer-events-none select-none"
            style={{ willChange: "transform" }}
          >
            <div className="text-[clamp(8rem,25vw,28rem)] font-black leading-none tracking-tight number-glow opacity-60">
              35
            </div>
          </div>

          <div ref={textRef} className="relative" style={{ willChange: "transform" }}>
            {/* Tagline */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[0.6rem] font-semibold text-cyan-400/50 tracking-[0.5em] uppercase mb-6"
            >
              <span className="text-blue-500/30 mr-2">{"//"}</span>
              Barrie Royals • U12 Rep
              <span className="text-blue-500/30 ml-2">{"//"}</span>
            </motion.div>

            {/* ADDIE */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,11vw,10rem)] font-black text-white leading-[0.85] uppercase tracking-[-0.04em]"
            >
              ADDIE
            </motion.div>

            {/* MOGGACH */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,11vw,10rem)] font-black leading-[0.85] uppercase tracking-[-0.04em] bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              MOGGACH
            </motion.div>

            {/* Info row */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 mt-6 md:mt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-blue-500/20 flex items-center justify-center">
                  <span className="text-sm font-black text-blue-400/70">35</span>
                </div>
                <div>
                  <div className="text-[0.55rem] font-bold text-white/50 tracking-wider uppercase">Jersey</div>
                  <div className="text-[0.45rem] text-blue-400/30 tracking-wider uppercase">Number</div>
                </div>
              </div>
              <div className="w-px h-8 bg-blue-500/10" />
              <div>
                <div className="text-[0.55rem] font-bold text-white/50 tracking-wider uppercase">Season Two</div>
                <div className="text-[0.45rem] text-blue-400/30 tracking-wider uppercase">2025–2026</div>
              </div>
              <div className="w-px h-8 bg-blue-500/10" />
              <div>
                <div className="text-[0.55rem] font-bold text-white/50 tracking-wider uppercase">Built Different</div>
                <div className="text-[0.45rem] text-blue-400/30 tracking-wider uppercase">Always ✌️</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT SIDE: Photo cutout ── */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0 w-full md:w-[45%] max-w-[550px] h-[50vh] md:h-full flex items-end justify-center pointer-events-none absolute bottom-0 right-0 md:relative"
          style={{ willChange: "transform" }}
        >
          {/* Glow behind the photo */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,80,255,0.1)_0%,transparent_60%)]" />

          {/* Blue smoke video loop behind Addie */}
          <video
            src="/videos/smoke-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[80%] object-cover object-bottom opacity-50 mix-blend-screen z-[5] pointer-events-none"
          />

          <Image
            src="/images/hero/addie-cutout.webp"
            alt="Addie Moggach #35 — Barrie Royals"
            width={700}
            height={933}
            priority
            className="relative z-10 h-[50vh] md:h-[88vh] w-auto object-contain object-bottom drop-shadow-[0_0_60px_rgba(0,60,255,0.12)]"
          />

          {/* Floating badge on the photo side */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute top-[18%] right-[5%] z-20 bg-blue-500/[0.08] border border-blue-400/[0.15] rounded-full px-4 py-1.5 text-[0.55rem] font-bold text-cyan-400/60 tracking-wider uppercase backdrop-blur-sm hidden md:block"
          >
            🔥 Built Different
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute top-[35%] left-[-5%] z-20 bg-blue-500/[0.08] border border-blue-400/[0.15] rounded-full px-4 py-1.5 text-[0.55rem] font-bold text-cyan-400/60 tracking-wider uppercase backdrop-blur-sm hidden md:block"
          >
            👑 Barrie Royals
          </motion.div>
        </motion.div>
      </div>

      {/* Floating emojis */}
      {["🏀", "🔥", "💪", "⭐", "👟"].map((emoji, i) => (
        <div
          key={i}
          className="absolute text-xl opacity-[0.08] animate-emoji-float pointer-events-none"
          style={{
            top: `${[18, 25, 72, 40, 68][i]}%`,
            left: `${[5, 45, 12, 75, 88][i]}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${7 + i * 1.5}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Vertical side text */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 rotate-180 text-[0.4rem] font-medium text-blue-500/[0.08] tracking-[0.4em] uppercase z-20 hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Barrie Royals • 2025–2026
      </div>

      {/* Ticker tape */}
      <div className="absolute bottom-[60px] left-0 w-[200%] z-10 overflow-hidden opacity-[0.04]">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array(2)
            .fill(null)
            .map((_, j) => (
              <div key={j} className="flex">
                {[
                  "Addie Moggach",
                  "•",
                  "#35",
                  "•",
                  "Barrie Royals",
                  "•",
                  "Buckets",
                  "•",
                  "Game Time",
                  "•",
                  "Built Different",
                  "•",
                ].map((t, i) => (
                  <span
                    key={`${j}-${i}`}
                    className="text-base font-extrabold text-blue-400/80 tracking-[0.3em] uppercase px-6"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-center"
      >
        <div className="w-10 h-10 border border-blue-500/15 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
          <div className="absolute inset-[-50%] bg-[conic-gradient(transparent,rgba(0,140,255,0.2),transparent)] animate-spin-slow" />
          <div className="w-1 h-1 bg-blue-400/40 rounded-full animate-scroll-bounce relative z-10" />
        </div>
        <div className="text-[0.35rem] font-medium text-blue-500/15 tracking-[0.4em] uppercase mt-2">
          Scroll
        </div>
      </motion.div>
    </section>
  );
}
