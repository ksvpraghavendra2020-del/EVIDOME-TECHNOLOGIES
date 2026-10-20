import { Check } from "lucide-react";
import { Card, CTABanner, PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Evidome supports pharmaceutical, biotechnology, medical device, healthcare provider and life sciences research organisations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Different sectors, one standard of care for data"
        text="Each part of the life sciences ecosystem has its own pressures. We adapt our engagement to yours."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <li key={ind.slug}>
              <Reveal delay={(i % 2) * 0.07} className="h-full">
                <Card className="h-full">
                  <h2 className="text-2xl font-medium text-ink-950">{ind.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-600">{ind.text}</p>
                  <ul className="mt-5 space-y-2">
                    {ind.needs.map((n) => (
                      <li key={n} className="flex gap-2 text-sm font-medium text-ink-800">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <CTABanner />
    </>
  );
}
