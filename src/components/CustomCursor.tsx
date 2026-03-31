"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      // Direct positioning — no lerp, no lag
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] text-2xl hidden md:block"
      style={{
        transform: "translate(-50%, -50%)",
        filter: "drop-shadow(0 0 8px rgba(0,140,255,0.4))",
        willChange: "left, top",
      }}
    >
      🏀
    </div>
  );
}
