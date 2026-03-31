"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

const posts: Record<string, { title: string; date: string; category: string; emoji: string; content: string[] }> = {
  "game-day-vs-lightning": {
    title: "Game Day vs Lightning ⚡ — 18 Points, 6 Boards",
    date: "Mar 28, 2026",
    category: "Game Recap",
    emoji: "⚡",
    content: [
      "Started hot with back-to-back threes in the first quarter. The Lightning couldn't keep up with the pace and we built a 12-point lead early.",
      "Second quarter was tougher — they adjusted their defense and started trapping at half court. Had to slow it down and work through the trap. Picked up 3 assists in the quarter by finding the open player.",
      "Third quarter was all defense. Grabbed 4 of my 6 rebounds in this quarter alone. The energy on the bench was incredible — everyone was locked in.",
      "Closed it out in the fourth with a crossover stepback three that had the sideline going crazy. Final score: 55-42. Season record moves to 12-6.",
      "Key stats: 18 pts (6-12 FG, 3-5 3PT), 6 rebounds, 5 assists, 2 steals. Best game of the season so far. 🔥",
    ],
  },
  "new-kicks-unboxing": {
    title: "New Kicks Unboxing — Nike Sabrina 2 👟",
    date: "Mar 25, 2026",
    category: "Lifestyle",
    emoji: "👟",
    content: [
      "The Sabrina 2s finally came in. Electric blue colorway — had to match the team colors obviously.",
      "First impressions: they're lighter than my old shoes. The traction pattern on the sole looks insane. Can't wait to test them on the court.",
      "Wore them to practice today for a quick test run. The ankle support is solid and they feel super responsive on cuts. These might be the ones for the rest of the season.",
      "Sabrina Ionescu is my favorite player so wearing her signature shoe hits different. One day I'll have my own. 👟⭐",
    ],
  },
  "first-double-double": {
    title: "First Career Double-Double! 🏆",
    date: "Mar 20, 2026",
    category: "Milestone",
    emoji: "🏆",
    content: [
      "14 points and 10 rebounds against the Wolves. A game I'll remember forever.",
      "Honestly didn't even realize I was close to a double-double until coach mentioned it in the fourth quarter. I was just playing my game and crashing the boards harder than usual.",
      "The 10th rebound was a big offensive board that led to a putback layup. The whole bench erupted. That feeling is unmatched.",
      "First of many. This is just the beginning. 🏆",
    ],
  },
  "practice-highlights": {
    title: "Practice Highlights — Working on the Stepback",
    date: "Mar 17, 2026",
    category: "Behind the Scenes",
    emoji: "🎯",
    content: [
      "Coach had us running the stepback drill for 45 minutes straight. My legs are dead but the shot is feeling cleaner than ever.",
      "The key is in the footwork — coach keeps telling me to sit into the step and not rush the release. It's starting to click.",
      "Also worked on the pull-up mid-range off a screen. That's going to be a weapon when teams start closing out hard on the three.",
      "Tomorrow is game day. Ready. 🎯",
    ],
  },
  "team-photo-day": {
    title: "Team Photo Day 📸",
    date: "Mar 14, 2026",
    category: "Behind the Scenes",
    emoji: "📸",
    content: [
      "Got the official team photos done today. The blue jerseys are looking crisp under the lights.",
      "Individual shots, team group photo, and some fun candids. The photographer let us do some action poses which was hilarious.",
      "My individual shot came out clean — #35 front and center. Dad's already talking about getting it framed. 📸",
    ],
  },
  "season-opener-recap": {
    title: "Season Opener — We Got the W! 🔥",
    date: "Mar 10, 2026",
    category: "Game Recap",
    emoji: "🔥",
    content: [
      "First game of Season Two. 12 points, 5 boards, and a win. The journey officially starts.",
      "Nerves were real in the first quarter — missed my first two shots. But coach called a timeout and told me to just play my game. After that, everything flowed.",
      "Hit a big three in the third quarter that gave us the lead for good. The crowd (ok, mostly parents) went wild.",
      "Final score: 42-38. It wasn't pretty but we got the W. That's all that matters for game one. Season Two is officially underway. 🔥🏀",
    ],
  },
};

export default function JournalPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <main className="pt-24 px-6 md:px-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏀</div>
          <h1 className="text-2xl font-bold text-white/50">Post not found</h1>
          <Link href="/journal" className="text-sm text-blue-400/50 mt-4 block hover:text-blue-400/80 transition-colors">
            ← Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <article className="px-6 md:px-10 py-16 max-w-3xl mx-auto">
        {/* Back link */}
        <Link href="/journal" className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase hover:text-blue-400/70 transition-colors mb-8 block">
          ← Back to Journal
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.45rem] font-bold text-blue-400/50 tracking-[0.12em] uppercase px-2.5 py-1 bg-blue-500/[0.06] rounded">
              {post.category}
            </span>
            <span className="text-[0.45rem] text-white/20 tracking-wider">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white/90 leading-tight mb-4">
            {post.title}
          </h1>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="aspect-video rounded-xl overflow-hidden border border-blue-500/[0.08] bg-gradient-to-br from-blue-900/[0.04] to-blue-950/[0.02] relative mb-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-[0.08]">{post.emoji}</div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-sm text-white/40 leading-[1.8]">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/[0.1] to-transparent my-16" />

        {/* Nav */}
        <div className="flex justify-between items-center">
          <Link href="/journal" className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.2em] uppercase hover:text-blue-400/70 transition-colors">
            ← All Posts
          </Link>
          <div className="text-[0.4rem] text-white/10 tracking-wider">
            Season Two • 2026
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
