export const SITE_CONFIG = {
  name: "AR Tech",
  tagline: "Engineering Intelligent Digital Solutions",
  description:
    "AR Tech is an independent technology and digital solutions studio engineering custom web applications, SaaS platforms, AI solutions, and high-performance digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "contact@artech.dev",
  whatsappNumber: "+1234567890",
  socials: {
    github: "https://github.com/artech-studio",
    linkedin: "https://linkedin.com/company/artech-studio",
    twitter: "https://twitter.com/artech_dev",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
