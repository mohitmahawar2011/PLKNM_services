/**
 * Homepage for PLKNM Plumbing Services
 *
 * Classic-style homepage for professional plumbing contractors.
 * Features hero slider, company introduction, and service highlights.
 *
 * Features:
 * - Hero banner slider with project showcases
 * - Company introduction and legacy
 * - Service highlights for large-scale projects
 * - Professional classic styling
 * - SEO optimization
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import Link from "next/link";
import { siteConfig } from "../lib/seo-config";
import { ServiceSchema, FAQSchema } from "../components/seo/StructuredData";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSlider from "../components/ui/HeroSlider";

// Homepage metadata for SEO
export const metadata = {
  title: "Professional Plumbing Contractors Since 1970 | PLKNM Plumbing",
  description: `${siteConfig.fullName} - Professional plumbing contractors since the 1970s. Specializing in large-scale projects for hotels, malls, resorts, bungalows, cinemas, and commercial buildings.`,
  keywords: [
    "plumbing contractors",
    "commercial plumbing",
    "hotel plumbing",
    "mall plumbing",
    "resort plumbing",
    "cinema plumbing",
    "large scale plumbing",
    "commercial buildings",
    "showroom plumbing",
    "professional contractors"
  ].join(", "),
  openGraph: {
    title: "Professional Plumbing Contractors Since 1970 | PLKNM Plumbing",
    description: `Professional plumbing contractors specializing in large-scale projects. Serving hotels, malls, resorts, and commercial buildings since the 1970s.`,
    url: siteConfig.url,
    images: [
      {
        url: "/images/homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "PLKNM Plumbing Services - Professional Plumbing Contractors"
      }
    ]
  }
};

// FAQ data for structured data
const faqData = [
  {
    question: "What types of large-scale projects do you handle?",
    answer: "We specialize in comprehensive plumbing systems for hotels, malls, resorts, bungalows, cinemas, commercial buildings, and showrooms."
  },
  {
    question: "How long has PLKNM been in business?",
    answer: "PLKNM Plumbing Services has been providing professional plumbing contractor services since the 1970s, with over 50 years of experience."
  },
  {
    question: "Do you work on both commercial and residential projects?",
    answer: "Yes, we handle large-scale commercial projects as well as luxury residential developments including resorts and bungalows."
  },
  {
    question: "Are you licensed contractors?",
    answer: "Absolutely! We are fully licensed, bonded, and insured professional plumbing contractors with decades of proven expertise."
  }
];

// Service highlights data for large-scale projects
const services = [
  {
    name: "Hotel Plumbing Systems",
    description: "Complete plumbing infrastructure for luxury hotels and hospitality complexes",
    icon: "🏨",
    link: "/services"
  },
  {
    name: "Commercial Mall Plumbing",
    description: "Advanced plumbing solutions for shopping malls and retail complexes",
    icon: "🏬",
    link: "/services"
  },
  {
    name: "Resort & Bungalow Plumbing",
    description: "Premium plumbing installations for luxury resorts and residential developments",
    icon: "🏖️",
    link: "/services"
  },
  {
    name: "Cinema & Entertainment Complexes",
    description: "Specialized plumbing systems for cinemas, showrooms, and entertainment venues",
    icon: "🎬",
    link: "/services"
  },
  {
    name: "Commercial Building Infrastructure",
    description: "Comprehensive plumbing systems for office buildings and commercial spaces",
    icon: "🏢",
    link: "/services"
  },
  {
    name: "Showroom Plumbing",
    description: "Custom plumbing solutions for showrooms and retail display spaces",
    icon: "🏪",
    link: "/services"
  }
];

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <ServiceSchema
        service={{
          name: "Professional Plumbing Contractors",
          description: "Large-scale plumbing contractor services for hotels, malls, resorts, and commercial buildings since 1970",
          serviceType: "Plumbing Contractor",
          areaServed: siteConfig.serviceAreas
        }}
      />
      <FAQSchema faqs={faqData} />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="min-h-screen"
        style={{ backgroundColor: 'var(--background)' }}
      >
        {/* Hero Slider */}
        <HeroSlider />

        {/* Company Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {siteConfig.tagline}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {siteConfig.fullName} has been a trusted name in large-scale plumbing contractor
                services since the 1970s. We specialize in comprehensive plumbing solutions for
                hotels, malls, resorts, bungalows, cinemas, and commercial buildings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/services"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
                >
                  View Our Services
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Specializations Section */}
        <section className="py-16" style={{ backgroundColor: 'var(--background-alt)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Our Specializations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are full-scale contractors specializing in large-scale plumbing projects.
                Our expertise spans across various commercial and luxury residential developments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-200 border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Why Choose {siteConfig.name}?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                With over 50 years of experience, we bring unmatched expertise to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                     style={{ backgroundColor: 'var(--primary-light)' }}>
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  Large-Scale Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in complex commercial projects including hotels, malls, and entertainment complexes
                  with comprehensive infrastructure solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                     style={{ backgroundColor: 'var(--secondary-light)' }}>
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  50+ Years Legacy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Established in the 1970s, we have built a reputation for excellence and reliability
                  in the plumbing contractor industry.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                     style={{ backgroundColor: 'var(--accent)' }}>
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  Licensed & Certified
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fully licensed, bonded, and insured professional contractors with proven track record
                  in successful project completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 text-white" style={{ backgroundColor: 'var(--primary)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your large-scale plumbing project. Our experienced team
              is ready to provide professional contractor services for your commercial or residential development.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <a href={`tel:${siteConfig.contact.phone}`}
                     className="hover:opacity-80 transition-opacity duration-200"
                     style={{ color: 'var(--secondary-light)' }}>
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <a href={`mailto:${siteConfig.contact.email}`}
                     className="hover:opacity-80 transition-opacity duration-200"
                     style={{ color: 'var(--secondary-light)' }}>
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Project Quote
              </Link>
              <Link
                href="/clients"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
