import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Evidome collects, uses and protects personal data, aligned to India’s Digital Personal Data Protection Act, 2023 and GDPR-aware practice. Draft.",
  path: "/legal/privacy",
});

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <p>
        {site.legalName} (“Evidome”, “we”) is the data fiduciary for personal data collected through this website. This
        policy explains what we collect, why, and the rights you have under India’s Digital Personal Data Protection
        Act, 2023 (“DPDP Act”). Where visitors are located in the EEA or UK, we also apply GDPR-aware practices.
      </p>
      <h2>1. What we collect</h2>
      <ul>
        <li>
          Information you submit through our enquiry or careers forms: name, email, organisation, role, area of interest
          and your message.
        </li>
        <li>Basic technical data needed to deliver and secure the site (e.g. IP address in server logs).</li>
        <li>Analytics data, only if you accept analytics on our cookie notice.</li>
      </ul>
      <h2>2. Why we process it</h2>
      <p>
        We process form data on the basis of your consent, to respond to your enquiry or consider your application. We
        do not sell personal data.
      </p>
      <h2>3. Sharing</h2>
      <p>
        We use service providers (for example, email delivery and hosting) who process data on our behalf under
        appropriate safeguards. [PLACEHOLDER: list providers and any cross-border transfers.]
      </p>
      <h2>4. Retention</h2>
      <p>
        We keep enquiry data only as long as needed for the purpose described. [PLACEHOLDER: define retention periods.]
      </p>
      <h2>5. Your rights</h2>
      <p>
        Subject to the DPDP Act and applicable law, you may request access to, correction or erasure of your personal
        data, withdraw consent, and seek grievance redressal.
      </p>
      <h2>6. Grievance officer</h2>
      <p>[PLACEHOLDER: name and contact details of the grievance / data protection contact.]</p>
      <h2>7. Security</h2>
      <p>
        We apply reasonable technical and organisational safeguards. No system is completely secure, and we cannot
        guarantee absolute security.
      </p>
      <h2>8. Children</h2>
      <p>This site is not directed at children and we do not knowingly collect their personal data.</p>
      <h2>9. Changes</h2>
      <p>We may update this policy and will post changes on this page.</p>
    </LegalPage>
  );
}
