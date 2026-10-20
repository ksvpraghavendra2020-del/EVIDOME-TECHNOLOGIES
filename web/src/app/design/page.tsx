import { ButtonLink, Card, Disclaimer, Eyebrow, PageHero, Section } from "@/components/ui";
import { FAQ } from "@/components/Accordion";
import { Logo, LogoMark } from "@/components/Logo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Design system",
  description: "Internal design reference.",
  path: "/design",
  noindex: true,
});

const swatches = [
  ["ink-950", "#0a1628"],
  ["ink-900", "#0f2038"],
  ["ink-800", "#17304f"],
  ["ink-600", "#435a7a"],
  ["teal-700", "#0b7a80"],
  ["teal-400", "#2cc4c0"],
  ["teal-300", "#5eddd6"],
  ["ember-500", "#e08a2e"],
  ["mist-50", "#f6f9fb"],
  ["mist-100", "#eaf0f4"],
  ["mist-200", "#d7e1e9"],
];

export default function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Internal"
        title="Design system"
        text="Tokens and components used across the site. Not indexed."
      />
      <Section>
        <Eyebrow>Colour</Eyebrow>
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {swatches.map(([n, hex]) => (
            <li key={n}>
              <div className="h-16 rounded-lg border border-mist-200" style={{ background: hex }} />
              <p className="mt-2 font-mono text-xs text-ink-800">
                {n}
                <br />
                {hex}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Eyebrow>Type</Eyebrow>
        </div>
        <p className="mt-3 font-display text-5xl font-medium">Display: Fraunces</p>
        <p className="mt-3 max-w-xl text-lg">
          Body: Hanken Grotesk. <span className="font-mono text-sm">Mono: IBM Plex Mono</span>
        </p>
        <div className="mt-12">
          <Eyebrow>Brand</Eyebrow>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-10">
          <Logo /> <LogoMark className="h-14 w-14 text-ink-950" />
          <div className="rounded-xl bg-ink-950 p-6">
            <Logo light />
          </div>
        </div>
        <div className="mt-12">
          <Eyebrow>Buttons</Eyebrow>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <ButtonLink href="#" arrow>
            Primary
          </ButtonLink>
          <ButtonLink href="#" variant="secondary">
            Secondary
          </ButtonLink>
          <span className="rounded-full bg-ink-950 p-1">
            <ButtonLink href="#" variant="ghost-dark">
              On dark
            </ButtonLink>
          </span>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-medium">Card</h2>
            <p className="mt-2 text-ink-600">Default surface with soft shadow.</p>
          </Card>
          <Disclaimer>Disclaimer / placeholder callout.</Disclaimer>
        </div>
        <div className="mt-12 max-w-2xl">
          <FAQ
            items={[
              { q: "Sample question?", a: "Sample answer." },
              { q: "Another?", a: "Another answer." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
