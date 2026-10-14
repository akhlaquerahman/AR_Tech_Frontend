import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { NavItem } from "../navigation/nav-item";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-black/75 backdrop-blur-xl">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm group-hover:opacity-100 transition duration-300" />
            <div className="relative h-8 w-8 rounded-lg bg-neutral-950 border border-white/10 flex items-center justify-center font-bold text-white text-xs tracking-wider">
              <span className="text-gradient-hero font-black">AR</span>
            </div>
          </div>
          <span className="font-black text-lg tracking-tight text-white flex items-center">
            AR<span className="text-gradient-hero ml-1 font-bold">TECH</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.href} label={link.label} href={link.href} />
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15 text-xs sm:text-sm font-medium transition-all backdrop-blur-md shadow-sm hover:border-white/30"
          >
            <span>Get In Touch</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
