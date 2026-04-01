"use client";

import Image from "next/image";
import Link from "next/link";

const photos = [
  { caption: "Studio Portrait", aspect: "aspect-[3/4]", span: "md:row-span-2", src: "/images/gallery/studio-portrait.webp" },
  { caption: "Game Action", aspect: "aspect-video", span: "", src: "/images/action/action-1.webp" },
  { caption: "Team Huddle", aspect: "aspect-square", span: "", src: "/images/action/huddle.webp" },
  { caption: "Warmup", aspect: "aspect-video", span: "md:col-span-2", src: "/images/action/warmup.webp" },
  { caption: "Post-Game Smile", aspect: "aspect-square", span: "", src: "/images/action/postgame-smile.webp" },
  { caption: "On the Court", aspect: "aspect-video", span: "", src: "/images/action/action-3.webp" },
];

export default function PhotoGrid() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
            Gallery
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            In <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Action</span>
          </h2>
        </div>
        <Link
          href="/gallery"
          className="text-[0.5rem] font-bold text-blue-400/40 tracking-[0.2em] uppercase hover:text-blue-400/70 transition-colors hidden md:block"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`${photo.span} group relative rounded-xl overflow-hidden border border-blue-500/[0.06] bg-gradient-to-br from-blue-900/[0.04] to-blue-950/[0.02] cursor-pointer hover:border-blue-500/[0.18] transition-all`}
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
            <div className={`${photo.aspect} w-full relative`}>
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading={i < 2 ? "eager" : "lazy"}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <div className="text-sm font-bold text-white/80">{photo.caption}</div>
                <div className="text-[0.4rem] font-medium text-blue-400/40 tracking-[0.15em] uppercase mt-1">
                  Barrie Royals • Season Two
                </div>
              </div>

              {/* Expand icon */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <span className="text-white/60 text-xs">↗</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/gallery"
        className="block text-center mt-8 text-[0.5rem] font-bold text-blue-400/40 tracking-[0.2em] uppercase hover:text-blue-400/70 transition-colors md:hidden"
      >
        View All Photos →
      </Link>
    </section>
  );
}
