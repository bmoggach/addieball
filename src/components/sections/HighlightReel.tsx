"use client";

import { motion } from "framer-motion";

export default function HighlightReel() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
          Latest Highlight
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
          Top <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Play</span>
        </h2>
      </motion.div>

      {/* Featured video placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-blue-500/[0.08] bg-gradient-to-br from-blue-900/[0.04] to-blue-950/[0.02]"
      >
        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent z-10" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-20 h-20 rounded-full border-2 border-blue-400/30 flex items-center justify-center bg-blue-500/[0.05] backdrop-blur-sm hover:bg-blue-500/[0.15] hover:border-blue-400/50 transition-all cursor-pointer group">
            <div className="w-0 h-0 border-l-[18px] border-l-blue-400/60 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent ml-1.5 group-hover:border-l-blue-400/90 transition-colors" />
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06)_0%,transparent_70%)]" />

        {/* Game info overlay */}
        <div className="absolute bottom-4 left-6 z-20">
          <div className="text-[0.45rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase">
            Game 12 • vs Thunder
          </div>
          <div className="text-sm font-bold text-white/60 mt-1">
            Crossover → Stepback Three 🔥
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-6 z-20 text-[0.5rem] font-mono text-blue-400/30">
          0:24
        </div>
      </motion.div>

      {/* Thumbnail strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-3 mt-6 max-w-5xl mx-auto overflow-x-auto pb-2"
      >
        {["Ankle Breaker", "Fast Break Layup", "Block Party", "Dime from Half"].map((title, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-48 aspect-video rounded-lg border border-blue-500/[0.06] bg-blue-900/[0.02] relative overflow-hidden hover:border-blue-500/[0.2] transition-colors group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.04)_0%,transparent_70%)] group-hover:opacity-150 transition-opacity" />
            <div className="absolute bottom-2 left-3 text-[0.45rem] font-semibold text-white/30 group-hover:text-white/50 transition-colors">
              {title}
            </div>
            <div className="absolute top-2 right-2 text-[0.4rem] font-mono text-blue-400/20">
              0:{12 + i * 3}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
