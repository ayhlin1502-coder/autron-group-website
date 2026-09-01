import { BusinessPage, type BusinessPageData } from "@/components/business-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AuzCare | Australian Brand Distribution",
  description: "AuzCare focuses on brand representation, distribution and retail channel development for Australian products in Taiwan."
};

const data: BusinessPageData = {
  name: "AuzCare",
  eyebrow: "AuzCare / Brand Distribution",
  hero: "Bringing Trusted Australian Products to Taiwan.",
  positioning: "Brand representation, distribution and retail channel development for Australian health, wellness and consumer products. Specific relationships and channel status require confirmation.",
  services: ["Brand Representation", "Distribution", "Retail Channel Development", "E-commerce Operations"],
  brands: ["Healthy Care", "Hunters Dream", "Belrose", "Origin A", "AuzBees", "Nature's Care", "Proudex", "A Buzz from the Bees", "Australia Manuka"],
  productGroups: [
    { title: "Health & Wellness", items: ["Fish Oil", "Mini Fish Oil Capsules", "Vitamin E Cream", "Cranberry Capsules", "Royal Jelly", "Propolis Capsules"] },
    { title: "Honey & Propolis", items: ["Honey", "Honeycomb", "Propolis Spray", "Propolis Drops", "Propolis Toothpaste", "Propolis Lozenges"] },
    { title: "Food & Nutrition", items: ["Extra Virgin Olive Oil", "Early Harvest EVOO"] }
  ],
  note: "Brand names and classifications are placeholders pending confirmation of each relationship: Represented Brand / Partner Brand / Manufacturer / Own Brand.",
  ctas: [
    { label: "Become a Brand Partner", href: "/contact", primary: true },
    { label: "Retail & Distribution Enquiry", href: "/contact" }
  ]
};

export default function AuzCarePage() {
  return <BusinessPage data={data} />;
}
