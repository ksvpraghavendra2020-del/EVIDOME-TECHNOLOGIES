import type { ReactNode } from "react";
import { Container, Disclaimer, PageHero } from "./ui";

/** Shared shell for legal pages. All legal text is DRAFT pending counsel review. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} crumbs={[{ label: "Home", href: "/" }, { label: title }]} />
      <div className="bg-white py-14">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Disclaimer>
              <strong>Draft: to be reviewed by legal counsel before publication.</strong> This text is a starting
              template and is not legal advice. Last drafted: {updated}.
            </Disclaimer>
            <div className="mt-8 space-y-4 text-[1.05rem] leading-relaxed text-ink-800 [&_h2]:mb-2 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-ink-950 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
              {children}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
