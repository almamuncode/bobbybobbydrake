import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "ko"].map((locale) => ({
    url: `${siteConfig.siteUrl}/${locale}/`,
    alternates: {
      languages: {
        en: `${siteConfig.siteUrl}/en/`,
        ko: `${siteConfig.siteUrl}/ko/`,
      },
    },
  }));
}
