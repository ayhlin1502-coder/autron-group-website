import type { Metadata } from "next";
import { LegalPolicyPlaceholder } from "@/components/legal-policy-placeholder";

export const metadata: Metadata = {
  title: "Cookie Policy | Autron Group",
  description: "Autron Group cookie policy page pending approved legal content.",
  robots: { index: false, follow: true }
};

export default function CookiePolicyPage() {
  return <LegalPolicyPlaceholder eyebrow="Legal" title="Cookie Policy" />;
}
