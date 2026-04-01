"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

const streetwear = [
  { name: "Court Legend Hoodie", desc: "Heavyweight fleece. #35 embroidered. Back print.", price: "$85.00", icon: "🧥", badge: "Limited" },
  { name: "AM35 Snapback", desc: "Structured crown. Electric blue on black. Embroidered.", price: "$45.00", icon: "🧢", badge: "Limited" },
  { name: "Game Day Crew Socks", desc: "Electric blue stripe. Cushioned sole. Knit detail.", price: "$18.00", icon: "🧦", badge: null },
  { name: "Hype Sticker Pack", desc: "12 holographic vinyl stickers. All the branding.", price: "$12.00", icon: "✨", badge: null },
];

const essentials = [
  { name: "#35 Replica Jersey", desc: "Official replica. Electric blue mesh. Performance fabric.", price: "$65.00", icon: "👕", badge: "Signature" },
  { name: "Origin Story Tee", desc: "Oversized fit. AM35 front logo. Back statement.", price: "$40.00", icon: "👚", badge: null },
  { name: "Practice Shorts", desc: "Mesh. Side stripe. #35 on left leg.", price: "$50.00", icon: "🩳", badge: null },
  { name: "AM35 Signature Ball", desc: "Custom colorway. Signature panel. Indoor/outdoor.", price: "$55.00", icon: "🏀", badge: "Signature" },
];

