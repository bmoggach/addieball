"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const clips = [
  {
    title: "Game Day",
    desc: "Real game footage from Season Two",
    poster: "/images/action/action-2.webp",
    video: "/videos/game-real.mp4",
    badge: "🎥 Real Footage",
    duration: "0:24",
  },
  {
    title: "Handles",
    desc: "AI-generated from action photo",
    poster: "/images/action/action-5.webp",
    video: "/videos/clip-dribble.mp4",
    badge: "🔥 AI Generated",
    duration: "0:05",
  },
  {
    title: "Quick Moves",
    desc: "AI-generated from court action photo",
    poster: "/images/action/action-4.webp",
    video: "/videos/clip-moves.mp4",
    badge: "🔥 AI Generated",
    duration: "0:05",
  },
  {
    title: "Court Vision",
    desc: "AI-generated from game photo",
    poster: "/images/action/action-1.webp",
    video: "/videos/clip-court.mp4",
    badge: "🔥 AI Generated",
    duration: "0:05",
  },
  {
    title: "Studio Session",
    desc: "AI-generated from studio photoshoot",
    poster: "/images/gallery/studio-portrait.webp",
    video: "/videos/clip-portrait.mp4",
    badge: "🔥 AI Generated",
    duration: "0:05",
  },
];

export default function HighlightsPage() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const featured = clips[active];

  const handlePlay = useCallback(() => {
    setPlaying(true);
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
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="px-6 md:px-10 py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,80,255,0.04)_0%,transparent_60%)]" />
        <div className="relative z-10">
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
            Season Two
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
            HIGH<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">LIGHTS</span>
          </h1>
          <p className="text-sm text-white/25 mt-4 max-w-lg">
            Game footage and AI-generated clips from Addie&apos;s action photos. Generated with Kling v3 Pro via fal.ai.
          </p>
        </div>
      </section>

      {/* Main Theatre Player */}
      <section className="px-6 md:px-10 mb-6">
        <div className="relative aspect-video max-w-6xl rounded-xl overflow-hidden border border-blue-500/[0.08] bg-black hover:border-blue-500/[0.15] transition-all">

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
            />
          ) : (
            <>
              <Image
                key={featured.poster}
                src={featured.poster}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority={active === 0}
              />

              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10" />

              <button onClick={handlePlay} className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer">
                <div className="w-24 h-24 rounded-full border-2 border-blue-400/30 flex items-center justify-center bg-blue-500/[0.08] backdrop-blur-sm hover:bg-blue-500/[0.2] hover:border-blue-400/50 hover:scale-110 transition-all">
                  <div className="w-0 h-0 border-l-[22px] border-l-blue-400/60 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-2" />
                </div>
              </button>

              <div className="absolute bottom-6 left-8 z-20">
                <div className="text-lg font-bold text-white/80">{featured.title}</div>
                <div className="text-[0.5rem] text-white/30 mt-1">{featured.desc}</div>
              </div>

              <div className="absolute bottom-6 right-8 z-20 text-sm font-mono text-blue-400/30">
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
      </section>

      {/* Clip Grid */}
      <section className="px-6 md:px-10 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl">
          {clips.map((clip, i) => (
            <button
              key={i}
              onClick={() => handleThumbClick(i)}
              className={`group relative rounded-lg overflow-hidden border transition-all text-left ${
                i === active
                  ? "border-blue-400/30 ring-1 ring-blue-400/20"
                  : "border-blue-500/[0.06] hover:border-blue-500/[0.2]"
              }`}
            >
              <div className="aspect-video relative">
                <Image
                  src={clip.poster}
                  alt={clip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 20vw"
                  loading="lazy"
                />
                <div className={`absolute inset-0 transition-colors ${
                  i === active ? "bg-blue-500/10" : "bg-black/30 group-hover:bg-black/10"
                }`} />

                {i !== active && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-[10px] border-l-white/70 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5" />
                    </div>
                  </div>
                )}

                {i === active && playing && (
                  <div className="absolute top-2 left-2 text-[0.38rem] font-bold text-blue-400/70 tracking-wider uppercase px-1.5 py-0.5 bg-blue-500/[0.15] rounded z-10 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400/70 animate-pulse" />
                    Playing
                  </div>
                )}

                <div className="absolute top-2 right-2 text-[0.4rem] font-mono text-white/30 z-10">
                  {clip.duration}
                </div>
              </div>

              <div className="p-3">
                <div className="text-xs font-bold text-white/60 group-hover:text-white/80 transition-colors">
                  {clip.title}
                </div>
                <div className="text-[0.4rem] text-blue-400/25 tracking-wider mt-1">
                  {clip.badge || "Season Two"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
