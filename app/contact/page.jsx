/**
 * Contact Page for PLKNM Plumbing Services
 *
 * Professional contact page with form, company details, and location information.
 * Features classic styling and comprehensive contact options.
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import Link from "next/link";
import { siteConfig } from "../../lib/seo-config";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ContactForm from "../../components/ui/ContactForm";
import { ContactSchema } from "../../components/seo/StructuredData";

// Contact page metadata
export const metadata = {
  title: "Contact Us - Get Project Quote | PLKNM Plumbing Services",
  description: `Contact ${siteConfig.fullName} for professional plumbing contractor services. Get quotes for hotels, malls, resorts, and commercial buildings. Call ${siteConfig.contact.phone}`,
  keywords: [
    "contact PLKNM plumbing",
    "plumbing contractor quote",
    "commercial plumbing estimate",
    "hotel plumbing services",
    "plumbing project consultation",
    siteConfig.contact.phone,
  ].join(", "),
};

// Contact information data
const contactInfo = [
  {
    icon: "📞",
    title: "Phone",
    details: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
    description: "Call us for immediate assistance",
  },
  {
    icon: "✉️",
    title: "Email",
    details: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
    description: "Send us your project details",
  },
  {
    icon: "📍",
    title: "Office",
    details: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zipCode}`,
    link: "#",
    description: "Visit our office location",
  },
  {
    icon: "🕒",
    title: "Business Hours",
    details: "Mon - Sat: 8:00 AM - 6:00 PM",
    link: "#",
    description: "Sunday: Emergency calls only",
  },
];

// Service areas
const serviceAreas = [
  "Metropolitan Area",
  "Commercial Districts",
  "Industrial Zones",
  "Hospitality Sector",
  "Retail Complexes",
  "Residential Developments",
];

// Emergency contact info
const emergencyInfo = {
  available: "24/7 Emergency Service",
  phone: siteConfig.contact.phone,
  description: "For urgent plumbing emergencies in large-scale facilities",
};

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <ContactSchema />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ backgroundColor: "var(--background)" }}>
        {/* Page Header */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your large-scale plumbing project? Contact our
              experienced team for professional contractor services. We&rsquo;re
              here to discuss your requirements and provide comprehensive
              solutions.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--background-alt)" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {info.title}
                  </h3>
                  {info.link !== "#" ? (
                    <a
                      href={info.link}
                      className="font-medium hover:underline transition-colors duration-200"
                      style={{ color: "var(--primary)" }}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <div
                      className="font-medium"
                      style={{ color: "var(--primary)" }}
                    >
                      {info.details}
                    </div>
                  )}
                  <p className="text-sm text-gray-600 mt-2">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Company Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Company Information */}
              <div className="space-y-8">
                {/* About Section */}
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: "var(--foreground)" }}
                  >
                    Why Choose {siteConfig.name}?
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With over 50 years of experience since the 1970s, we are not
                    small service providers but full-scale contractors
                    specializing in major commercial and residential
                    developments.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span
                        className="mr-2 mt-1"
                        style={{ color: "var(--secondary)" }}
                      >
                        •
                      </span>
                      <span>Licensed and bonded professional contractors</span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-2 mt-1"
                        style={{ color: "var(--secondary)" }}
                      >
                        •
                      </span>
                      <span>Comprehensive insurance coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-2 mt-1"
                        style={{ color: "var(--secondary)" }}
                      >
                        •
                      </span>
                      <span>Proven track record in large-scale projects</span>
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-2 mt-1"
                        style={{ color: "var(--secondary)" }}
                      >
                        •
                      </span>
                      <span>Professional project management</span>
                    </li>
                  </ul>
                </div>

                {/* Service Areas */}
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--foreground)" }}
                  >
                    Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <span
                          className="mr-2"
                          style={{ color: "var(--primary)" }}
                        >
                          ✓
                        </span>
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-red-800">
                    Emergency Service
                  </h3>
                  <p className="text-red-700 mb-3">
                    {emergencyInfo.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🚨</span>
                    <div>
                      <div className="font-semibold text-red-800">
                        {emergencyInfo.available}
                      </div>
                      <a
                        href={`tel:${emergencyInfo.phone}`}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        {emergencyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--foreground)" }}
                  >
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/services"
                      className="block text-primary hover:text-primary-dark transition-colors duration-200"
                    >
                      → View Our Services
                    </Link>
                    <Link
                      href="/clients"
                      className="block text-primary hover:text-primary-dark transition-colors duration-200"
                    >
                      → Client Testimonials
                    </Link>
                    <Link
                      href="/certifications"
                      className="block text-primary hover:text-primary-dark transition-colors duration-200"
                    >
                      → Our Certifications
                    </Link>
                    <Link
                      href="/about"
                      className="block text-primary hover:text-primary-dark transition-colors duration-200"
                    >
                      → About Our Company
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--background-alt)" }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Our Location
              </h2>
              <p className="text-lg text-gray-600">
                Visit our office or schedule an on-site consultation for your
                project.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Interactive Map
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Google Maps integration would be placed here showing our
                    office location and service areas. Contact us for detailed
                    directions.
                  </p>
                  <div className="mt-4">
                    <span
                      className="inline-block px-4 py-2 rounded-md text-white font-medium"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      {`${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zipCode}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don&rsquo;t wait - contact us today to discuss your large-scale
              plumbing project requirements and get a professional consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="px-8 py-3 rounded-md font-semibold text-white transition-colors duration-200"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Call Now: {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="px-8 py-3 rounded-md font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
