"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const clips = [
  { title: "Game Day", game: "Season Two", duration: "0:24", poster: "/images/action/action-2.webp", video: "/videos/game-real.mp4", badge: "🎥 Real Footage" },
  { title: "Handles", game: "AI Generated", duration: "0:05", poster: "/images/action/action-5.webp", video: "/videos/clip-dribble.mp4", badge: null },
  { title: "Quick Moves", game: "AI Generated", duration: "0:05", poster: "/images/action/action-4.webp", video: "/videos/clip-moves.mp4", badge: null },
  { title: "Court Vision", game: "AI Generated", duration: "0:05", poster: "/images/action/action-1.webp", video: "/videos/clip-court.mp4", badge: null },
  { title: "Studio Session", game: "AI Generated", duration: "0:05", poster: "/images/gallery/studio-portrait.webp", video: "/videos/clip-portrait.mp4", badge: null },
];

export default function HighlightReel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const featured = clips[active];

  const handlePlay = useCallback(() => {
    setPlaying(true);
    setLoading(true);
  }, []);

  const handleThumbClick = useCallback((i: number) => {
    setPlaying(false);
    setActive(i);
    setTimeout(() => setPlaying(true), 100);
  }, []);

  const handleVideoEnd = useCallback(() => {
    if (active < clips.length - 1) {
      setActive(prev => prev + 1);
      setTimeout(() => setPlaying(true), 100);
    } else {
      setPlaying(false);
    }
  }, [active]);

  const handleVideoClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
            Highlights
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Top <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Plays</span>
          </h2>
        </div>
        <Link
          href="/highlights"
          className="text-[0.5rem] font-bold text-blue-400/40 tracking-[0.2em] uppercase hover:text-blue-400/70 transition-colors hidden md:block"
        >
          All Highlights →
        </Link>
      </div>

      {/* Main player */}
      <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-blue-500/[0.08] bg-black hover:border-blue-500/[0.15] transition-all">

        {/* Loading spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-10 h-10 border-2 border-blue-400/30 border-t-blue-400/80 rounded-full animate-spin" />
          </div>
        )}

        {playing ? (
          <video
            ref={videoRef}
            key={featured.video}
            src={featured.video}
            className="absolute inset-0 w-full h-full object-contain z-10 cursor-pointer"
            playsInline
            autoPlay
            onEnded={handleVideoEnd}
            onClick={handleVideoClick}
            onCanPlay={() => setLoading(false)}
            onWaiting={() => setLoading(true)}
          />
        ) : (
          <>
            <Image
              key={featured.poster}
              src={featured.poster}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority={active === 0}
            />

            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10" />

            <button onClick={handlePlay} className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer">
              <div className="w-20 h-20 rounded-full border-2 border-blue-400/30 flex items-center justify-center bg-blue-500/[0.08] backdrop-blur-sm hover:bg-blue-500/[0.2] hover:border-blue-400/50 hover:scale-110 transition-all">
                <div className="w-0 h-0 border-l-[18px] border-l-blue-400/60 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent ml-1.5" />
              </div>
            </button>

            <div className="absolute bottom-5 left-6 z-20">
              <div className="text-[0.45rem] font-semibold text-blue-400/50 tracking-[0.2em] uppercase">
                {featured.game}
              </div>
              <div className="text-sm font-bold text-white/70 mt-1">{featured.title}</div>
            </div>

            <div className="absolute bottom-5 right-6 z-20 text-[0.5rem] font-mono text-blue-400/30">
              {featured.duration}
            </div>
          </>
        )}

        {featured.badge && (
          <div className="absolute top-5 right-6 z-30 text-[0.45rem] font-bold text-blue-400/50 tracking-[0.15em] uppercase px-3 py-1 bg-black/60 border border-blue-400/15 rounded-full backdrop-blur-sm">
            {featured.badge}
          </div>
        )}

        <div className="absolute top-5 left-6 z-30 text-[0.45rem] font-mono text-blue-400/30">
          {active + 1} / {clips.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 mt-6 max-w-5xl mx-auto overflow-x-auto pb-2">
        {clips.map((clip, i) => (
          <button
            key={i}
            onClick={() => handleThumbClick(i)}
            className={`flex-shrink-0 w-48 aspect-video rounded-lg border relative overflow-hidden transition-all group ${
              i === active
                ? "border-blue-400/30 ring-1 ring-blue-400/20"
                : "border-blue-500/[0.06] hover:border-blue-500/[0.2]"
            }`}
          >
            <Image
              src={clip.poster}
              alt={clip.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="192px"
              loading="lazy"
            />
            <div className={`absolute inset-0 transition-colors ${
              i === active ? "bg-blue-500/10" : "bg-black/30 group-hover:bg-black/10"
            }`} />

            {i !== active && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-0 h-0 border-l-[8px] border-l-white/70 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
                </div>
              </div>
            )}

            {i === active && playing && (
              <div className="absolute top-2 left-2 text-[0.38rem] font-bold text-blue-400/70 tracking-wider uppercase px-1.5 py-0.5 bg-blue-500/[0.15] rounded z-10 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400/70 animate-pulse" />
                Playing
              </div>
            )}

            <div className="absolute bottom-2 left-3 text-[0.45rem] font-semibold text-white/50 z-10">
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
