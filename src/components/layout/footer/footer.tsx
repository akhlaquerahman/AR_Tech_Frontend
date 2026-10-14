import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/40 backdrop-blur-md">
      <div className="container max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2.5 mb-4 group">
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
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              Independent technology & digital solutions studio engineering custom web applications, SaaS platforms, AI solutions, and conversion-focused digital experiences.
            </p>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-2 rounded-lg bg-secondary/50 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Legal & Studio</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center hover:text-foreground transition-colors"
                >
                  <span>WhatsApp Enquiries</span>
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with modern enterprise full-stack foundations.</p>
        </div>
      </div>
    </footer>
  );
}
