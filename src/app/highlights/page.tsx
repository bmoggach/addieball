"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const highlights = [
  { title: "Crossover → Stepback Three", game: "vs Thunder", date: "Mar 28", type: "Buckets", duration: "0:24", featured: true },
  { title: "Ankle Breaker at the Top of the Key", game: "vs Lightning", date: "Mar 21", type: "Handles", duration: "0:18" },
  { title: "Coast to Coast Fast Break", game: "vs Hawks", date: "Mar 14", type: "Buckets", duration: "0:15" },
  { title: "Chase-Down Block from Behind", game: "vs Storm", date: "Mar 7", type: "Defense", duration: "0:12" },
  { title: "No-Look Dime for the And-One", game: "vs Rockets", date: "Feb 28", type: "Assists", duration: "0:20" },
  { title: "Double Crossover Spin Layup", game: "vs Thunder", date: "Feb 21", type: "Handles", duration: "0:22" },
  { title: "Buzzer Beater from Half Court", game: "vs Wolves", date: "Feb 14", type: "Buckets", duration: "0:30" },
  { title: "Steal → Full Court → Poster", game: "vs Lightning", date: "Feb 7", type: "Defense", duration: "0:16" },
];

const filters = ["All", "Buckets", "Handles", "Assists", "Defense"];

export default function HighlightsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 md:px-10 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,80,255,0.04)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
            Top Plays
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
            HIGH<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">LIGHTS</span>
          </h1>
          <p className="text-sm text-white/25 mt-4 max-w-md">
            The best plays from Season Two. Every crossover, every bucket, every block.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="px-6 md:px-10 mb-8">
        <div className="flex gap-3 flex-wrap">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`text-[0.5rem] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all
                ${i === 0
                  ? "bg-blue-500/[0.1] border-blue-400/20 text-blue-400/70"
                  : "border-white/[0.06] text-white/20 hover:border-blue-400/15 hover:text-blue-400/50"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Featured highlight */}
      <section className="px-6 md:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video max-w-6xl rounded-xl overflow-hidden border border-blue-500/[0.08] bg-gradient-to-br from-blue-900/[0.04] to-blue-950/[0.02]"
        >
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-10" />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-24 h-24 rounded-full border-2 border-blue-400/30 flex items-center justify-center bg-blue-500/[0.05] backdrop-blur-sm hover:bg-blue-500/[0.15] hover:border-blue-400/50 transition-all cursor-pointer group">
              <div className="w-0 h-0 border-l-[22px] border-l-blue-400/60 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-2 group-hover:border-l-blue-400/90 transition-colors" />
            </div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06)_0%,transparent_70%)]" />

          <div className="absolute bottom-6 left-8 z-20">
            <div className="text-[0.5rem] font-bold text-blue-400/50 tracking-[0.2em] uppercase mb-1">
              Featured Play • vs Thunder
            </div>
            <div className="text-lg font-bold text-white/70">Crossover → Stepback Three 🔥</div>
          </div>
          <div className="absolute bottom-6 right-8 z-20 text-sm font-mono text-blue-400/30">0:24</div>
          <div className="absolute top-6 right-8 z-20 text-[0.45rem] font-bold text-blue-400/40 tracking-[0.15em] uppercase px-3 py-1 bg-blue-500/[0.08] border border-blue-400/15 rounded-full">
            🔥 Top Play
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
          {highlights.filter(h => !h.featured).map((clip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="group relative rounded-lg overflow-hidden border border-blue-500/[0.05] bg-blue-900/[0.02] cursor-pointer hover:border-blue-500/[0.18] transition-all"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
                e.currentTarget.style.transition = "transform 0.1s ease";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.transition = "transform 0.5s ease";
              }}
            >
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.04)_0%,transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full border border-blue-400/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[10px] border-l-blue-400/70 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 text-[0.4rem] font-mono text-blue-400/25">{clip.duration}</div>
                <div className="absolute top-2 left-2 text-[0.38rem] font-bold text-blue-400/40 tracking-wider uppercase px-2 py-0.5 bg-blue-500/[0.06] rounded">
                  {clip.type}
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs font-bold text-white/60 group-hover:text-white/80 transition-colors">{clip.title}</div>
                <div className="text-[0.4rem] text-blue-400/25 tracking-wider mt-1">{clip.game} • {clip.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
