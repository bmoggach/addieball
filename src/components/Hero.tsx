"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<HTMLDivElement[]>([]);
  const bloomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      if (titleRef.current) {
        titleRef.current.style.transform = `translate(${x * 10}px, ${y * 6}px)`;
      }
      numberRefs.current.forEach((el) => {
        if (el) el.style.transform = `translate(${x * -20}px, ${y * -12}px)`;
      });
      if (bloomRef.current) {
        bloomRef.current.style.transform = `translate(${x * -15}px, ${y * -10}px) scale(${1 + Math.abs(x) * 0.05})`;
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Court glow */}
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-[radial-gradient(ellipse,rgba(0,100,255,0.1)_0%,transparent_60%)] animate-pulse-slow" />

      {/* Court lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none">
        <div className="absolute bottom-20 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/[0.12] to-transparent" />
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[120px] h-[60px] border border-blue-500/[0.08] border-b-0 rounded-t-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] border border-blue-500/[0.05] border-b-0 rounded-t-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[160px] border border-blue-500/[0.06] border-b-0" />
      </div>

      {/* Energy rings */}
      {[0, 1.7, 3.4].map((delay, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-blue-500/[0.06] pointer-events-none animate-ring-expand"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}

      {/* Center stack */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Radiant bloom */}
        <div
          ref={bloomRef}
          className="absolute w-[clamp(400px,60vw,750px)] h-[clamp(400px,60vw,750px)] rounded-full bg-[radial-gradient(circle,rgba(0,100,255,0.1)_0%,rgba(0,80,255,0.05)_30%,rgba(0,60,255,0.02)_50%,transparent_70%)] animate-bloom-pulse"
        />

        {/* 4-layer #35 */}
        {["number-glow", "number-stroke", "number-fill", "number-edge"].map((cls, i) => (
          <div
            key={cls}
            ref={(el) => { if (el) numberRefs.current[i] = el; }}
            className={`absolute font-inter text-[clamp(18rem,40vw,38rem)] font-black leading-none text-center select-none tracking-tight ${cls}`}
            style={{ willChange: "transform" }}
          >
            35
          </div>
        ))}

        {/* Name */}
        <div ref={titleRef} className="relative z-10 text-center" style={{ willChange: "transform" }}>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(5rem,13vw,11rem)] font-black text-white leading-[0.85] uppercase tracking-[-0.04em]"
            style={{ textShadow: "0 0 80px rgba(0,140,255,0.08)" }}
          >
            ADDIE
          </motion.div>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(5rem,13vw,11rem)] font-black leading-[0.85] uppercase tracking-[-0.04em] bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(0,120,255,0.2)]"
          >
            MOGGACH
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[0.65rem] font-medium text-cyan-400/45 tracking-[0.6em] uppercase mt-8"
          >
            <span className="text-blue-500/25 mr-2">{"//"}</span>
            The Journey Starts Here
            <span className="text-blue-500/25 ml-2">{"//"}</span>
          </motion.div>
        </div>
      </div>

      {/* Floating emojis */}
      {["🏀", "🔥", "💪", "⭐", "👟"].map((emoji, i) => (
        <div
          key={i}
          className="absolute text-xl opacity-[0.12] animate-emoji-float"
          style={{
            top: `${[18, 22, 72, 38, 68][i]}%`,
            left: `${[8, 88, 15, 22, 91][i]}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${7 + i * 1.5}s`,
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Hype stickers */}
      {[
        { text: "🔥 Built Different", top: "22%", right: "16%", rotate: "8deg", delay: "1.5s" },
        { text: "💧 Ice In Her Veins", bottom: "24%", left: "16%", rotate: "-5deg", delay: "1.8s" },
        { text: "⭐ Year Two", top: "32%", left: "8%", rotate: "-12deg", delay: "2.1s" },
      ].map((sticker, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 + i * 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute z-20 bg-blue-500/[0.08] border border-blue-400/[0.15] rounded-full px-4 py-1.5 text-[0.55rem] font-bold text-cyan-400/60 tracking-wider uppercase backdrop-blur-sm cursor-default hover:bg-blue-500/[0.15] hover:border-blue-400/[0.3] hover:scale-110 transition-all"
          style={{
            top: sticker.top,
            right: sticker.right,
            bottom: sticker.bottom,
            left: sticker.left,
            transform: `rotate(${sticker.rotate})`,
          }}
        >
          {sticker.text}
        </motion.div>
      ))}

      {/* Vertical side text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-180 writing-vertical text-[0.45rem] font-medium text-blue-500/[0.12] tracking-[0.4em] uppercase z-20 hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Season Two • 2026
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[0.45rem] font-medium text-blue-500/[0.12] tracking-[0.4em] uppercase z-20 hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Youth Basketball • #35
      </div>

      {/* Side badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute left-10 bottom-[15%] z-20 hidden lg:block"
      >
        <div className="text-[2.5rem] font-black text-blue-400/50 leading-none tracking-tight">#35</div>
        <div className="text-[0.5rem] font-medium text-blue-400/20 tracking-[0.3em] uppercase mt-1">Jersey Number</div>
        <div className="w-[30px] h-px bg-blue-500/15 mt-2" />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute right-10 bottom-[15%] z-20 text-right hidden lg:block"
      >
        <div className="text-[2.5rem] font-black text-blue-400/50 leading-none tracking-tight">2026</div>
        <div className="text-[0.5rem] font-medium text-blue-400/20 tracking-[0.3em] uppercase mt-1">Season Two</div>
        <div className="w-[30px] h-px bg-blue-500/15 mt-2 ml-auto" />
      </motion.div>

      {/* Ticker tape */}
      <div className="absolute bottom-[75px] left-0 w-[200%] z-10 overflow-hidden opacity-[0.05]">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array(2).fill(null).map((_, j) => (
            <div key={j} className="flex">
              {["Addie Moggach", "•", "#35", "•", "Buckets", "•", "Handles", "•", "Game Time", "•", "Let's Hoop", "•", "She's Him", "•", "Next Up", "•"].map((t, i) => (
                <span key={`${j}-${i}`} className="text-base font-extrabold text-blue-400/80 tracking-[0.3em] uppercase px-6">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <div className="w-11 h-11 border-[1.5px] border-blue-500/15 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
          <div className="absolute inset-[-50%] bg-[conic-gradient(transparent,rgba(0,140,255,0.25),transparent)] animate-spin-slow" />
          <div className="w-1 h-1 bg-blue-400/50 rounded-full animate-scroll-bounce relative z-10" />
        </div>
        <div className="text-[0.4rem] font-medium text-blue-500/20 tracking-[0.4em] uppercase mt-3">
          Scroll to Explore
        </div>
      </motion.div>
    </section>
  );
}
