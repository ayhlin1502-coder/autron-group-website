import { BusinessPage, type BusinessPageData } from "@/components/business-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quarter Innovation | Technology & Digital Marketing",
  description: "Quarter Innovation provides website development and digital marketing capabilities to help businesses move forward."
};

const data: BusinessPageData = {
  name: "Quarter Innovation",
  eyebrow: "Quarter Innovation / Technology & Marketing",
  hero: "Technology That Moves Business Forward.",
  positioning: "A digital technology partner focused on practical website development and digital marketing for businesses building their next stage of growth.",
  serviceGroups: [
    { title: "Website Development", items: ["Corporate Websites", "E-commerce", "Landing Pages", "Website Optimisation"] },
    { title: "Digital Marketing", items: ["Digital Strategy", "Performance Marketing", "Social Media", "Campaign Development"] }
  ],
  note: "Future capabilities such as AI Automation, Digital Transformation, CRM Integration, Workflow Automation and Business Intelligence are not presented as current formal services.",
  ctas: [{ label: "Start a Project", href: "/contact", primary: true }]
};

export default function QuarterInnovationsPage() {
  return <BusinessPage data={data} />;
}
