import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3100";

const routes = [
  "",
  "/about",
  "/autron-trade",
  "/auzcare",
  "/autrongo",
  "/quarter-innovations",
  "/global-network",
  "/contact",
  "/en",
  "/en/about",
  "/en/autron-trade",
  "/en/auzcare",
  "/en/autrongo",
  "/en/quarter-innovations",
  "/en/global-network",
  "/en/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" || route === "/en" ? 1 : 0.8
  }));
}
