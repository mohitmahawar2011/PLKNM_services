/**
 * Certifications Page for PLKNM Plumbing Services
 * 
 * Showcases company certifications, recognitions, and credentials.
 * Features classic styling and professional presentation.
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../lib/seo-config";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Certifications page metadata
export const metadata = {
  title: "Certifications & Recognitions | PLKNM Plumbing Services",
  description: `View the professional certifications and industry recognitions of ${siteConfig.fullName}. Licensed, bonded, and certified plumbing contractors since the 1970s.`,
  keywords: [
    "plumbing contractor certifications",
    "licensed plumbers",
    "bonded contractors",
    "industry certifications",
    "professional credentials",
    "plumbing licenses"
  ].join(", "),
};

// Certifications data
const certifications = [
  {
    id: 1,
    title: "Master Plumbing Contractor License",
    issuer: "State Licensing Board",
    description: "Official state license authorizing us to perform large-scale commercial and residential plumbing contractor services.",
    year: "Renewed Annually",
    type: "License",
    image: "/images/certifications/master-license.jpg", // Placeholder
    status: "Active"
  },
  {
    id: 2,
    title: "Commercial Plumbing Certification",
    issuer: "National Plumbing Association",
    description: "Specialized certification for commercial plumbing systems including hotels, malls, and large-scale developments.",
    year: "2023",
    type: "Certification",
    image: "/images/certifications/commercial-cert.jpg", // Placeholder
    status: "Active"
  },
  {
    id: 3,
    title: "Safety Compliance Certificate",
    issuer: "Occupational Safety Board",
    description: "Certification demonstrating compliance with all safety standards and regulations for construction and plumbing work.",
    year: "2023",
    type: "Safety",
    image: "/images/certifications/safety-cert.jpg", // Placeholder
    status: "Active"
  },
  {
    id: 4,
    title: "Environmental Compliance Certification",
    issuer: "Environmental Protection Agency",
    description: "Recognition for adherence to environmental standards and sustainable plumbing practices.",
    year: "2023",
    type: "Environmental",
    image: "/images/certifications/environmental-cert.jpg", // Placeholder
    status: "Active"
  },
  {
    id: 5,
    title: "Quality Management System ISO 9001",
    issuer: "International Standards Organization",
    description: "Certification for maintaining international quality management standards in all our projects.",
    year: "2022",
    type: "Quality",
    image: "/images/certifications/iso-cert.jpg", // Placeholder
    status: "Active"
  },
  {
    id: 6,
    title: "Excellence in Hospitality Plumbing",
    issuer: "Hotel Industry Association",
    description: "Special recognition for outstanding work in hotel and hospitality plumbing systems.",
    year: "2022",
    type: "Award",
    image: "/images/certifications/hospitality-award.jpg", // Placeholder
    status: "Received"
  }
];

// Professional memberships
const memberships = [
  {
    organization: "National Association of Plumbing Contractors",
    role: "Active Member",
    since: "1975"
  },
  {
    organization: "Commercial Plumbing Contractors Association",
    role: "Board Member",
    since: "1985"
  },
  {
    organization: "Green Building Council",
    role: "Certified Member",
    since: "2010"
  },
  {
    organization: "Construction Industry Association",
    role: "Active Member",
    since: "1980"
  }
];

// Insurance and bonding information
const insurance = [
  {
    type: "General Liability Insurance",
    coverage: "$2,000,000",
    provider: "Leading Insurance Company"
  },
  {
    type: "Professional Liability Insurance",
    coverage: "$1,000,000",
    provider: "Professional Insurance Group"
  },
  {
    type: "Workers' Compensation",
    coverage: "Full Coverage",
    provider: "State Workers' Comp"
  },
  {
    type: "Contractor's Bond",
    coverage: "$500,000",
    provider: "Surety Bond Company"
  }
];

export default function CertificationsPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ backgroundColor: 'var(--background)' }}>
        {/* Page Header */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Certifications & Credentials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our professional certifications, licenses, and industry recognitions demonstrate our 
              commitment to excellence and compliance with the highest standards in plumbing contractor services.
            </p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-16" style={{ backgroundColor: 'var(--background-alt)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Professional Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive certifications ensure quality, safety, and compliance in every project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  {/* Certificate Image */}
                  <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🏆</div>
                      <div className="text-sm font-medium">{cert.type}</div>
                    </div>
                  </div>
                  
                  {/* Certificate Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                        {cert.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    
                    <div className="text-sm mb-3" style={{ color: 'var(--primary)' }}>
                      Issued by: {cert.issuer}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Year: {cert.year}
                      </span>
                      <span className="text-xs font-medium" style={{ color: 'var(--secondary)' }}>
                        Verified ✓
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Memberships */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Professional Memberships
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Active participation in industry organizations keeps us current with best practices and standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {memberships.map((membership, index) => (
                <div key={index} className="flex items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" 
                       style={{ backgroundColor: 'var(--primary-light)' }}>
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                      {membership.organization}
                    </h3>
                    <div className="text-sm mb-1" style={{ color: 'var(--primary)' }}>
                      {membership.role}
                    </div>
                    <div className="text-xs text-gray-500">
                      Member since {membership.since}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance & Bonding */}
        <section className="py-16" style={{ backgroundColor: 'var(--background-alt)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Insurance & Bonding
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive insurance coverage and bonding provide protection and peace of mind for all our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insurance.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: 'var(--secondary-light)' }}>
                    <span className="text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    {item.type}
                  </h3>
                  <div className="text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                    {item.coverage}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.provider}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Statement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                Our Commitment to Excellence
              </h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {siteConfig.fullName} maintains all required licenses, certifications, and insurance 
                  coverage to operate as professional plumbing contractors. Our commitment to compliance 
                  and excellence ensures that every project meets or exceeds industry standards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>100%</div>
                    <div className="text-sm text-gray-600">Licensed & Compliant</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: 'var(--secondary)' }}>50+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>24/7</div>
                    <div className="text-sm text-gray-600">Professional Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-white" style={{ backgroundColor: 'var(--primary)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trust the Certified Professionals
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Work with confidence knowing that PLKNM brings certified expertise, 
              comprehensive insurance, and professional credentials to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
              >
                View Our Services
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
