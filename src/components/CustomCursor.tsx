"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Check if hovering something clickable
      const target = e.target as HTMLElement;
      const clickable = !!(target.closest("a, button, [role='button'], [onclick], .cursor-pointer") ||
        target.tagName === "A" || target.tagName === "BUTTON" ||
        window.getComputedStyle(target).cursor === "pointer");
      setIsClickable(clickable);
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden md:block transition-transform duration-100"
      style={{
        transform: `translate(-50%, -50%) scale(${isClickable ? 1.2 : 1})`,
        filter: `drop-shadow(0 0 ${isClickable ? '12px' : '8px'} rgba(0,140,255,${isClickable ? '0.6' : '0.4'}))`,
        willChange: "left, top",
        fontSize: isClickable ? '28px' : '24px',
      }}
    >
      {isClickable ? "👆" : "🏀"}
    </div>
  );
}
