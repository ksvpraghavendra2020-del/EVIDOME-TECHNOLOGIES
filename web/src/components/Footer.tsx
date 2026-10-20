import Link from "next/link";
import { footerNav, site } from "@/content/site";
import { services } from "@/content/services";
import { Container } from "./ui";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-mist-200">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed">
              {site.tagline} Where clinical science meets data and technology.
            </p>
            <p className="mt-6 font-mono text-xs leading-relaxed text-ink-400">
              {site.legalName}
              <br />
              {site.company.type} · {site.country}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div>
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-teal-300">Services</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-white hover:underline">
                      {s.title.replace(" Support", "").replace(" & Drug Safety", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {Object.entries(footerNav).map(([group, links]) => (
              <div key={group}>
                <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-teal-300">{group}</h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-white hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-6 text-xs leading-relaxed text-ink-400">
          <p>
            The information on this website is provided for general informational purposes only. It is not medical
            advice and does not constitute a regulatory, legal or clinical recommendation. Frameworks and standards
            named on this site are those we work within or align to; they do not imply certification or endorsement.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
