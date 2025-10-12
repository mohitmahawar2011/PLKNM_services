/**
 * Meta Tags Component for PLKNM Plumbing Services
 * 
 * This component provides a centralized way to manage meta tags
 * for SEO optimization across all pages.
 * 
 * Features:
 * - Dynamic meta tag generation
 * - Open Graph tags
 * - Twitter Card tags
 * - Canonical URLs
 * - Robots meta tags
 * - Viewport and other essential tags
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import React from 'react';
import Head from 'next/head';
import { siteConfig, defaultMetadata } from '../../lib/seo-config';

/**
 * Main Meta Tags Component
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {Array} props.keywords - Additional keywords
 * @param {string} props.canonical - Canonical URL
 * @param {Object} props.openGraph - Open Graph data
 * @param {Object} props.twitter - Twitter Card data
 * @param {string} props.robots - Robots directive
 * @param {Array} props.additionalTags - Additional meta tags
 * @returns {JSX.Element} Head component with meta tags
 */
export default function MetaTags({
  title,
  description = siteConfig.description,
  keywords = [],
  canonical,
  openGraph = {},
  twitter = {},
  robots = 'index,follow',
  additionalTags = []
}) {
  // Construct full title
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Professional Plumbing Solutions`;

  // Combine keywords
  const allKeywords = [...defaultMetadata.keywords, ...keywords].join(', ');

  // Construct canonical URL
  const canonicalUrl = canonical 
    ? `${siteConfig.url}${canonical}`
    : siteConfig.url;

  // Merge Open Graph data
  const ogData = {
    title: title || siteConfig.name,
    description,
    url: canonicalUrl,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Professional Plumbing Solutions`
      }
    ],
    ...openGraph
  };

  // Merge Twitter Card data
  const twitterData = {
    card: 'summary_large_image',
    site: '@plknm_plumbing',
    creator: '@plknm_plumbing',
    title: title || siteConfig.name,
    description,
    images: [`${siteConfig.url}/images/twitter-image.jpg`],
    ...twitter
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:type" content={ogData.type} />
      <meta property="og:locale" content={ogData.locale} />
      
      {/* Open Graph Images */}
      {ogData.images.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          <meta property="og:image:width" content={image.width?.toString()} />
          <meta property="og:image:height" content={image.height?.toString()} />
          <meta property="og:image:alt" content={image.alt} />
        </React.Fragment>
      ))}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterData.card} />
      <meta name="twitter:site" content={twitterData.site} />
      <meta name="twitter:creator" content={twitterData.creator} />
      <meta name="twitter:title" content={twitterData.title} />
      <meta name="twitter:description" content={twitterData.description} />
      
      {/* Twitter Images */}
      {twitterData.images.map((image, index) => (
        <meta key={index} name="twitter:image" content={image} />
      ))}
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme and Browser Colors */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Additional Meta Tags */}
      {additionalTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  );
}

/**
 * Specialized Meta Tag Components
 */

// Homepage Meta Tags
export function HomePageMeta() {
  return (
    <MetaTags
      title="Professional Plumbing Services"
      description={`${siteConfig.fullName} provides expert plumbing services including emergency repairs, installations, and maintenance. Licensed and insured plumbers serving ${siteConfig.serviceAreas.join(', ')}.`}
      keywords={[
        'emergency plumber',
        'local plumber',
        '24/7 plumbing',
        'plumbing contractor',
        'licensed plumber'
      ]}
      canonical="/"
    />
  );
}

// Service Page Meta Tags
export function ServicePageMeta({ serviceName, serviceDescription, serviceSlug }) {
  return (
    <MetaTags
      title={`${serviceName} Services`}
      description={serviceDescription}
      keywords={[
        serviceName.toLowerCase(),
        `${serviceName.toLowerCase()} service`,
        `professional ${serviceName.toLowerCase()}`,
        `${serviceName.toLowerCase()} repair`
      ]}
      canonical={`/services/${serviceSlug}`}
    />
  );
}

// Contact Page Meta Tags
export function ContactPageMeta() {
  return (
    <MetaTags
      title="Contact Us"
      description={`Contact ${siteConfig.name} for professional plumbing services. Call ${siteConfig.contact.phone} or request a quote online. Licensed and insured plumbers ready to help.`}
      keywords={[
        'contact plumber',
        'plumbing quote',
        'plumber phone number',
        'plumbing estimate'
      ]}
      canonical="/contact"
    />
  );
}

// About Page Meta Tags
export function AboutPageMeta() {
  return (
    <MetaTags
      title="About Us"
      description={`Learn about ${siteConfig.fullName} - experienced plumbing professionals serving the community with quality workmanship and reliable service since [year].`}
      keywords={[
        'about plumber',
        'plumbing company',
        'experienced plumber',
        'local plumbing business'
      ]}
      canonical="/about"
    />
  );
}
