import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: "Terms and conditions governing the use of AR Tech digital studio services.",
});

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl px-4 sm:px-8 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Terms of Service</h1>
        <p className="text-xs text-muted-foreground mb-8">Effective Date: October 2026</p>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section className="rounded-2xl glass-panel p-6">
            <h2 className="text-base font-bold text-foreground mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing the AR Tech website or engaging our software consulting and engineering services, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="rounded-2xl glass-panel p-6">
            <h2 className="text-base font-bold text-foreground mb-2">2. Intellectual Property</h2>
            <p>
              All proprietary branding, technical documentation, methodologies, and content on this site are the property of AR Tech. Client deliverables are governed under individual Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section className="rounded-2xl glass-panel p-6">
            <h2 className="text-base font-bold text-foreground mb-2">3. Limitation of Liability</h2>
            <p>
              In no event shall AR Tech be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website or digital demonstration tools.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