function ProductCard({ product, delay }: { product: typeof streetwear[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-lg overflow-hidden border border-blue-500/[0.05] bg-blue-900/[0.01] hover:border-blue-500/[0.18] transition-all"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
        e.currentTarget.style.transition = "transform 0.1s ease";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.transition = "transform 0.5s ease";
      }}
    >
      <div className="aspect-square bg-gradient-to-br from-blue-900/[0.03] to-blue-950/[0.015] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.04)_0%,transparent_70%)]" />
        <div className="text-5xl opacity-[0.12] group-hover:opacity-[0.2] group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-500">
          {product.icon}
        </div>

        {/* Sold out */}
        <div className="absolute top-3 right-3 bg-red-500/[0.12] border border-red-500/[0.2] text-red-400/85 text-[0.4rem] font-extrabold tracking-[0.2em] uppercase px-2.5 py-1 rounded backdrop-blur-sm">
          Sold Out
        </div>

        {product.badge && (
          <div className="absolute top-3 left-3 bg-blue-500/[0.08] border border-blue-400/[0.15] text-blue-400/60 text-[0.36rem] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded backdrop-blur-sm">
            {product.badge}
          </div>
        )}

        <div className="absolute bottom-3 left-3 text-[0.38rem] font-medium text-blue-400/25 tracking-wider">
          0/35
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs font-bold text-white/60 group-hover:text-white/80 transition-colors mb-1">{product.name}</div>
        <div className="text-[0.5rem] text-white/25 leading-relaxed mb-3">{product.desc}</div>
        <div className="flex justify-between items-center">
          <div className="text-sm font-extrabold text-white/12 line-through">{product.price}</div>
          <button className="text-[0.4rem] font-bold tracking-[0.15em] uppercase text-blue-400/50 bg-blue-500/[0.06] border border-blue-500/[0.1] rounded px-3 py-1.5 hover:bg-blue-500/[0.12] hover:border-blue-500/[0.25] hover:text-blue-400/80 transition-all">
            Notify Me
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Countdown() {
  const [time, setTime] = useState({ d: 14, h: 8, m: 42, s: 17 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { d, h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 justify-center">
      {[
        { val: time.d, label: "Days" },
        { val: time.h, label: "Hours" },
        { val: time.m, label: "Min" },
        { val: time.s, label: "Sec" },
      ].map((item) => (
        <div key={item.label} className="bg-blue-500/[0.04] border border-blue-500/[0.08] rounded-lg px-4 py-3 min-w-[65px] text-center">
          <div className="text-2xl font-black text-blue-400/70 font-mono tabular-nums" style={{ textShadow: "0 0 15px rgba(0,120,255,0.12)" }}>
            {String(item.val).padStart(2, "0")}
          </div>
          <div className="text-[0.35rem] font-semibold text-blue-400/25 tracking-[0.3em] uppercase mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function MerchPage() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number; dur: number }>>([]);

  const handleSoldOutClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const colors = ["#0078ff", "#00c8ff", "#0050dd", "#ffffff", "#ff3c3c"];
    const pieces = Array.from({ length: 35 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2 + (Math.random() - 0.5) * 150,
      y: rect.top,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.4,
      dur: 1 + Math.random(),
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 2000);
  };

  return (
    <main className="min-h-screen pt-24 relative">
      {/* Confetti */}
      {confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[200]">
          {confetti.map((p) => (
            <div
              key={p.id}
              className="absolute w-2 h-2 rounded-sm animate-confetti"
              style={{
                left: p.x,
                top: p.y,
                background: p.color,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.dur}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Scrolling banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 py-2.5 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-ticker">
          {Array(2).fill(null).map((_, j) => (
            <div key={j} className="flex">
              {["⚡ Drop 001 — Sold Out", "🏀 35 pieces each", "🔥 Drop 002 loading", "#35 Addie Moggach"].map((t, i) => (
                <span key={`${j}-${i}`} className="text-[0.55rem] font-bold tracking-[0.25em] uppercase text-white px-8">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Drop Hero */}
      <section className="px-6 md:px-10 py-20 text-center relative overflow-hidden">
        {/* Ghost 35 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(15rem,35vw,30rem)] font-black text-transparent select-none pointer-events-none"
          style={{
            WebkitTextStroke: "1px rgba(0,100,255,0.04)",
            textShadow: "0 0 80px rgba(0,100,255,0.03)",
            animation: "stroke-breathe 5s ease-in-out infinite alternate",
          }}
        >
          35
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-6">
            Season Two // Drop 001
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            THE <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,120,255,0.2)]">OFFICIAL</span> DROP
          </h1>

          {/* Countdown */}
          <div className="mt-12">
            <div className="text-[0.5rem] font-semibold text-blue-400/30 tracking-[0.4em] uppercase mb-4">Drop 002</div>
            <Countdown />
          </div>
        </motion.div>
      </section>

      {/* Featured Product */}
      <section className="px-6 md:px-10 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-blue-500/[0.08] bg-gradient-to-br from-blue-900/[0.03] to-blue-950/[0.01] relative"
        >
          {/* Ghost 35 inside */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-[18rem] font-black text-transparent pointer-events-none"
            style={{ WebkitTextStroke: "1px rgba(0,100,255,0.03)" }}
          >35</div>

          {/* Image side */}
          <div className="aspect-square flex items-center justify-center relative bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.06)_0%,transparent_70%)]">
            <div className="text-9xl opacity-[0.1]">🧥</div>
            <div className="absolute top-5 right-5 bg-red-500/[0.12] border border-red-500/[0.2] text-red-400/85 text-[0.5rem] font-extrabold tracking-[0.2em] uppercase px-3 py-1.5 rounded backdrop-blur-sm">
              Sold Out
            </div>
            <div className="absolute top-5 left-5 bg-blue-500/[0.08] border border-blue-400/[0.15] text-blue-400/60 text-[0.42rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded backdrop-blur-sm">
              Drop 001
            </div>
            <div className="absolute bottom-5 left-5 text-[0.4rem] font-medium text-blue-400/25">35 made · 0 left</div>
          </div>

          {/* Info side */}
          <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
            <div className="text-[0.45rem] font-bold text-blue-400/50 tracking-[0.4em] uppercase mb-4">Featured</div>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.95] tracking-tight">
              COURT<br /><span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">LEGEND</span><br />HOODIE
            </h2>
            <p className="text-xs text-white/30 leading-relaxed mt-4 max-w-sm">
              Premium heavyweight fleece. Embroidered #35 on chest. &ldquo;Built Different&rdquo; back panel. Electric blue on midnight black.
            </p>
            <div className="flex gap-6 mt-6">
              {[
                { val: "$85", label: "Price" },
                { val: "35", label: "Made" },
                { val: "0", label: "Left" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-extrabold text-blue-400/60">{s.val}</div>
                  <div className="text-[0.35rem] font-semibold text-blue-400/20 tracking-[0.2em] uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div key={size} className="w-9 h-9 rounded border border-white/[0.06] flex items-center justify-center text-[0.5rem] font-semibold text-white/15 relative">
                  {size}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.08] rotate-[-45deg]" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSoldOutClick}
                className="bg-white/[0.03] border border-white/[0.06] text-white/15 text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 rounded"
              >
                Sold Out
              </button>
              <button className="bg-blue-500/[0.08] border border-blue-500/[0.15] text-blue-400/70 text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 rounded hover:bg-blue-500/[0.15] hover:border-blue-500/[0.3] transition-all">
                🔔 Notify Me
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Streetwear Drop */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-blue-500/[0.06]">
            <div className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-blue-400/50">⚡ The Streetwear Drop</div>
            <div className="text-[0.45rem] text-white/15 tracking-wider">Drop 001 · 4 pieces · Limited to 35 each</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {streetwear.map((p, i) => (
              <ProductCard key={p.name} product={p} delay={0.3 + i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-blue-500/[0.06]">
            <div className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-blue-400/50">🏀 The Essentials</div>
            <div className="text-[0.45rem] text-white/15 tracking-wider">Drop 001 · 4 pieces · Limited to 35 each</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {essentials.map((p, i) => (
              <ProductCard key={p.name} product={p} delay={0.3 + i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-baseline mb-8 pb-4 border-b border-blue-500/[0.06]">
            <div className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-blue-400/50">📸 Lookbook</div>
            <div className="text-[0.45rem] text-white/15 tracking-wider">Drop 001 Campaign</div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[500px]">
            {[
              { label: "Court Legend Hoodie", icon: "🏀", span: "row-span-2" },
              { label: "Game Day Fit", icon: "👟", span: "" },
              { label: "Behind the Scenes", icon: "🔥", span: "" },
              { label: "Pre-Game", icon: "⭐", span: "" },
              { label: "Team", icon: "💪", span: "" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.span} rounded-lg overflow-hidden border border-blue-500/[0.04] bg-gradient-to-br from-blue-900/[0.04] to-blue-950/[0.02] relative flex items-center justify-center hover:border-blue-500/[0.12] transition-colors group cursor-pointer`}
              >
                <span className="text-4xl opacity-[0.06] group-hover:opacity-[0.12] group-hover:scale-110 transition-all duration-500">{item.icon}</span>
                <div className="absolute bottom-3 left-3 text-[0.45rem] font-semibold text-blue-400/25 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
