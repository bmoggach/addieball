"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (cursorRef.current) {
        const dx = target.current.x - pos.current.x;
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%) rotate(${dx * 3}deg)`;
      }

      requestAnimationFrame(animate);
    };

    // Create trail particles
    let lastTrail = 0;
    const onTrail = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTrail < 50) return;
      lastTrail = now;

      const trail = document.createElement("div");
      trail.style.cssText = `
        position: fixed; width: 6px; height: 6px;
        background: rgba(0,140,255,0.2); border-radius: 50%;
        pointer-events: none; z-index: 9998;
        left: ${e.clientX}px; top: ${e.clientY}px;
        transition: opacity 0.4s;
      `;
      document.body.appendChild(trail);
      setTimeout(() => { trail.style.opacity = "0"; }, 80);
      setTimeout(() => trail.remove(), 500);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousemove", onTrail);
    const frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousemove", onTrail);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] text-2xl drop-shadow-[0_0_8px_rgba(0,140,255,0.4)] hidden md:block"
      style={{ willChange: "left, top, transform" }}
    >
      🏀
    </div>
  );
}
