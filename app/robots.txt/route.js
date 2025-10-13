/**
 * Dynamic robots.txt generator for PLKNM Plumbing Services
 *
 * This file generates a robots.txt file dynamically to control
 * how search engine crawlers interact with the website.
 *
 * Features:
 * - Allows all crawlers to access the site
 * - Points to the sitemap location
 * - Includes crawl delay for better server performance
 * - Blocks access to admin and private areas
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import { siteConfig } from "../../lib/seo-config.js";

export async function GET() {
  const robotsTxt = `# Robots.txt for ${siteConfig.name}
# Generated automatically for optimal SEO

# Allow all crawlers to access the site
User-agent: *
Allow: /

# Block access to admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /.well-known/
Disallow: /temp/
Disallow: /tmp/

# Block access to specific file types that shouldn't be indexed
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$
Disallow: /*.log$

# Allow access to important files
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /robots.txt

# Crawl delay to be respectful to server resources
Crawl-delay: 1

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap.xml

# Additional sitemaps (if you have multiple)
# Sitemap: ${siteConfig.url}/sitemap-services.xml
# Sitemap: ${siteConfig.url}/sitemap-blog.xml

# Google-specific directives
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bing-specific directives
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Yandex-specific directives
User-agent: YandexBot
Allow: /
Crawl-delay: 2

# Block bad bots (add more as needed)
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Last updated: ${new Date().toISOString().split("T")[0]}
`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}
