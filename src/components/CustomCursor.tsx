"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const emojiRef = useRef<HTMLSpanElement>(null);
  const isClickableRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const emoji = emojiRef.current;
    if (!cursor || !emoji) return;

    // Hide default cursor globally
    document.documentElement.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation — no React state, no re-renders, zero lag
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      const target = e.target as HTMLElement;
      const clickable = !!(
        target.closest("a, button, [role='button'], [onclick], input, select, textarea, label[for], .cursor-pointer") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        window.getComputedStyle(target).cursor === "pointer"
      );

      if (clickable !== isClickableRef.current) {
        isClickableRef.current = clickable;
        emoji.textContent = clickable ? "👆" : "🏀";
        cursor.style.filter = clickable
          ? "drop-shadow(0 0 12px rgba(0,140,255,0.6))"
          : "drop-shadow(0 0 6px rgba(0,140,255,0.3))";
      }
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        willChange: "transform",
        marginLeft: "-12px",
        marginTop: "-12px",
      }}
    >
      <span ref={emojiRef} className="text-2xl select-none">🏀</span>
    </div>
  );
}
