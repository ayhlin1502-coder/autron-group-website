import type { Metadata } from "next";
import { LegalPolicyPlaceholder } from "@/components/legal-policy-placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy | Autron Group",
  description: "Autron Group privacy policy page pending approved legal content.",
  robots: { index: false, follow: true }
};

export default function PrivacyPolicyPage() {
  return <LegalPolicyPlaceholder eyebrow="Legal" title="Privacy Policy" />;
}
