import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CTABanner, PageHero, Section } from "@/components/ui";
import { ServiceIcon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Clinical research support, data management, biostatistics, statistical programming, medical writing, pharmacovigilance, regulatory affairs and training.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Eight specialist services, one coherent approach"
        text="Use one service for a defined need, or combine several for continuity across the clinical evidence chain."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 2) * 0.06} className="h-full">
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <Card className="flex h-full gap-5 group-hover:-translate-y-1">
                    <ServiceIcon name={s.icon} className="shrink-0" />
                    <div>
                      <h2 className="text-2xl font-medium text-ink-950">{s.title}</h2>
                      <p className="mt-2 leading-relaxed text-ink-600">{s.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                        View service <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
      <CTABanner />
    </>
  );
}
