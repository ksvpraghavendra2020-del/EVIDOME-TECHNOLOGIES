import { notFound } from "next/navigation";
import Link from "next/link";
import { CTABanner, Container, PageHero } from "@/components/ui";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { articles, getArticle } from "@/content/insights";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({ title: a.title, description: a.excerpt, path: `/insights/${a.slug}`, type: "article" });
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    author: { "@type": "Organization", name: a.author },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: absoluteUrl(`/insights/${a.slug}`),
  };

  return (
    <>
      <JsonLd
        data={[
          articleLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: a.title, path: `/insights/${a.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={a.topic}
        title={a.title}
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: "Article" }]}
      >
        <p className="mt-6 font-mono text-xs text-mist-200">
          {a.author} ·{" "}
          <time dateTime={a.date}>
            {new Date(a.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>{" "}
          · {a.readMinutes} min read
        </p>
      </PageHero>
      <article className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-lg leading-[1.75] text-ink-800">
            {a.body.map((b, i) => {
              switch (b.type) {
                case "h2":
                  return (
                    <h2 key={i} className="mb-3 mt-12 text-3xl font-medium text-ink-950">
                      {b.text}
                    </h2>
                  );
                case "ul":
                  return (
                    <ul key={i} className="my-5 list-disc space-y-2 pl-6 marker:text-teal-700">
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  );
                case "callout":
                  return (
                    <aside
                      key={i}
                      className="my-8 rounded-xl border-l-4 border-teal-600 bg-mist-50 px-6 py-4 font-display text-xl italic text-ink-950"
                    >
                      {b.text}
                    </aside>
                  );
                default:
                  return (
                    <p key={i} className="my-5">
                      {b.text}
                    </p>
                  );
              }
            })}
            <p className="mt-12 border-t border-mist-200 pt-6 text-sm text-ink-600">
              This article is for general information only and is not medical, regulatory or legal advice.
            </p>
            <Link
              href="/insights"
              className="mt-6 inline-block font-semibold text-teal-700 underline underline-offset-2"
            >
              ← All insights
            </Link>
          </div>
        </Container>
      </article>
      <CTABanner />
    </>
  );
}
