import type { MetadataRoute } from "next";
import { audiences } from "@/lib/content/site";

const BASE = "https://www.immersivestudiocda.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "/",
    "/the-experience",
    "/who-its-for",
    ...audiences.map((audience) => `/who-its-for/${audience.slug}`),
    "/free-consultation",
    "/membership",
    "/showcase",
    "/faq",
    "/founder-story",
    "/contact",
    "/terms",
    "/floor-plan-walkthrough",
    "/plan-projection-coeur-dalene",
    "/spokane",
  ];
  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
