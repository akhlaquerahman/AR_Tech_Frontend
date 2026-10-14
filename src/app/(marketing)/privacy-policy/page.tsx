import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "AR Tech studio privacy policy, data protection, and lead handling procedures.",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl px-4 sm:px-8 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-xs text-muted-foreground mb-8">Effective Date: October 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section className="rounded-2xl glass-panel p-6">
            <h2 className="text-base font-bold text-foreground mb-2">1. Information We Collect</h2>
            <p>
              When you submit an inquiry through our website forms or contact channels, we collect information such as your name, corporate email address, organization name, phone number, and project requirements.
            </p>
          </section>

          <section className="rounded-2xl glass-panel p-6">
            <h2 className="text-base font-bold text-foreground mb-2">2. How We Use Information</h2>
            <p>
              Collected information is strictly used to evaluate your inquiry, prepare technical proposals, communicate regarding project timelines, and deliver digital engineering services. We do not sell or lease personal information to third parties.
            </p>
          </section>

          <section className="rounded-2xl glass-panel p-6">
            <h2 className="text-base font-bold text-foreground mb-2">3. Data Security & Storage</h2>
            <p>
              AR Tech implements industry-standard technical and operational safeguards to protect your personal information against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="rounded-2xl glass-panel p-6">
            <h2 className="text-base font-bold text-foreground mb-2">4. Contacting Us</h2>
            <p>
              For questions regarding this privacy policy or your personal data, please email us at contact@artech.dev.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
