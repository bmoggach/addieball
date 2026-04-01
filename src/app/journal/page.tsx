"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "game-day-vs-lightning",
    title: "Game Day vs Lightning ⚡ — 18 Points, 6 Boards",
    date: "Mar 28, 2026",
    category: "Game Recap",
    excerpt: "Started hot with back-to-back threes in the first quarter. The Lightning couldn't keep up with the pace.",
    emoji: "⚡",
  },
  {
    slug: "new-kicks-unboxing",
    title: "New Kicks Unboxing — Nike Sabrina 2 👟",
    date: "Mar 25, 2026",
    category: "Lifestyle",
    excerpt: "Finally got the Sabrina 2s in the electric blue colorway. First impressions and on-court test.",
    emoji: "👟",
  },
  {
    slug: "first-double-double",
    title: "First Career Double-Double! 🏆",
    date: "Mar 20, 2026",
    category: "Milestone",
    excerpt: "14 points and 10 rebounds against the Wolves. A game I'll remember forever.",
    emoji: "🏆",
  },
  {
    slug: "practice-highlights",
    title: "Practice Highlights — Working on the Stepback",
    date: "Mar 17, 2026",
    category: "Behind the Scenes",
    excerpt: "Coach had us running the stepback drill for 45 minutes straight. My legs are dead but the shot is feeling clean.",
    emoji: "🎯",
  },
  {
    slug: "team-photo-day",
    title: "Team Photo Day 📸",
    date: "Mar 14, 2026",
    category: "Behind the Scenes",
    excerpt: "Got the official team photos done today. The blue jerseys are looking crisp.",
    emoji: "📸",
  },
  {
    slug: "season-opener-recap",
    title: "Season Opener — We Got the W! 🔥",
    date: "Mar 10, 2026",
    category: "Game Recap",
    excerpt: "First game of Season Two. 12 points, 5 boards, and a win. The journey officially starts.",
    emoji: "🔥",
  },
];

const categories = ["All", "Game Recap", "Lifestyle", "Milestone", "Behind the Scenes"];

export default function JournalPage() {
  return (
    <main className="min-h-screen pt-24">
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
            On & Off the Court
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
            JOUR<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">NAL</span>
          </h1>
          <p className="text-sm text-white/25 mt-4 max-w-md">
            Game recaps, milestones, behind the scenes. The story as it happens.
          </p>
        </motion.div>
      </section>

      {/* Category filters */}
      <div className="px-6 md:px-10 mb-10">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`text-[0.5rem] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all
                ${i === 0
                  ? "bg-blue-500/[0.1] border-blue-400/20 text-blue-400/70"
                  : "border-white/[0.06] text-white/35 hover:border-blue-400/15 hover:text-blue-400/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-4xl space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/journal/${post.slug}`} className="block group">
                <div className="flex flex-col md:flex-row gap-6 p-5 md:p-6 rounded-xl border border-blue-500/[0.05] bg-blue-900/[0.01] hover:border-blue-500/[0.15] hover:bg-blue-900/[0.03] transition-all">
                  {/* Thumbnail */}
                  <div className="w-full md:w-48 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-900/[0.06] to-blue-950/[0.03] relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.05)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-[0.08] group-hover:opacity-[0.15] transition-opacity">
                      {post.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[0.42rem] font-bold text-blue-400/50 tracking-[0.12em] uppercase px-2 py-0.5 bg-blue-500/[0.06] rounded">
                        {post.category}
                      </span>
                      <span className="text-[0.42rem] text-white/30 tracking-wider">{post.date}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white/70 group-hover:text-white/90 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-white/25 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-3 text-[0.45rem] font-semibold text-blue-400/35 tracking-[0.2em] uppercase group-hover:text-blue-400/60 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
