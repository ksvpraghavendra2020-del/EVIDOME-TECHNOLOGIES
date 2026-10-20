import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-ink-950 text-white">
      <div className="grid-fade absolute inset-0" aria-hidden="true" />
      <Container className="relative py-32">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-300">Error 404</p>
        <h1 className="mt-4 text-5xl font-medium sm:text-6xl">This page isn’t in the dataset.</h1>
        <p className="mt-5 max-w-lg text-lg text-mist-200">The page may have moved, or the address may be mistyped.</p>
        <div className="mt-8 flex gap-4">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost-dark">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
