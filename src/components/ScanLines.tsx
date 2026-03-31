export default function ScanLines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0,140,255,0.012) 2px,
          rgba(0,140,255,0.012) 4px
        )`,
      }}
    />
  );
}
