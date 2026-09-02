import type { MetadataRoute } from "next";
import { abs } from "@/data/site";

// Static export emits this as /peira/sitemap.xml. It will not be discovered automatically:
// robots.txt is only read from the domain root (timothyhan.github.io/robots.txt), which a
// project page cannot serve. Submit the URL directly in Google Search Console.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: abs("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: abs("/docs/"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: abs("/ko/"), lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: abs("/ko/docs/"), lastModified: now, changeFrequency: "weekly", priority: 0.4 },
  ];
}
