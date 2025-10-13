/**
 * Root Layout for PLKNM Plumbing Services
 *
 * This is the main layout component that wraps all pages.
 * It includes SEO optimizations, structured data, and global styles.
 *
 * Features:
 * - SEO-optimized metadata
 * - Structured data for local business
 * - Google Fonts optimization
 * - Accessibility improvements
 * - Performance optimizations
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import { Open_Sans, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { defaultMetadata, siteConfig } from "../lib/seo-config";
import {
  LocalBusinessSchema,
  OrganizationSchema,
  WebsiteSchema,
} from "../components/seo/StructuredData";

// Classic fonts for professional appearance
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  preload: true,
});

// SEO-optimized metadata
// Viewport configuration (Next.js 15 requirement)
export const viewport = {
  themeColor: "#007BFF", // PLKNM primary blue color
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  // Basic metadata
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords.join(", "),

  // Author and creator information
  authors: defaultMetadata.authors,
  creator: defaultMetadata.creator,
  publisher: defaultMetadata.publisher,

  // Robots and indexing
  robots: defaultMetadata.robots,

  // Verification codes for search engines
  verification: defaultMetadata.verification,

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professional Plumbing Solutions`,
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    site: "@plknm_plumbing",
    creator: "@plknm_plumbing",
    images: ["/images/twitter-image.jpg"],
  },

  // Additional metadata
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },

  // Format detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Manifest and icons
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1e40af",
      },
    ],
  },

  // Theme color moved to viewport export (Next.js 15 requirement)
  // themeColor: "#1e40af", // Moved to viewport export

  // Additional meta tags
  other: {
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
  },
};

/**
 * Root Layout Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Root layout with SEO optimizations
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${lato.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Structured Data for SEO */}
        <LocalBusinessSchema />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>

      <body
        className={`font-open-sans antialiased min-h-screen`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen flex flex-col">
          {children}
        </div>

        {/* Google Analytics (replace with your tracking ID) */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_TRACKING_ID');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
