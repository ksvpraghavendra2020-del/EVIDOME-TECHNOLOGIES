import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { articles } from "@/content/insights";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    "/",
    "/services",
    "/technology",
    "/ai-analytics",
    "/industries",
    "/about",
    "/insights",
    "/careers",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ];
  return [
    ...fixed.map((p) => ({ url: absoluteUrl(p), changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({ url: absoluteUrl(`/insights/${a.slug}`), lastModified: a.date, priority: 0.6 })),
  ];
}
