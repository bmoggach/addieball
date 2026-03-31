"use client";

import { useEffect, useRef } from "react";

export default function ParticleField({ count = 25 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        position: absolute;
        width: ${size}px; height: ${size}px;
        background: rgba(0,140,255,0.15);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        animation: particle-float ${Math.random() * 15 + 10}s linear infinite;
        animation-delay: ${Math.random() * 15}s;
      `;
      el.appendChild(p);
    }

    return () => {
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, [count]);

  return (
    <>
      <style jsx global>{`
        @keyframes particle-float {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-[1]"
      />
    </>
  );
}
