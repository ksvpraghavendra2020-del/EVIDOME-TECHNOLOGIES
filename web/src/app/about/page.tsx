import { Card, CTABanner, Disclaimer, Eyebrow, PageHero, Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { site, values } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Evidome Technologies: a new, specialist partner combining clinical science, data and technology. Our story, mission, values and approach.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Where clinical science meets data and technology"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium text-ink-950 sm:text-4xl">Why “Evidome”?</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-800">
              <p>
                The name joins <em>evidence</em> and <em>dome</em>: the idea of a complete, protective structure built
                around the evidence that supports medical decisions. Strong evidence isn’t one brilliant analysis; it is
                many careful steps that hold together.
              </p>
              <p>
                Evidome is a new company, and we say so plainly. We are building a specialist partner for clinical
                research, data, statistics, safety and regulatory work, together with the software and AI that make that
                work faster and more traceable, and we intend to earn trust one engagement at a time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex items-center justify-center">
            <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl bg-ink-950 text-white">
              <LogoMark className="h-40 w-40" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist" labelledBy="mission">
        <SectionHeader
          id="mission"
          eyebrow="Mission"
          title="To make clinical evidence more rigorous, more transparent and easier to trust."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title}>
              <Card className="h-full">
                <h3 className="text-xl font-medium text-ink-950">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{v.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="leadership">
        <SectionHeader id="leadership" eyebrow="Leadership" title="The people behind Evidome" />
        <div className="mt-8">
          <Disclaimer>
            [PLACEHOLDER: founder / leadership profile(s): name, role, qualifications, short biography and photo. Only
            real, approved information should be published here.]
          </Disclaimer>
        </div>
      </Section>

      <Section tone="mist" labelledBy="company">
        <SectionHeader id="company" eyebrow="Company details" title="Corporate information" />
        <dl className="mt-8 grid max-w-3xl gap-4 rounded-2xl border border-mist-200 bg-white p-6 sm:grid-cols-[12rem_1fr]">
          {[
            ["Legal name", site.legalName],
            ["Entity type", site.company.type],
            ["Country", site.country],
            ["CIN", site.company.cin],
            ["Registered office", site.company.registeredOffice],
            ["Date of incorporation", site.company.incorporated],
          ].map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-mono text-xs uppercase tracking-wider text-ink-600">{k}</dt>
              <dd className="font-medium text-ink-950">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <CTABanner />
    </>
  );
}
