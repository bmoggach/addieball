"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Footer from "@/components/Footer";

function CountUp({ target, decimals = 1 }: { target: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const dur = 1800;
    const animate = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(parseFloat((eased * target).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, decimals]);

  return <span ref={ref}>{val}</span>;
}

const games = [
  { opp: "Hawks", score: "W 42-38", pts: 12, reb: 5, ast: 3 },
  { opp: "Storm", score: "W 45-30", pts: 18, reb: 7, ast: 2 },
  { opp: "Rockets", score: "L 35-40", pts: 8, reb: 4, ast: 5 },
  { opp: "Thunder", score: "W 50-44", pts: 22, reb: 6, ast: 4 },
  { opp: "Wolves", score: "W 38-35", pts: 14, reb: 8, ast: 1 },
  { opp: "Lightning", score: "W 55-42", pts: 18, reb: 6, ast: 6 },
  { opp: "Hawks", score: "L 30-38", pts: 10, reb: 3, ast: 2 },
  { opp: "Storm", score: "W 48-36", pts: 16, reb: 5, ast: 4 },
  { opp: "Thunder", score: "W 44-40", pts: 20, reb: 7, ast: 3 },
  { opp: "Rockets", score: "L 32-38", pts: 8, reb: 4, ast: 3 },
  { opp: "Lightning", score: "W 52-44", pts: 18, reb: 6, ast: 5 },
  { opp: "Wolves", score: "L 36-42", pts: 12, reb: 5, ast: 2 },
  { opp: "Hawks", score: "W 46-38", pts: 16, reb: 8, ast: 3 },
  { opp: "Storm", score: "W 40-34", pts: 14, reb: 6, ast: 4 },
  { opp: "Thunder", score: "L 38-44", pts: 10, reb: 4, ast: 2 },
  { opp: "Lightning", score: "W 50-40", pts: 18, reb: 7, ast: 6 },
  { opp: "Rockets", score: "W 44-36", pts: 16, reb: 5, ast: 3 },
  { opp: "Thunder", score: "L 34-42", pts: 12, reb: 6, ast: 2 },
];

const milestones = [
  { label: "First Double-Double", game: "Game 5", icon: "🏆" },
  { label: "Season High 22 Points", game: "Game 4", icon: "🔥" },
  { label: "6 Assists vs Lightning", game: "Game 6", icon: "🎯" },
  { label: "50th Career Point", game: "Game 8", icon: "⭐" },
];

export default function StatsPage() {
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
            The Journey
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">
            ST<span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">ATS</span>
          </h1>
        </motion.div>
      </section>

      {/* Big stats */}
      <section className="px-6 md:px-10 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
          {[
            { value: 14.2, label: "PPG", suffix: "" },
            { value: 5.8, label: "RPG", suffix: "" },
            { value: 3.1, label: "APG", suffix: "" },
            { value: 2.4, label: "SPG", suffix: "" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="text-center p-6 rounded-xl border border-blue-500/[0.06] bg-blue-900/[0.02]"
            >
              <div className="text-4xl md:text-6xl font-black text-blue-400/70 font-mono tracking-tight"
                style={{ textShadow: "0 0 25px rgba(0,120,255,0.12)" }}
              >
                <CountUp target={stat.value} />
              </div>
              <div className="text-[0.45rem] font-semibold text-blue-400/25 tracking-[0.3em] uppercase mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Season record */}
      <section className="px-6 md:px-10 pb-16">
        <div className="flex gap-12 max-w-5xl">
          {[
            { value: "12-6", label: "Record" },
            { value: "48%", label: "FG%" },
            { value: "22", label: "Season High" },
            { value: "18", label: "Games Played" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-black text-white/35 tracking-tight">{stat.value}</div>
              <div className="text-[0.4rem] font-medium text-blue-400/20 tracking-[0.2em] uppercase mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Points chart visualization */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-5xl">
          <div className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.3em] uppercase mb-6">
            Points Per Game — Season Timeline
          </div>
          <div className="h-48 flex items-end gap-1.5">
            {games.map((game, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${(game.pts / 22) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/40 to-blue-400/20 relative group cursor-pointer hover:from-blue-500/60 hover:to-blue-400/40 transition-colors"
              >
                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-blue-950/90 border border-blue-500/20 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30 backdrop-blur-sm">
                  <div className="text-[0.5rem] font-bold text-white/70">vs {game.opp}</div>
                  <div className="text-[0.4rem] text-blue-400/50">{game.pts} pts • {game.reb} reb • {game.ast} ast</div>
                  <div className="text-[0.35rem] text-blue-400/30 mt-0.5">{game.score}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[0.35rem] text-blue-400/15 tracking-wider">Game 1</span>
            <span className="text-[0.35rem] text-blue-400/15 tracking-wider">Game 18</span>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-5xl">
          <div className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.3em] uppercase mb-6">
            Milestones
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/[0.06] bg-blue-900/[0.02] hover:border-blue-500/[0.15] transition-colors"
              >
                <div className="text-2xl">{m.icon}</div>
                <div>
                  <div className="text-sm font-bold text-white/60">{m.label}</div>
                  <div className="text-[0.4rem] text-blue-400/25 tracking-wider uppercase mt-0.5">{m.game}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game log table */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-5xl">
          <div className="text-[0.5rem] font-semibold text-blue-400/40 tracking-[0.3em] uppercase mb-6">
            Game Log
          </div>
          <div className="border border-blue-500/[0.06] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-500/[0.06]">
                  {["Game", "Opponent", "Result", "PTS", "REB", "AST"].map((h) => (
                    <th key={h} className="px-4 py-3 text-[0.4rem] font-bold text-blue-400/30 tracking-[0.2em] uppercase text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {games.map((game, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-blue-500/[0.03] hover:bg-blue-500/[0.02] transition-colors"
                  >
                    <td className="px-4 py-3 text-xs text-white/30 font-mono">{i + 1}</td>
                    <td className="px-4 py-3 text-xs text-white/50 font-medium">{game.opp}</td>
                    <td className={`px-4 py-3 text-xs font-bold ${game.score.startsWith("W") ? "text-green-400/60" : "text-red-400/50"}`}>
                      {game.score}
                    </td>
                    <td className="px-4 py-3 text-xs text-blue-400/60 font-bold font-mono">{game.pts}</td>
                    <td className="px-4 py-3 text-xs text-white/30 font-mono">{game.reb}</td>
                    <td className="px-4 py-3 text-xs text-white/30 font-mono">{game.ast}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
