import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Notice",
  description: "How Evidome uses cookies and similar technologies. Draft pending legal review.",
  path: "/legal/cookies",
});

export default function Cookies() {
  return (
    <LegalPage title="Cookie Notice" updated="October 2026">
      <p>This website does not set advertising or tracking cookies.</p>
      <h2>Essential storage</h2>
      <p>
        We store your cookie choice in your browser’s local storage so we do not ask repeatedly. This is strictly
        necessary for the notice to function.
      </p>
      <h2>Analytics (optional)</h2>
      <p>
        If analytics is enabled on the site, a privacy-friendly analytics script loads{" "}
        <strong>only after you click Accept</strong>. You can decline, and the site works the same. To change your
        choice, clear this site’s data in your browser.
      </p>
      <h2>Contact</h2>
      <p>Questions about this notice can be sent via our contact page.</p>
    </LegalPage>
  );
}
