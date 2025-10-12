/**
 * SEO Configuration for PLKNM Plumbing Services
 * 
 * This file contains all SEO-related configurations including:
 * - Site metadata
 * - Open Graph settings
 * - Twitter Card settings
 * - Structured data schemas
 * - Local business information
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

// Base site configuration
export const siteConfig = {
  // Basic site information
  name: "PLKNM Plumbing Services",
  fullName: "Panna Lal Krishna Nand Mahawar Plumbing Services",
  description: "Professional Plumbing Contractors Since 1970 - PLKNM specializes in large-scale plumbing projects for hotels, malls, resorts, bungalows, cinemas, and commercial buildings. Trusted contractors with decades of experience.",
  tagline: "Professional Plumbing Contractors Since 1970",
  established: "1970s",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://plknm-plumbing.com",
  
  // Contact and business information
  contact: {
    phone: "+1-XXX-XXX-XXXX", // Replace with actual phone number
    email: "info@plknmplumbing.com", // Business email
    address: {
      street: "123 Main Street", // Replace with actual address
      city: "Your City",
      state: "Your State",
      zipCode: "12345",
      country: "United States"
    }
  },

  // Company specializations
  specializations: [
    "Hotels",
    "Malls",
    "Resorts",
    "Bungalows",
    "Cinemas",
    "Commercial Buildings",
    "Showrooms"
  ],
  
  // Business hours
  businessHours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Emergency Only"
  },
  
  // Service areas
  serviceAreas: [
    "Your City",
    "Nearby City 1",
    "Nearby City 2"
  ],
  
  // Social media profiles
  social: {
    facebook: "https://facebook.com/plknm-plumbing",
    twitter: "https://twitter.com/plknm_plumbing",
    instagram: "https://instagram.com/plknm_plumbing",
    linkedin: "https://linkedin.com/company/plknm-plumbing",
    youtube: "https://youtube.com/@plknm-plumbing"
  }
};

// Default metadata for all pages
export const defaultMetadata = {
  title: {
    template: "%s | PLKNM Plumbing Services",
    default: "PLKNM Plumbing Services - Professional Plumbing Solutions"
  },
  description: siteConfig.description,
  keywords: [
    "plumbing services",
    "emergency plumber",
    "residential plumbing",
    "commercial plumbing",
    "pipe repair",
    "drain cleaning",
    "water heater installation",
    "bathroom plumbing",
    "kitchen plumbing",
    "leak detection",
    "PLKNM plumbing",
    "licensed plumber",
    "local plumber"
  ],
  authors: [{ name: "PLKNM Plumbing Services" }],
  creator: "PLKNM Plumbing Services",
  publisher: "PLKNM Plumbing Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code", // Replace with actual verification code
    yahoo: "your-yahoo-verification-code", // Replace with actual verification code
  },
};

// Open Graph configuration
export const openGraphConfig = {
  type: "website",
  locale: "en_US",
  url: siteConfig.url,
  siteName: siteConfig.name,
  title: siteConfig.name,
  description: siteConfig.description,
  images: [
    {
      url: "/images/og-image.jpg", // Create this image (1200x630px)
      width: 1200,
      height: 630,
      alt: "PLKNM Plumbing Services - Professional Plumbing Solutions",
    },
  ],
};

// Twitter Card configuration
export const twitterConfig = {
  card: "summary_large_image",
  title: siteConfig.name,
  description: siteConfig.description,
  site: "@plknm_plumbing", // Replace with actual Twitter handle
  creator: "@plknm_plumbing", // Replace with actual Twitter handle
  images: ["/images/twitter-image.jpg"], // Create this image (1200x600px)
};

// Structured data schemas
export const structuredData = {
  // Local Business Schema
  localBusiness: {
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
      "latitude": "40.7128", // Replace with actual coordinates
      "longitude": "-74.0060" // Replace with actual coordinates
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128", // Replace with actual coordinates
        "longitude": "-74.0060" // Replace with actual coordinates
      },
      "geoRadius": "50000" // 50km radius
    },
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing Repair",
            "description": "24/7 emergency plumbing repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
            "description": "Professional drain cleaning and unclogging services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Installation",
            "description": "Water heater installation and replacement services"
          }
        }
      ]
    },
    "sameAs": Object.values(siteConfig.social)
  },

  // Organization Schema
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.fullName,
    "alternateName": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": Object.values(siteConfig.social)
  },

  // Website Schema
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
};

// SEO utility functions
export const generatePageMetadata = (pageData) => {
  return {
    title: pageData.title,
    description: pageData.description || siteConfig.description,
    keywords: [...defaultMetadata.keywords, ...(pageData.keywords || [])],
    openGraph: {
      ...openGraphConfig,
      title: pageData.title,
      description: pageData.description || siteConfig.description,
      url: `${siteConfig.url}${pageData.path || ""}`,
      images: pageData.images || openGraphConfig.images,
    },
    twitter: {
      ...twitterConfig,
      title: pageData.title,
      description: pageData.description || siteConfig.description,
      images: pageData.images || twitterConfig.images,
    },
    alternates: {
      canonical: pageData.path || "/",
    },
  };
};

const seoConfig = {
  siteConfig,
  defaultMetadata,
  openGraphConfig,
  twitterConfig,
  structuredData,
  generatePageMetadata
};

export default seoConfig;
