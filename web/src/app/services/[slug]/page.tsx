import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CTABanner, Disclaimer, Eyebrow, PageHero, Section } from "@/components/ui";
import { FAQ } from "@/components/Accordion";
import { KMChart, ForestPlot } from "@/components/Charts";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { getService, services } from "@/content/services";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.short, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.short,
    url: absoluteUrl(`/services/${s.slug}`),
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd
        data={[
          serviceLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Service"
        title={s.title}
        text={s.short}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.title }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <div className="mt-4 space-y-5 text-lg leading-relaxed text-ink-800">
              {s.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <Card className="self-start bg-mist-50">
            <h2 className="text-xl font-medium text-ink-950">Standards & frameworks we work within</h2>
            <ul className="mt-4 space-y-3">
              {s.frameworks.map((f) => (
                <li key={f} className="flex gap-2 text-[0.95rem] text-ink-800">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-ink-600">
              These are frameworks we work within or align to. They do not imply certification, accreditation or
              endorsement.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-ink-950">What we deliver</h2>
            <ul className="mt-6 space-y-3">
              {s.deliver.map((d) => (
                <li key={d} className="flex gap-3 text-ink-800">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-ink-950">Typical deliverables</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li
                  key={d}
                  className="rounded-xl border border-mist-200 bg-white px-4 py-3 text-sm font-medium text-ink-900"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {s.slug === "biostatistics" && (
        <Section>
          <h2 className="text-3xl font-medium text-ink-950">How we present results</h2>
          <p className="mt-3 max-w-2xl text-ink-600">Examples of our presentation style, using invented data.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <KMChart />
            <ForestPlot />
          </div>
        </Section>
      )}

      <Section>
        <h2 className="text-3xl font-medium text-ink-950">Engagement models</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {s.engagement.map((e) => (
            <li key={e.title}>
              <Card className="h-full">
                <h3 className="text-xl font-medium text-ink-950">{e.title}</h3>
                <p className="mt-2 text-ink-600">{e.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-medium text-ink-950">Frequently asked questions</h2>
          <div className="mt-8">
            <FAQ items={s.faqs} />
          </div>
          <div className="mt-8">
            <Disclaimer>
              Service descriptions are general and informational. Scope, responsibilities and outputs are defined in a
              written agreement for each engagement.
            </Disclaimer>
          </div>
          <p className="mt-8 text-sm text-ink-600">
            Explore other services in the{" "}
            <Link href="/services" className="font-semibold text-teal-700 underline underline-offset-2">
              services overview
            </Link>
            .
          </p>
        </div>
      </Section>
      <CTABanner title={`Discuss ${s.title.toLowerCase()}`} />
    </>
  );
}
