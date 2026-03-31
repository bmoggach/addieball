"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const funFacts = [
  { icon: "🏀", label: "Point Guard" },
  { icon: "👟", label: "Shoe Collection: 8 Pairs" },
  { icon: "🎵", label: "Pre-Game Playlist: Always" },
  { icon: "🐕", label: "Dog Person" },
  { icon: "🍕", label: "Pizza Before Every Game" },
  { icon: "⭐", label: "Favorite Player: Sabrina Ionescu" },
  { icon: "💙", label: "Team Color: Blue" },
  { icon: "📚", label: "Grade: 6th" },
];

const favorites = [
  { label: "Pre-Game Song", value: "🎵 Level Up" },
  { label: "Shoe", value: "👟 Nike Sabrina 2" },
  { label: "Player", value: "⭐ Sabrina Ionescu" },
  { label: "Snack", value: "🍎 Apple Slices + PB" },
  { label: "Celebration", value: "💪 Ice In Her Veins" },
  { label: "Number", value: "3️⃣5️⃣ Obviously" },
];

const timeline = [
  { time: "6:30 AM", event: "Wake up, breakfast", emoji: "🥣" },
  { time: "7:15 AM", event: "School time", emoji: "📚" },
  { time: "3:30 PM", event: "Practice starts", emoji: "🏀" },
  { time: "5:00 PM", event: "Extra shooting drills", emoji: "🎯" },
  { time: "6:00 PM", event: "Dinner & homework", emoji: "📝" },
  { time: "7:30 PM", event: "Watch game film", emoji: "📺" },
  { time: "9:00 PM", event: "Lights out", emoji: "😴" },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
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
            The Origin Story
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
            MEET <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">ADDIE</span>
          </h1>
        </motion.div>
      </section>

      {/* Bio section */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl flex flex-col md:flex-row gap-12">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-80 flex-shrink-0"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden border border-blue-500/[0.08] bg-gradient-to-br from-blue-900/[0.06] to-blue-950/[0.03] relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.08)_0%,transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-[0.06]">🏀</div>
              <div className="absolute bottom-4 left-4">
                <div className="text-3xl font-black text-blue-400/30">#35</div>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-black mb-6">
              Addie <span className="text-blue-400/70">Moggach</span>
            </h2>
            <div className="space-y-4 text-sm text-white/40 leading-relaxed">
              <p>
                11 years old. Point guard. #35. Addie picked up a basketball at 8 and never put it down.
                Three seasons of rec league later, she&apos;s leading her team in assists and making defenders
                question their life choices.
              </p>
              <p>
                She plays with the kind of confidence that makes you forget she&apos;s in 6th grade.
                Quick handles, court vision beyond her years, and a stepback three that has no business
                being that clean at 11.
              </p>
              <p>
                Off the court, she&apos;s a regular kid — obsessed with her dog, has opinions about pizza,
                and takes her pre-game playlist very seriously. But when the whistle blows,
                it&apos;s a different gear entirely.
              </p>
              <p className="text-blue-400/40 font-medium">
                This is Season One. The beginning of the story. ✌️
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl">
          <div className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.3em] uppercase mb-6">
            Fun Facts
          </div>
          <div className="flex flex-wrap gap-3">
            {funFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="px-4 py-2 rounded-full border border-blue-500/[0.1] bg-blue-500/[0.04] text-blue-400/60 text-xs font-medium hover:bg-blue-500/[0.1] hover:border-blue-400/25 transition-all cursor-default"
              >
                {fact.icon} {fact.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl">
          <div className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.3em] uppercase mb-6">
            Addie&apos;s Favorites
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {favorites.map((fav, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-4 rounded-xl border border-blue-500/[0.06] bg-blue-900/[0.02] hover:border-blue-500/[0.15] transition-colors"
              >
                <div className="text-[0.4rem] font-semibold text-blue-400/25 tracking-[0.2em] uppercase mb-2">
                  {fav.label}
                </div>
                <div className="text-sm font-bold text-white/50">{fav.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-5xl">
          <div className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.3em] uppercase mb-8">
            A Day in the Life — Game Day
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/[0.15] via-blue-500/[0.08] to-transparent" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-6 pl-2"
                >
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full border-2 border-blue-400/30 bg-blue-500/[0.1] flex-shrink-0 relative z-10" />

                  {/* Content */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/[0.04] bg-blue-900/[0.01] flex-1 hover:border-blue-500/[0.1] transition-colors">
                    <div className="text-2xl">{item.emoji}</div>
                    <div>
                      <div className="text-[0.5rem] font-mono text-blue-400/35">{item.time}</div>
                      <div className="text-sm font-medium text-white/50">{item.event}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
