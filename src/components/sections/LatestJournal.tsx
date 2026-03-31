"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LatestJournal() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
          From the Journal
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">
          Latest <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Entry</span>
        </h2>

        <Link href="/journal" className="block group">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-xl border border-blue-500/[0.06] bg-blue-900/[0.02] hover:border-blue-500/[0.15] transition-all">
            {/* Thumbnail */}
            <div className="w-full md:w-64 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-900/[0.06] to-blue-950/[0.03] relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06)_0%,transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-[0.08]">🏀</div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.45rem] font-bold text-blue-400/50 tracking-[0.15em] uppercase px-2 py-1 bg-blue-500/[0.06] rounded">
                  Game Recap
                </span>
                <span className="text-[0.45rem] text-white/20 tracking-wider">Mar 28, 2026</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white/80 group-hover:text-white transition-colors mb-3">
                Game Day vs Lightning ⚡ — 18 Points, 6 Boards
              </h3>
              <p className="text-sm text-white/30 leading-relaxed line-clamp-2">
                Started hot with back-to-back threes in the first quarter. The Lightning couldn&apos;t keep up with the pace. Full breakdown inside...
              </p>
              <div className="mt-4 text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase group-hover:text-blue-400/70 transition-colors">
                Read More →
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
