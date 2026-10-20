import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation with Evidome about clinical data, statistics, safety, regulatory or technology needs.",
  path: "/contact",
});

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your programme"
        text="Share a few details and we’ll reply with an honest view of how we can help."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <ContactForm kind="enquiry" />
          </div>
          <aside aria-label="Contact details" className="space-y-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-950">Email</p>
                  <p className="text-ink-600">{c.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-950">Phone</p>
                  <p className="text-ink-600">{c.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-950">Registered office</p>
                  <p className="text-ink-600">{c.address}</p>
                </div>
              </li>
            </ul>
            <div className="rounded-2xl border border-mist-200 bg-mist-50 p-6">
              <h2 className="text-xl font-medium text-ink-950">Request a capabilities deck</h2>
              <p className="mt-2 text-ink-600">
                Select “Something else” in the form and mention “capabilities deck” in your message, and we’ll send our
                overview.
              </p>
              <p className="mt-3 text-xs text-ink-600">[PLACEHOLDER: capabilities deck not yet prepared.]</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
