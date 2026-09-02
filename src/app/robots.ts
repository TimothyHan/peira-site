import type { MetadataRoute } from "next";
import { abs } from "@/data/site";

// Emitted at /peira/robots.txt. Crawlers only honour robots.txt at the domain root, so this
// file is documentation rather than instruction — there is no root site on
// timothyhan.github.io to host one, and no robots.txt at all means "crawl everything", which
// is what we want anyway. The sitemap line is here so the reference lives with the routes.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: abs("/sitemap.xml"),
  };
}
