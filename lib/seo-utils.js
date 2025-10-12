/**
 * SEO Utilities for PLKNM Plumbing Services
 * 
 * This file contains utility functions for SEO optimization,
 * including URL generation, meta tag helpers, and schema markup utilities.
 * 
 * Features:
 * - URL canonicalization
 * - Meta tag generation
 * - Schema markup helpers
 * - Sitemap utilities
 * - Local SEO helpers
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import { siteConfig } from './seo-config';

/**
 * Generate canonical URL for a given path
 * @param {string} path - The path to generate canonical URL for
 * @returns {string} Full canonical URL
 */
export function generateCanonicalUrl(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Generate page title with site name
 * @param {string} pageTitle - The page-specific title
 * @param {boolean} includeSiteName - Whether to include site name
 * @returns {string} Complete page title
 */
export function generatePageTitle(pageTitle, includeSiteName = true) {
  if (!pageTitle) {
    return `${siteConfig.name} - Professional Plumbing Solutions`;
  }
  
  return includeSiteName 
    ? `${pageTitle} | ${siteConfig.name}`
    : pageTitle;
}

/**
 * Generate meta description with fallback
 * @param {string} description - Page-specific description
 * @param {number} maxLength - Maximum length for description
 * @returns {string} Optimized meta description
 */
export function generateMetaDescription(description, maxLength = 160) {
  const fallbackDescription = siteConfig.description;
  const finalDescription = description || fallbackDescription;
  
  if (finalDescription.length <= maxLength) {
    return finalDescription;
  }
  
  return finalDescription.substring(0, maxLength - 3) + '...';
}

/**
 * Generate keywords array with site-wide keywords
 * @param {Array} pageKeywords - Page-specific keywords
 * @returns {Array} Combined keywords array
 */
export function generateKeywords(pageKeywords = []) {
  const siteKeywords = [
    'plumbing services',
    'emergency plumber',
    'licensed plumber',
    'PLKNM plumbing',
    siteConfig.contact.address.city.toLowerCase(),
    siteConfig.contact.address.state.toLowerCase()
  ];
  
  return [...new Set([...siteKeywords, ...pageKeywords])];
}

/**
 * Generate Open Graph image URL
 * @param {string} imagePath - Path to the image
 * @param {Object} options - Image options
 * @returns {Object} Open Graph image object
 */
export function generateOGImage(imagePath, options = {}) {
  const defaultOptions = {
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} - Professional Plumbing Solutions`
  };
  
  return {
    url: imagePath.startsWith('http') ? imagePath : `${siteConfig.url}${imagePath}`,
    ...defaultOptions,
    ...options
  };
}

/**
 * Generate structured data for local business
 * @param {Object} additionalData - Additional business data
 * @returns {Object} Local business schema
 */
export function generateLocalBusinessSchema(additionalData = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "PlumbingContractor",
    "name": siteConfig.fullName,
    "alternateName": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": process.env.NEXT_PUBLIC_LATITUDE || "40.7128",
      "longitude": process.env.NEXT_PUBLIC_LONGITUDE || "-74.0060"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check",
    "sameAs": Object.values(siteConfig.social),
    ...additionalData
  };
}

/**
 * Generate breadcrumb schema
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @returns {Object} Breadcrumb list schema
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`
    }))
  };
}

/**
 * Generate service schema
 * @param {Object} serviceData - Service information
 * @returns {Object} Service schema
 */
export function generateServiceSchema(serviceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "telephone": siteConfig.contact.phone
    },
    "serviceType": "Plumbing",
    "areaServed": siteConfig.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceData.name,
      "itemListElement": serviceData.offers || []
    }
  };
}

/**
 * Generate FAQ schema
 * @param {Array} faqs - Array of FAQ items
 * @returns {Object} FAQ page schema
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Validate and clean URL slug
 * @param {string} text - Text to convert to slug
 * @returns {string} Clean URL slug
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-'); // Remove leading/trailing hyphens
}

/**
 * Generate sitemap entry
 * @param {string} url - Page URL
 * @param {Object} options - Sitemap options
 * @returns {Object} Sitemap entry
 */
export function generateSitemapEntry(url, options = {}) {
  const defaultOptions = {
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5
  };
  
  return {
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    ...defaultOptions,
    ...options
  };
}

/**
 * Check if URL is external
 * @param {string} url - URL to check
 * @returns {boolean} True if external URL
 */
export function isExternalUrl(url) {
  return url.startsWith('http') && !url.startsWith(siteConfig.url);
}

/**
 * Generate phone number link
 * @param {string} phoneNumber - Phone number
 * @returns {string} Tel link
 */
export function generatePhoneLink(phoneNumber = siteConfig.contact.phone) {
  return `tel:${phoneNumber.replace(/[^\d+]/g, '')}`;
}

/**
 * Generate email link
 * @param {string} email - Email address
 * @param {string} subject - Email subject
 * @returns {string} Mailto link
 */
export function generateEmailLink(email = siteConfig.contact.email, subject = '') {
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${subjectParam}`;
}

/**
 * Format business hours for display
 * @param {Object} hours - Business hours object
 * @returns {Array} Formatted hours array
 */
export function formatBusinessHours(hours = siteConfig.businessHours) {
  return Object.entries(hours).map(([day, time]) => ({
    day: day.charAt(0).toUpperCase() + day.slice(1),
    time
  }));
}

const seoUtils = {
  generateCanonicalUrl,
  generatePageTitle,
  generateMetaDescription,
  generateKeywords,
  generateOGImage,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateSlug,
  generateSitemapEntry,
  isExternalUrl,
  generatePhoneLink,
  generateEmailLink,
  formatBusinessHours
};

export default seoUtils;
