"use client";

import { motion } from "framer-motion";

const photos = [
  { caption: "Game Day Focus", aspect: "aspect-[3/4]", span: "md:row-span-2" },
  { caption: "Fast Break", aspect: "aspect-video", span: "" },
  { caption: "Pre-Game Ritual", aspect: "aspect-square", span: "" },
  { caption: "Victory Celebration", aspect: "aspect-video", span: "md:col-span-2" },
];

export default function PhotoGrid() {
  return (
    <section className="relative py-32 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="text-[0.55rem] font-semibold text-blue-400/50 tracking-[0.5em] uppercase mb-4">
          Gallery
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          In <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Action</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`${photo.span} group relative rounded-xl overflow-hidden border border-blue-500/[0.06] bg-gradient-to-br from-blue-900/[0.04] to-blue-950/[0.02] cursor-pointer`}
            style={{ perspective: "800px" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(800px) rotateY(0) rotateX(0)";
              e.currentTarget.style.transition = "transform 0.5s ease";
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transition = "transform 0.1s ease";
            }}
          >
            <div className={`${photo.aspect} w-full relative`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06)_0%,transparent_70%)] group-hover:opacity-150 transition-opacity" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                <div className="text-sm font-bold text-white/80">{photo.caption}</div>
                <div className="text-[0.4rem] font-medium text-blue-400/40 tracking-[0.15em] uppercase mt-1">
                  Season One • 2026
                </div>
              </div>

              {/* Expand icon */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <span className="text-white/60 text-xs">↗</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
