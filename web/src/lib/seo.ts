import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = { title: string; description: string; path: string; noindex?: boolean; type?: "website" | "article" };

/** Builds consistent per-page metadata: canonical, Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path, noindex, type = "website" }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: { title, description, url: path, type, siteName: site.name, locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
