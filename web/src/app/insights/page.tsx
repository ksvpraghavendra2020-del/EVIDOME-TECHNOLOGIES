import Link from "next/link";
import { Card, CTABanner, PageHero, Section } from "@/components/ui";
import { articles } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Perspectives on clinical data standards, risk-based data management, and responsible AI in pharmacovigilance.",
  path: "/insights",
});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking on clinical data and technology"
        text="Original articles from the Evidome team. General information, not advice."
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col group-hover:-translate-y-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-teal-700">{a.topic}</p>
                  <h2 className="mt-3 text-2xl font-medium leading-snug text-ink-950">{a.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-600">{a.excerpt}</p>
                  <p className="mt-5 text-sm text-ink-600">
                    <time dateTime={a.date}>{fmt(a.date)}</time> · {a.readMinutes} min read
                  </p>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CTABanner />
    </>
  );
}
