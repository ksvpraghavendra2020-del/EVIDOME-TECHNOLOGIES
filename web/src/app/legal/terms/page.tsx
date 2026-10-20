import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the Evidome website. Draft pending legal review.",
  path: "/legal/terms",
});

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="October 2026">
      <p>By using this website you agree to these terms. The site is operated by {site.legalName}, India.</p>
      <h2>1. Informational purposes</h2>
      <p>
        Content is provided for general information only. It is not medical, regulatory or legal advice, and nothing
        here creates a client relationship or guarantees any outcome, including regulatory approval.
      </p>
      <h2>2. Intellectual property</h2>
      <p>
        Site content, design and branding are owned by Evidome or its licensors. You may view and share links, but not
        copy or republish materials without permission.
      </p>
      <h2>3. Acceptable use</h2>
      <p>You agree not to misuse the site, attempt unauthorised access, or submit unlawful or malicious content.</p>
      <h2>4. Third-party links and standards</h2>
      <p>
        References to standards, regulators or third parties do not imply endorsement, partnership or certification.
      </p>
      <h2>5. Disclaimer and liability</h2>
      <p>
        The site is provided “as is”. To the extent permitted by law, we are not liable for losses arising from its use.
        [PLACEHOLDER: counsel to confirm limitation wording.]
      </p>
      <h2>6. Governing law</h2>
      <p>These terms are governed by the laws of India. [PLACEHOLDER: jurisdiction / courts.]</p>
    </LegalPage>
  );
}
