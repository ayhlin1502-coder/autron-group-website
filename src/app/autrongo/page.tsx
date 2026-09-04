import { BusinessPage, type BusinessPageData } from "@/components/business-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autron Go | International Logistics",
  description: "Autron Go coordinates international freight, air and sea freight, consolidation and customs coordination through a logistics network."
};

const data: BusinessPageData = {
  name: "Autron Go",
  eyebrow: "Autron Go / International Logistics",
  hero: "Move Further. Move Smarter.",
  positioning: "International freight, cross-border consolidation and business logistics coordination for companies moving products between markets.",
  services: ["International Freight", "Air Freight", "Sea Freight", "Cross-border Consolidation", "Import-Export Logistics", "Customs Coordination", "Business Shipping Solutions"],
  note: "Coordinated through our logistics network. Trade with Autron. Ship with Autron Go.",
  ctas: [
    { label: "Request a Freight Quote", href: "/contact", primary: true },
    { label: "Talk to Our Logistics Team", href: "/contact" }
  ]
};

export default function AutronGoPage() {
  return <BusinessPage data={data} />;
}
