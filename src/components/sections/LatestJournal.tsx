"use client";

import Image from "next/image";
import Link from "next/link";

export default function LatestJournal() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
          From the Journal
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">
          Latest <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Entry</span>
        </h2>

        <Link href="/journal/game-day-vs-lightning" className="block group">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-xl border border-blue-500/[0.06] bg-blue-900/[0.02] hover:border-blue-500/[0.15] transition-all">
            {/* Thumbnail with real photo */}
            <div className="w-full md:w-64 aspect-video rounded-lg overflow-hidden flex-shrink-0 relative">
              <Image
                src="/images/action/action-4.webp"
                alt="Game Day vs Lightning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 256px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.45rem] font-bold text-blue-400/50 tracking-[0.15em] uppercase px-2 py-1 bg-blue-500/[0.06] rounded">
                  Game Recap
                </span>
                <span className="text-[0.45rem] text-white/35 tracking-wider">Mar 28, 2026</span>
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
      </div>
    </section>
  );
}
