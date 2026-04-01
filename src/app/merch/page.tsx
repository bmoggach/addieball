"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

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
    <div className="flex gap-3">
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
          <div className="text-[0.35rem] font-semibold text-blue-400/35 tracking-[0.3em] uppercase mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function MerchPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen pt-24 relative">
      {/* Scrolling banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 py-2.5 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-ticker">
          {Array(2).fill(null).map((_, j) => (
            <div key={j} className="flex">
              {["⚡ Drop 001 — Coming Soon", "🏀 Limited to 35", "🔥 AM35 Hoodie", "#35 Addie Moggach"].map((t, i) => (
                <span key={`${j}-${i}`} className="text-[0.55rem] font-bold tracking-[0.25em] uppercase text-white px-8">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 py-20 relative overflow-hidden">
        {/* Ghost 35 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(15rem,35vw,30rem)] font-black text-transparent select-none pointer-events-none"
          style={{
            WebkitTextStroke: "1px rgba(0,100,255,0.04)",
            textShadow: "0 0 80px rgba(0,100,255,0.03)",
          }}
        >
          35
        </div>

        <div className="relative z-10">
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-6">
            Season Two • Drop 001
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            THE <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">AM35</span> HOODIE
          </h1>
          <p className="text-sm text-white/35 mt-6 max-w-lg leading-relaxed">
            The first official AM35 drop. One piece. Limited to 35. 
            Premium heavyweight fleece with the AM35 logo. When it&apos;s gone, it&apos;s gone.
          </p>
        </div>
      </section>

      {/* Product Feature */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-blue-500/[0.08]">
            
            {/* Image side */}
            <div className="aspect-square md:aspect-auto bg-gradient-to-br from-blue-900/[0.06] to-[#030308] relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.08)_0%,transparent_60%)]" />
              
              {/* Smoke background */}
              <video
                src="/videos/smoke-atmo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
              />

              {/* Hoodie icon — replace with actual product photo when available */}
              <div className="relative z-10 text-center">
                <div className="text-[8rem] md:text-[10rem] opacity-[0.15]">🧥</div>
                <div className="text-[0.5rem] font-bold text-blue-400/40 tracking-[0.3em] uppercase mt-2">
                  Product photo coming soon
                </div>
              </div>

              <div className="absolute top-5 left-5 z-20 bg-blue-500/[0.1] border border-blue-400/[0.2] text-blue-400/70 text-[0.42rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded backdrop-blur-sm">
                Drop 001
              </div>
            </div>

            {/* Info side */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-blue-900/[0.02]">
              <div className="text-[0.45rem] font-bold text-blue-400/50 tracking-[0.4em] uppercase mb-4">First Drop</div>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-[0.95] tracking-tight">
                AM35<br /><span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">HOODIE</span>
              </h2>
              
              <div className="space-y-3 mt-6">
                <p className="text-sm text-white/40 leading-relaxed">
                  Premium heavyweight fleece. AM35 logo embroidered on chest.
                  Electric blue on midnight black.
                </p>
                <ul className="space-y-2 text-xs text-white/35">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400/50">→</span> Heavyweight 400gsm fleece
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400/50">→</span> Embroidered AM35 logo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400/50">→</span> Electric blue on black
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400/50">→</span> Limited to 35 pieces
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400/50">→</span> Numbered tag (1 of 35)
                  </li>
                </ul>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-8 pt-6 border-t border-blue-500/[0.06]">
                <div>
                  <div className="text-2xl font-black text-blue-400/70">$85</div>
                  <div className="text-[0.4rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase mt-1">Price</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-400/70">35</div>
                  <div className="text-[0.4rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase mt-1">Made</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white/50">001</div>
                  <div className="text-[0.4rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase mt-1">Drop</div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <div className="text-[0.4rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase mb-3">Sizes</div>
                <div className="flex gap-2">
                  {["YS", "YM", "YL", "S", "M", "L"].map((size) => (
                    <div key={size} className="w-10 h-10 rounded border border-blue-500/[0.1] flex items-center justify-center text-[0.5rem] font-bold text-white/40 hover:border-blue-400/30 hover:text-white/60 transition-all cursor-pointer">
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className="w-full bg-blue-500/[0.1] border border-blue-500/[0.2] text-blue-400/80 text-xs font-bold tracking-[0.2em] uppercase px-6 py-4 rounded hover:bg-blue-500/[0.2] hover:border-blue-500/[0.4] transition-all">
                  Coming Soon — Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown to drop */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
            Drop 001 Launches In
          </div>
          <div className="flex justify-center">
            <Countdown />
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 rounded-xl border border-blue-500/[0.08] bg-blue-900/[0.02] text-center">
            <h3 className="text-xl font-black uppercase tracking-tight mb-2">
              Don&apos;t Miss the <span className="text-blue-400/80">Drop</span>
            </h3>
            <p className="text-xs text-white/35 mb-6">
              Get notified when Drop 001 goes live. First 35 to cop get a numbered piece.
            </p>
            
            {submitted ? (
              <div className="text-sm font-bold text-blue-400/70">
                ✓ You&apos;re on the list. We&apos;ll hit you up. 🏀
              </div>
            ) : (
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-sm text-white/60 placeholder:text-white/20 focus:border-blue-400/30 focus:outline-none transition-colors"
                />
                <button
                  onClick={() => { if (email) setSubmitted(true); }}
                  className="bg-blue-500/[0.15] border border-blue-500/[0.25] text-blue-400/80 text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 rounded hover:bg-blue-500/[0.25] hover:border-blue-500/[0.4] transition-all"
                >
                  Notify Me
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Future drops teaser */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-[0.55rem] font-semibold text-blue-400/40 tracking-[0.3em] uppercase mb-8">
            Coming Later
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "AM35 Snapback", icon: "🧢", drop: "Drop 002" },
              { name: "#35 Replica Jersey", icon: "👕", drop: "Drop 003" },
              { name: "AM35 Signature Ball", icon: "🏀", drop: "Drop 004" },
              { name: "Sticker Pack", icon: "✨", drop: "Drop 005" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-blue-500/[0.05] bg-blue-900/[0.01] text-center hover:border-blue-500/[0.12] transition-all"
              >
                <div className="text-4xl opacity-[0.1] mb-3">{item.icon}</div>
                <div className="text-xs font-bold text-white/40">{item.name}</div>
                <div className="text-[0.4rem] font-semibold text-blue-400/35 tracking-[0.2em] uppercase mt-1">{item.drop}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
