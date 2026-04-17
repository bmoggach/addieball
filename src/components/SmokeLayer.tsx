"use client";

import { useEffect, useRef, useCallback } from "react";

interface SmokeLayerProps {
  src: string;
  className: string;
  maskStyle: React.CSSProperties;
  maxOpacity: number;
  delayB?: number;
}

/**
 * Two copies of the same smoke video crossfade at the loop point
 * so the restart is never visible. Handles mobile autoplay.
 */
export default function SmokeLayer({ src, className, maskStyle, maxOpacity, delayB = 0 }: SmokeLayerProps) {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);

  const crossfade = useCallback((from: HTMLVideoElement, to: HTMLVideoElement) => {
    to.currentTime = 0;
    to.play().catch(() => {});

    // Use CSS transitions instead of setInterval — zero JS overhead
    from.style.transition = 'opacity 1.5s ease';
    to.style.transition = 'opacity 1.5s ease';
    from.style.opacity = '0';
    to.style.opacity = String(maxOpacity);
  }, [maxOpacity]);

  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    // Force play on mobile (muted autoplay is allowed)
    const tryPlay = (v: HTMLVideoElement) => {
      v.play().catch(() => {
        // iOS might block — retry on first touch
        const handler = () => {
          v.play().catch(() => {});
          document.removeEventListener("touchstart", handler);
        };
        document.addEventListener("touchstart", handler, { once: true });
      });
    };

    a.style.opacity = String(maxOpacity);
    b.style.opacity = "0";
    tryPlay(a);

    let active = a;
    let standby = b;

    const onTimeUpdate = () => {
      if (active.duration && active.currentTime > active.duration - 1.5) {
        active.removeEventListener("timeupdate", onTimeUpdate);
        crossfade(active, standby);
        const tmp = active;
        active = standby;
        standby = tmp;
        // Delay re-attaching listener so it doesn't fire during crossfade
        setTimeout(() => {
          active.addEventListener("timeupdate", onTimeUpdate);
        }, 2000);
      }
    };

    a.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      a.removeEventListener("timeupdate", onTimeUpdate);
      b.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [crossfade, maxOpacity]);

  return (
    <>
      <video
        ref={refA}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={className}
        style={{ ...maskStyle, opacity: maxOpacity }}
      />
      <video
        ref={refB}
        src={src}
        muted
        playsInline
        preload="none"
        loop
        className={className}
        style={{ ...maskStyle, opacity: 0 }}
      />
    </>
  );
}
