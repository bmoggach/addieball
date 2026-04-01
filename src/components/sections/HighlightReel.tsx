"use client";

import Image from "next/image";
import Link from "next/link";

export default function HighlightReel() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <div>
        <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
          Latest Highlight
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
          Top <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Play</span>
        </h2>
      </div>

      {/* Featured video with real poster image */}
      <Link href="/highlights" className="block">
        <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-blue-500/[0.08] group cursor-pointer hover:border-blue-500/[0.2] transition-all">
          {/* Poster image */}
          <Image
            src="/images/action/action-2.webp"
            alt="Highlight reel — Addie Moggach #35"
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 1024px"
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
              Game 12 • vs Thunder
            </div>
            <div className="text-sm font-bold text-white/70 mt-1">
              Crossover → Stepback Three 🔥
            </div>
          </div>

          {/* Duration */}
          <div className="absolute bottom-5 right-6 z-20 text-[0.5rem] font-mono text-blue-400/30">
            0:24
          </div>

          {/* Top play badge */}
          <div className="absolute top-5 right-6 z-20 text-[0.45rem] font-bold text-blue-400/50 tracking-[0.15em] uppercase px-3 py-1 bg-blue-500/[0.08] border border-blue-400/15 rounded-full backdrop-blur-sm">
            🔥 Top Play
          </div>
        </div>
      </Link>

      {/* Thumbnail strip with real images */}
      <div className="flex gap-3 mt-6 max-w-5xl mx-auto overflow-x-auto pb-2">
        {[
          { title: "Ankle Breaker", duration: "0:18", src: "/images/action/action-4.webp" },
          { title: "Fast Break Layup", duration: "0:15", src: "/images/action/action-5.webp" },
          { title: "Block Party", duration: "0:12", src: "/images/action/action-1.webp" },
          { title: "Dime from Half", duration: "0:20", src: "/images/action/action-3.webp" },
        ].map((clip, i) => (
          <Link key={i} href="/highlights" className="block flex-shrink-0">
            <div className="w-48 aspect-video rounded-lg border border-blue-500/[0.06] relative overflow-hidden hover:border-blue-500/[0.2] transition-colors group cursor-pointer">
              <Image
                src={clip.src}
                alt={clip.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="192px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-0 h-0 border-l-[8px] border-l-white/70 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 left-3 text-[0.45rem] font-semibold text-white/50 group-hover:text-white/70 transition-colors z-10">
                {clip.title}
              </div>
              <div className="absolute top-2 right-2 text-[0.4rem] font-mono text-white/30 z-10">
                {clip.duration}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
