"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const clips = [
  { title: "Crossover → Stepback Three", game: "vs Thunder", duration: "0:24", poster: "/images/action/action-2.webp", video: "/images/action/game-clip.mp4" },
  { title: "Ankle Breaker", game: "vs Lightning", duration: "0:18", poster: "/images/action/action-4.webp", video: null },
  { title: "Fast Break Layup", game: "vs Hawks", duration: "0:15", poster: "/images/action/action-5.webp", video: null },
  { title: "Block Party", game: "vs Storm", duration: "0:12", poster: "/images/action/action-1.webp", video: null },
  { title: "Dime from Half", game: "vs Rockets", duration: "0:20", poster: "/images/action/action-3.webp", video: null },
];

export default function HighlightReel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const featured = clips[active];

  function handlePlay() {
    if (!featured.video) return;
    setPlaying(true);
    // Small delay to let the video element mount
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  }

  function handleThumbClick(i: number) {
    if (i === active && playing) return;
    setActive(i);
    setPlaying(false);
  }

  function handleVideoEnd() {
    setPlaying(false);
    // Auto-advance to next clip
    if (active < clips.length - 1) {
      setActive(active + 1);
    }
  }

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

      {/* Main player */}
      <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-blue-500/[0.08] group hover:border-blue-500/[0.15] transition-all bg-black">

        {/* Video layer — shown when playing */}
        {playing && featured.video && (
          <video
            ref={videoRef}
            src={featured.video}
            className="absolute inset-0 w-full h-full object-cover z-10"
            playsInline
            autoPlay
            onEnded={handleVideoEnd}
            onClick={() => {
              if (videoRef.current?.paused) {
                videoRef.current.play();
              } else {
                videoRef.current?.pause();
                setPlaying(false);
              }
            }}
          />
        )}

        {/* Poster image — shown when not playing */}
        {!playing && (
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

            {/* Letterbox bars */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10" />

            {/* Play button */}
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all ${
                featured.video
                  ? "border-blue-400/30 bg-blue-500/[0.08] hover:bg-blue-500/[0.2] hover:border-blue-400/50 hover:scale-110 cursor-pointer"
                  : "border-white/10 bg-white/[0.03] cursor-default"
              }`}>
                <div className={`w-0 h-0 border-l-[18px] border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent ml-1.5 transition-colors ${
                  featured.video ? "border-l-blue-400/60" : "border-l-white/20"
                }`} />
              </div>
              {!featured.video && (
                <span className="absolute mt-28 text-[0.45rem] font-bold text-white/20 tracking-[0.15em] uppercase">
                  Coming Soon
                </span>
              )}
            </button>

            {/* Game info overlay */}
            <div className="absolute bottom-5 left-6 z-20">
              <div className="text-[0.45rem] font-semibold text-blue-400/50 tracking-[0.2em] uppercase">
                {featured.game}
              </div>
              <div className="text-sm font-bold text-white/70 mt-1">
                {featured.title}
              </div>
            </div>

            {/* Duration */}
            <div className="absolute bottom-5 right-6 z-20 text-[0.5rem] font-mono text-blue-400/30">
              {featured.duration}
            </div>

            {/* Clip counter */}
            <div className="absolute top-5 left-6 z-20 text-[0.45rem] font-mono text-blue-400/30">
              {active + 1} / {clips.length}
            </div>

            {/* Badge */}
            {active === 0 && (
              <div className="absolute top-5 right-6 z-20 text-[0.45rem] font-bold text-blue-400/50 tracking-[0.15em] uppercase px-3 py-1 bg-blue-500/[0.08] border border-blue-400/15 rounded-full backdrop-blur-sm">
                🔥 Top Play
              </div>
            )}
          </>
        )}
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

            {/* Play icon on non-active */}
            {i !== active && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-0 h-0 border-l-[8px] border-l-white/70 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
                </div>
              </div>
            )}

            {/* Now playing indicator */}
            {i === active && playing && (
              <div className="absolute top-2 left-2 text-[0.38rem] font-bold text-blue-400/70 tracking-wider uppercase px-1.5 py-0.5 bg-blue-500/[0.15] rounded z-10 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400/70 animate-pulse" />
                Playing
              </div>
            )}

            {/* No video indicator */}
            {!clip.video && (
              <div className="absolute top-2 right-2 text-[0.35rem] font-mono text-white/20 z-10">
                📷
              </div>
            )}

            <div className="absolute bottom-2 left-3 text-[0.45rem] font-semibold text-white/50 z-10">
              {clip.title}
            </div>
            <div className="absolute top-2 right-2 text-[0.4rem] font-mono text-white/30 z-10">
              {clip.video ? clip.duration : ""}
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
