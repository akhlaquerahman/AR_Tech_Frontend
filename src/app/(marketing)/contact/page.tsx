import { constructMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { LeadCaptureForm } from "@/features/leads/components/lead-capture-form";
import { Mail, MessageSquare, ArrowUpRight, Clock, Shield } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact & Project Inquiries",
  description: "Get in touch with AR Tech for web development, SaaS, AI solutions, or general consultations.",
});

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-6xl px-4 sm:px-8 mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-wider font-semibold text-primary">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mt-3 mb-4">
            Let&apos;s Discuss Your Engineering Vision
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Whether you need a custom SaaS platform, an AI automation agent, or a modern business website, we are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel p-8">
              <h2 className="text-lg font-bold text-foreground mb-6">Direct Channels</h2>

              <div className="space-y-6">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-secondary/40 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Studio Email</h4>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {SITE_CONFIG.email}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">Response within 24 hours</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-secondary/40 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp Enquiries</h4>
                      <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                      Fast Direct Chat
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">Quick scoping & project discussions</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl glass-panel p-6 space-y-4">
              <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Operating hours: Monday – Friday, 09:00 – 18:00 UTC</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                <Shield className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Non-Disclosure Agreements (NDAs) supported upon request</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </div>
  );
}
