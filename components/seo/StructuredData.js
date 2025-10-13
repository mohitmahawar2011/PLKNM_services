/**
 * Structured Data Component for PLKNM Plumbing Services
 *
 * This component renders JSON-LD structured data for better SEO.
 * It helps search engines understand the content and context of pages.
 *
 * Features:
 * - Local Business schema
 * - Service schema
 * - Organization schema
 * - Breadcrumb schema
 * - FAQ schema
 * - Review schema
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import { structuredData } from "../../lib/seo-config.js";

/**
 * Main Structured Data Component
 * @param {Object} props - Component props
 * @param {string} props.type - Type of structured data to render
 * @param {Object} props.data - Additional data to merge with default schema
 * @returns {JSX.Element} Script tag with JSON-LD structured data
 */
export default function StructuredData({ type = "localBusiness", data = {} }) {
  let schema;

  switch (type) {
    case "localBusiness":
      schema = { ...structuredData.localBusiness, ...data };
      break;
    case "organization":
      schema = { ...structuredData.organization, ...data };
      break;
    case "website":
      schema = { ...structuredData.website, ...data };
      break;
    case "service":
      schema = generateServiceSchema(data);
      break;
    case "breadcrumb":
      schema = generateBreadcrumbSchema(data);
      break;
    case "faq":
      schema = generateFAQSchema(data);
      break;
    case "review":
      schema = generateReviewSchema(data);
      break;
    default:
      schema = structuredData.localBusiness;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2),
      }}
    />
  );
}

/**
 * Generate Service Schema
 * @param {Object} serviceData - Service information
 * @returns {Object} Service schema object
 */
function generateServiceSchema(serviceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.name || "Plumbing Service",
    description: serviceData.description || "Professional plumbing service",
    provider: {
      "@type": "LocalBusiness",
      name: structuredData.localBusiness.name,
      url: structuredData.localBusiness.url,
      telephone: structuredData.localBusiness.telephone,
      address: structuredData.localBusiness.address,
    },
    serviceType: serviceData.serviceType || "Plumbing",
    areaServed:
      serviceData.areaServed || structuredData.localBusiness.serviceArea,
    hasOfferCatalog:
      serviceData.offers || structuredData.localBusiness.hasOfferCatalog,
    ...serviceData,
  };
}

/**
 * Generate Breadcrumb Schema
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @returns {Object} Breadcrumb schema object
 */
function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ Schema
 * @param {Array} faqs - Array of FAQ items
 * @returns {Object} FAQ schema object
 */
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Review Schema
 * @param {Object} reviewData - Review information
 * @returns {Object} Review schema object
 */
function generateReviewSchema(reviewData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: structuredData.localBusiness.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewData.averageRating || "4.8",
      reviewCount: reviewData.reviewCount || "150",
      bestRating: "5",
      worstRating: "1",
    },
    review:
      reviewData.reviews?.map(review => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: review.text,
        datePublished: review.date,
      })) || [],
  };
}

/**
 * Specialized components for common use cases
 */

// Local Business Schema Component
export function LocalBusinessSchema({ additionalData = {} }) {
  return <StructuredData type="localBusiness" data={additionalData} />;
}

// Organization Schema Component
export function OrganizationSchema({ additionalData = {} }) {
  return <StructuredData type="organization" data={additionalData} />;
}

// Website Schema Component
export function WebsiteSchema({ additionalData = {} }) {
  return <StructuredData type="website" data={additionalData} />;
}

// Service Schema Component
export function ServiceSchema({ service }) {
  return <StructuredData type="service" data={service} />;
}

// Breadcrumb Schema Component
export function BreadcrumbSchema({ breadcrumbs }) {
  return <StructuredData type="breadcrumb" data={breadcrumbs} />;
}

// FAQ Schema Component
export function FAQSchema({ faqs }) {
  return <StructuredData type="faq" data={faqs} />;
}

// Review Schema Component
export function ReviewSchema({ reviews }) {
  return <StructuredData type="review" data={reviews} />;
}

// Contact Schema Component (alias for LocalBusinessSchema)
export function ContactSchema({ additionalData = {} }) {
  return <StructuredData type="localBusiness" data={additionalData} />;
}
