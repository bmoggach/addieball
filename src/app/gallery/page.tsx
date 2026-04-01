"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const images = [
  { caption: "Studio Portrait", category: "Portraits", aspect: "tall", src: "/images/gallery/studio-portrait.webp" },
  { caption: "The Flex", category: "Portraits", aspect: "tall", src: "/images/gallery/studio-flex.webp" },
  { caption: "Teammates", category: "Lifestyle", aspect: "tall", src: "/images/gallery/studio-piggyback.webp" },
  { caption: "Team Huddle", category: "Game", aspect: "wide", src: "/images/action/huddle.webp" },
  { caption: "Warmup at Stadium", category: "Game", aspect: "tall", src: "/images/action/warmup.webp" },
  { caption: "Post-Game Smile", category: "Lifestyle", aspect: "tall", src: "/images/action/postgame-smile.webp" },
  { caption: "Game Action", category: "Game", aspect: "wide", src: "/images/action/action-1.webp" },
  { caption: "On the Court", category: "Game", aspect: "wide", src: "/images/action/action-2.webp" },
  { caption: "Game Day", category: "Game", aspect: "wide", src: "/images/action/action-3.webp" },
  { caption: "In the Zone", category: "Game", aspect: "wide", src: "/images/action/action-4.webp" },
  { caption: "Court Vision", category: "Game", aspect: "wide", src: "/images/action/action-5.webp" },
  { caption: "U12 Barrie Royals", category: "Team", aspect: "wide", src: "/images/team/team-photo.webp" },
];

const filters = ["All", "Game", "Portraits", "Lifestyle", "Team"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? images : images.filter(img => img.category === activeFilter);

  return (
    <main className="min-h-screen">
      <div className="pt-24">
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
              Season Two
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
              GAL<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">LERY</span>
            </h1>
            <p className="text-sm text-white/25 mt-4 max-w-md">
              Action shots, candids, behind the scenes. The visual story of Season Two.
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <div className="px-6 md:px-10 mb-8">
          <div className="flex gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[0.5rem] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all
                  ${activeFilter === filter
                    ? "bg-blue-500/[0.1] border-blue-400/20 text-blue-400/70"
                    : "border-white/[0.06] text-white/35 hover:border-blue-400/15 hover:text-blue-400/50"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — using CSS grid instead of columns for reliable scroll */}
        <section className="px-6 md:px-10 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.caption}-${activeFilter}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative rounded-xl overflow-hidden border border-blue-500/[0.05] bg-gradient-to-br from-blue-900/[0.04] to-blue-950/[0.02] cursor-pointer hover:border-blue-500/[0.18] transition-all ${
                  img.aspect === "tall" ? "row-span-2" : ""
                }`}
                onClick={() => setLightbox(i)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
                  e.currentTarget.style.transition = "transform 0.1s ease";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.transition = "transform 0.5s ease";
                }}
              >
                <div className={`w-full relative ${
                  img.aspect === "tall" ? "aspect-[3/4]" :
                  img.aspect === "wide" ? "aspect-video" :
                  "aspect-square"
                }`}>
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading={i < 4 ? "eager" : "lazy"}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                  <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <div className="text-xs font-bold text-white/80">{img.caption}</div>
                    <div className="text-[0.38rem] text-blue-400/40 tracking-wider uppercase mt-0.5">{img.category}</div>
                  </div>

                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white/60 text-[0.6rem]">
                      ↗
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <div
              className="absolute top-6 right-6 text-white/40 hover:text-white/80 transition-colors cursor-pointer text-2xl font-light z-[210]"
              onClick={() => setLightbox(null)}
            >
              ✕
            </div>
            <div
              className="max-w-4xl w-full mx-8 aspect-[4/3] rounded-xl border border-blue-500/[0.1] bg-black/50 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {filtered[lightbox] && (
                <Image
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].caption}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 900px"
                  priority
                />
              )}
              <div className="absolute bottom-6 left-6 z-10">
                <div className="text-lg font-bold text-white/70">{filtered[lightbox]?.caption}</div>
                <div className="text-[0.5rem] text-blue-400/30 tracking-wider uppercase mt-1">{filtered[lightbox]?.category} • Season Two</div>
              </div>
            </div>

            {/* Nav arrows */}
            {lightbox > 0 && (
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/30 transition-all z-[210]"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              >
                ←
              </button>
            )}
            {lightbox < filtered.length - 1 && (
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/30 transition-all z-[210]"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              >
                →
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-6 right-6 text-[0.5rem] font-mono text-blue-400/30 z-[210]">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}

        <Footer />
      </div>
    </main>
  );
}
