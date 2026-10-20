import { ContactForm } from "@/components/ContactForm";
import { Card, Disclaimer, PageHero, Section, SectionHeader } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join Evidome: a new company building rigorous clinical data services and technology. See our culture and send a general application.",
  path: "/careers",
});

const culture = [
  { title: "Craft over speed theatre", text: "We value careful work, well documented, over looking busy." },
  {
    title: "Learning as a habit",
    text: "Standards and regulations evolve. We make time to keep up and share what we learn.",
  },
  { title: "Clear, kind communication", text: "Plain language, early flags and respect for people’s time." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help build a careful company"
        text="We’re at the start of our journey. If rigorous clinical data work and responsible technology matter to you, we’d like to hear from you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <Section labelledBy="culture">
        <SectionHeader id="culture" eyebrow="Culture" title="How we like to work" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {culture.map((c) => (
            <li key={c.title}>
              <Card className="h-full">
                <h3 className="text-xl font-medium text-ink-950">{c.title}</h3>
                <p className="mt-2 text-ink-600">{c.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist" labelledBy="roles">
        <SectionHeader id="roles" eyebrow="Open roles" title="Current openings" />
        <div className="mt-6">
          <Disclaimer>[PLACEHOLDER: no open roles are listed yet. Add roles here when hiring begins.]</Disclaimer>
        </div>
      </Section>
      <Section labelledBy="apply">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            id="apply"
            eyebrow="General application"
            title="Introduce yourself"
            text="Don’t see a role? Tell us about your background and we’ll keep your details in mind."
          />
          <div className="mt-8">
            <ContactForm kind="career" />
          </div>
        </div>
      </Section>
    </>
  );
}
