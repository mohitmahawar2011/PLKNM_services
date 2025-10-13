/**
 * Dynamic sitemap.xml generator for PLKNM Plumbing Services
 *
 * This file generates a comprehensive sitemap.xml that helps search engines
 * discover and index all pages on the website.
 *
 * Features:
 * - Dynamic generation based on available pages
 * - Proper priority and change frequency settings
 * - Last modified dates for better crawling
 * - Service-specific pages
 * - Location-based pages
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import { siteConfig } from "../../lib/seo-config.js";

// Define all static pages with their properties
const staticPages = [
  {
    url: "",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: "/about",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: "/contact",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/emergency",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: "/quote",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

// Define service pages
const servicePages = [
  {
    url: "/services/emergency-plumbing",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services/drain-cleaning",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services/water-heater",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services/pipe-repair",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services/bathroom-plumbing",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/services/kitchen-plumbing",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/services/leak-detection",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/services/commercial-plumbing",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

// Define location-based pages (add your service areas)
const locationPages = siteConfig.serviceAreas.map(area => ({
  url: `/locations/${area.toLowerCase().replace(/\s+/g, "-")}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.6,
}));

export async function GET() {
  // Combine all pages
  const allPages = [...staticPages, ...servicePages, ...locationPages];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    page => `  <url>
    <loc>${siteConfig.url}${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}

/**
 * Alternative function to generate sitemap for static export
 * Use this if you're deploying as a static site
 */
export function generateStaticSitemap() {
  const allPages = [...staticPages, ...servicePages, ...locationPages];

  return allPages.map(page => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
