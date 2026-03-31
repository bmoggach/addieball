import Link from "next/link";

const links = [
  { href: "/highlights", label: "Highlights" },
  { href: "/gallery", label: "Gallery" },
  { href: "/stats", label: "Stats" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/merch", label: "Merch" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/[0.06] py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo */}
        <div>
          <div className="text-lg font-black tracking-[0.1em] uppercase">
            Addie <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Moggach</span>
          </div>
          <div className="text-[0.45rem] font-medium text-blue-400/25 tracking-[0.3em] uppercase mt-2">
            #35 • Season Two • 2026
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.6rem] font-medium text-white/20 tracking-[0.2em] uppercase hover:text-blue-400/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-blue-500/[0.04] flex justify-between items-center">
        <div className="text-[0.4rem] text-white/10 tracking-wider">
          © 2026 Addie Moggach. Built Different.
        </div>
        <div className="text-[0.4rem] text-white/10 tracking-wider">
          The Journey Starts Here ✌️
        </div>
      </div>
    </footer>
  );
}
