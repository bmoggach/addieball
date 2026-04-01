"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/lib/theme";

const links = [
  { href: "/highlights", label: "Highlights" },
  { href: "/gallery", label: "Gallery" },
  { href: "/stats", label: "Stats" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/merch", label: "Merch" },
];

export default function Nav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-10 py-5 flex justify-between items-center">
        <Link href="/" className="text-xs font-extrabold tracking-[0.15em] uppercase text-white">
          ADDIE MOGGACH{" "}
          <span className="text-[0.6rem] text-blue-400/60 align-super ml-0.5">#35</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.6rem] font-medium tracking-[0.2em] uppercase transition-colors relative
                ${pathname === link.href
                  ? "text-blue-400/70"
                  : "text-white/30 hover:text-blue-400/70"
                }
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px
                after:bg-blue-400/50 after:scale-x-0 after:transition-transform
                hover:after:scale-x-100
                ${pathname === link.href ? "after:scale-x-100" : ""}
              `}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-white/30 hover:text-blue-400/70 transition-colors text-sm p-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/50 hover:text-white/80 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <div className={`w-5 h-px bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <div className={`w-5 h-px bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-px bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden" style={{ background: 'var(--overlay)' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-lg font-bold tracking-[0.2em] uppercase transition-colors
                ${pathname === link.href ? "text-blue-400/70" : "text-white/40 hover:text-blue-400/70"}
              `}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-white/30 hover:text-blue-400/70 transition-colors text-xl mt-4 p-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </>
  );
}
