"use client";

export default function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg ${className}`}
      style={{
        background: `linear-gradient(90deg, var(--card-bg) 25%, var(--accent-glow) 50%, var(--card-bg) 75%)`,
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s ease-in-out infinite",
      }}
    />
  );
}
