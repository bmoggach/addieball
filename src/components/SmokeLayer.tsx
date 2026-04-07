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
 * so the restart is never visible.
 */
export default function SmokeLayer({ src, className, maskStyle, maxOpacity, delayB = 0 }: SmokeLayerProps) {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);

  const crossfade = useCallback((from: HTMLVideoElement, to: HTMLVideoElement) => {
    to.currentTime = 0;
    to.play().catch(() => {});

    const dur = 1500;
    const steps = 30;
    const stepMs = dur / steps;
    let i = 0;

    const interval = setInterval(() => {
      i++;
      const t = i / steps;
      from.style.opacity = String(maxOpacity * (1 - t));
      to.style.opacity = String(maxOpacity * t);
      if (i >= steps) clearInterval(interval);
    }, stepMs);
  }, [maxOpacity]);

  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    let active = a;
    let standby = b;
    b.style.opacity = "0";

    const onTimeUpdate = () => {
      if (active.duration && active.currentTime > active.duration - 1.5) {
        active.removeEventListener("timeupdate", onTimeUpdate);
        crossfade(active, standby);
        const tmp = active;
        active = standby;
        standby = tmp;
        active.addEventListener("timeupdate", onTimeUpdate);
      }
    };

    a.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      a.removeEventListener("timeupdate", onTimeUpdate);
      b.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [crossfade]);

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
        preload="auto"
        className={className}
        style={{ ...maskStyle, opacity: 0 }}
      />
    </>
  );
}
