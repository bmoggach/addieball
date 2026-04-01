"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const clips = [
  { title: "Crossover → Stepback Three", game: "vs Thunder", duration: "0:24", src: "/images/action/action-2.webp", badge: "🔥 Top Play" },
  { title: "Ankle Breaker", game: "vs Lightning", duration: "0:18", src: "/images/action/action-4.webp", badge: null },
  { title: "Fast Break Layup", game: "vs Hawks", duration: "0:15", src: "/images/action/action-5.webp", badge: null },
  { title: "Block Party", game: "vs Storm", duration: "0:12", src: "/images/action/action-1.webp", badge: null },
  { title: "Dime from Half", game: "vs Rockets", duration: "0:20", src: "/images/action/action-3.webp", badge: null },
];

export default function HighlightReel() {
  const [active, setActive] = useState(0);
  const featured = clips[active];

  return (
    <section className="relative py-32 px-6 md:px-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
            Latest Highlight
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Top <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Play</span>
          </h2>
        </div>
        <Link
          href="/highlights"
          className="text-[0.5rem] font-bold text-blue-400/40 tracking-[0.2em] uppercase hover:text-blue-400/70 transition-colors hidden md:block"
        >
          All Highlights →
        </Link>
      </div>

      {/* Featured clip — click swaps, doesn't navigate */}
      <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-blue-500/[0.08] group cursor-pointer hover:border-blue-500/[0.2] transition-all">
        {/* Poster image with crossfade */}
        <Image
          key={featured.src}
          src={featured.src}
          alt={featured.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority={active === 0}
        />

        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-20 h-20 rounded-full border-2 border-blue-400/30 flex items-center justify-center bg-blue-500/[0.08] backdrop-blur-sm group-hover:bg-blue-500/[0.2] group-hover:border-blue-400/50 group-hover:scale-110 transition-all">
            <div className="w-0 h-0 border-l-[18px] border-l-blue-400/60 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent ml-1.5 group-hover:border-l-blue-400/90 transition-colors" />
          </div>
        </div>

        {/* Game info overlay */}
        <div className="absolute bottom-5 left-6 z-20">
          <div className="text-[0.45rem] font-semibold text-blue-400/50 tracking-[0.2em] uppercase">
            {featured.game}
          </div>
          <div className="text-sm font-bold text-white/70 mt-1">
            {featured.title} 🔥
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-5 right-6 z-20 text-[0.5rem] font-mono text-blue-400/30">
          {featured.duration}
        </div>

        {/* Badge */}
        {featured.badge && (
          <div className="absolute top-5 right-6 z-20 text-[0.45rem] font-bold text-blue-400/50 tracking-[0.15em] uppercase px-3 py-1 bg-blue-500/[0.08] border border-blue-400/15 rounded-full backdrop-blur-sm">
            {featured.badge}
          </div>
        )}

        {/* Clip counter */}
        <div className="absolute top-5 left-6 z-20 text-[0.45rem] font-mono text-blue-400/30">
          {active + 1} / {clips.length}
        </div>
      </div>

      {/* Thumbnail strip — clicking swaps the featured clip */}
      <div className="flex gap-3 mt-6 max-w-5xl mx-auto overflow-x-auto pb-2">
        {clips.map((clip, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-48 aspect-video rounded-lg border relative overflow-hidden transition-all group cursor-pointer ${
              i === active
                ? "border-blue-400/30 ring-1 ring-blue-400/20"
                : "border-blue-500/[0.06] hover:border-blue-500/[0.2]"
            }`}
          >
            <Image
              src={clip.src}
              alt={clip.title}
              fill
              className={`object-cover transition-all duration-500 ${
                i === active ? "scale-100" : "group-hover:scale-105"
              }`}
              sizes="192px"
              loading="lazy"
            />
            <div className={`absolute inset-0 transition-colors ${
              i === active ? "bg-blue-500/10" : "bg-black/30 group-hover:bg-black/10"
            }`} />

            {/* Play icon on non-active */}
            {i !== active && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-0 h-0 border-l-[8px] border-l-white/70 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
                </div>
              </div>
            )}

            {/* Now playing indicator */}
            {i === active && (
              <div className="absolute top-2 left-2 text-[0.38rem] font-bold text-blue-400/70 tracking-wider uppercase px-1.5 py-0.5 bg-blue-500/[0.15] rounded z-10">
                Now
              </div>
            )}

            <div className="absolute bottom-2 left-3 text-[0.45rem] font-semibold text-white/50 group-hover:text-white/70 transition-colors z-10">
              {clip.title}
            </div>
            <div className="absolute top-2 right-2 text-[0.4rem] font-mono text-white/30 z-10">
              {clip.duration}
            </div>
          </button>
        ))}
      </div>

      <Link
        href="/highlights"
        className="block text-center mt-6 text-[0.5rem] font-bold text-blue-400/40 tracking-[0.2em] uppercase hover:text-blue-400/70 transition-colors md:hidden"
      >
        All Highlights →
      </Link>
    </section>
  );
}
