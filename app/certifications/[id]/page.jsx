/**
 * Individual Certification Page for PLKNM Plumbing Services
 *
 * Displays detailed information about a specific certification including
 * full-size image and comprehensive details.
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../../lib/seo-config";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

// Certifications data (same as in clients page)
const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015 Quality Management",
    issuer: "International Organization for Standardization",
    date: "2023-12-15",
    validity: "2026-12-15",
    description:
      "Certified for quality management systems ensuring consistent service delivery and customer satisfaction.",
    image: "/images/certifications/Construction_Certificate.png",
    fullImage: "/images/certifications/Construction_Certificate.png",
    category: "Quality Management",
    fullDescription:
      "This ISO 9001:2015 certification demonstrates our commitment to maintaining the highest standards of quality management. Our quality management system ensures that all our plumbing services meet international standards for consistency, reliability, and customer satisfaction. This certification covers our entire service delivery process from initial consultation to project completion and follow-up support.",
    benefits: [
      "Consistent service delivery across all projects",
      "Continuous improvement in our processes",
      "Enhanced customer satisfaction and trust",
      "International recognition of our quality standards",
      "Regular audits to maintain excellence",
    ],
  },
  {
    id: 2,
    title: "Plumbing Contractor License",
    issuer: "State Plumbing Board",
    date: "2023-01-10",
    validity: "2025-01-10",
    description:
      "Licensed plumbing contractor with expertise in commercial and residential plumbing systems.",
    image: "/images/certifications/Construction_Certificate.png",
    fullImage: "/images/certifications/Construction_Certificate.png",
    category: "Professional License",
    fullDescription:
      "Our state-issued plumbing contractor license validates our technical expertise and legal authorization to perform plumbing work. This license ensures that all our work meets state building codes and safety standards. We maintain this license through continuous education and adherence to industry best practices.",
    benefits: [
      "Legal authorization for all plumbing work",
      "Compliance with state building codes",
      "Regular technical competency assessments",
      "Insurance and bonding requirements met",
      "Professional accountability and standards",
    ],
  },
  {
    id: 3,
    title: "Safety Excellence Award",
    issuer: "Construction Safety Council",
    date: "2023-06-20",
    validity: "Permanent",
    description:
      "Recognized for outstanding safety practices and zero workplace accidents over the past 5 years.",
    image: "/images/certifications/Construction_Certificate.png",
    fullImage: "/images/certifications/Construction_Certificate.png",
    category: "Safety Recognition",
    fullDescription:
      "This prestigious safety excellence award recognizes our outstanding commitment to workplace safety. Over the past 5 years, we have maintained a perfect safety record with zero workplace accidents. This achievement reflects our comprehensive safety training programs, strict adherence to safety protocols, and continuous improvement in safety practices.",
    benefits: [
      "Zero workplace accidents over 5 years",
      "Comprehensive safety training programs",
      "Regular safety audits and improvements",
      "Employee safety certification programs",
      "Industry-leading safety protocols",
    ],
  },
  {
    id: 4,
    title: "Green Building Certification",
    issuer: "Green Building Council",
    date: "2023-03-15",
    validity: "2026-03-15",
    description:
      "Certified in sustainable plumbing practices and eco-friendly installation techniques.",
    image: "/images/certifications/Construction_Certificate.png",
    fullImage: "/images/certifications/Construction_Certificate.png",
    category: "Environmental",
    fullDescription:
      "Our green building certification demonstrates our expertise in sustainable plumbing practices and eco-friendly installation techniques. We specialize in water-efficient systems, energy-saving solutions, and environmentally responsible materials. This certification ensures our clients receive environmentally conscious plumbing solutions that reduce their carbon footprint.",
    benefits: [
      "Water-efficient plumbing systems",
      "Energy-saving installation techniques",
      "Eco-friendly material selection",
      "Reduced environmental impact",
      "Sustainable building practices",
    ],
  },
  {
    id: 5,
    title: "Commercial Plumbing Specialist",
    issuer: "Plumbing Trade Association",
    date: "2023-09-01",
    validity: "2025-09-01",
    description:
      "Specialized certification in large-scale commercial plumbing systems and infrastructure.",
    image: "/images/certifications/Construction_Certificate.png",
    fullImage: "/images/certifications/Construction_Certificate.png",
    category: "Specialization",
    fullDescription:
      "This specialized certification validates our expertise in large-scale commercial plumbing systems. We have demonstrated advanced knowledge in complex commercial infrastructure, including high-rise buildings, shopping centers, hotels, and industrial facilities. Our specialists are trained in the latest commercial plumbing technologies and best practices.",
    benefits: [
      "Expertise in large-scale commercial systems",
      "Advanced knowledge of commercial infrastructure",
      "Specialized training in complex installations",
      "Industry best practices implementation",
      "Commercial project management expertise",
    ],
  },
  {
    id: 6,
    title: "Emergency Response Certified",
    issuer: "Emergency Services Board",
    date: "2023-11-10",
    validity: "2024-11-10",
    description:
      "Certified for 24/7 emergency plumbing services with rapid response capabilities.",
    image: "/images/certifications/Construction_Certificate.png",
    fullImage: "/images/certifications/Construction_Certificate.png",
    category: "Emergency Services",
    fullDescription:
      "Our emergency response certification ensures we can provide rapid, professional emergency plumbing services 24/7. This certification validates our ability to respond quickly to urgent plumbing issues, minimize damage, and restore services efficiently. Our emergency team is trained in crisis management and rapid problem resolution.",
    benefits: [
      "24/7 emergency response availability",
      "Rapid response time guarantees",
      "Crisis management expertise",
      "Damage minimization techniques",
      "Emergency equipment and tools",
    ],
  },
];

export async function generateMetadata({ params }) {
  const certification = certifications.find(
    cert => cert.id === parseInt(params.id)
  );

  if (!certification) {
    return {
      title: "Certification Not Found | PLKNM Plumbing Services",
      description: "The requested certification could not be found.",
    };
  }

  return {
    title: `${certification.title} | PLKNM Plumbing Services`,
    description: certification.description,
    keywords: [
      "PLKNM certifications",
      "plumbing contractor license",
      "quality management certification",
      "safety excellence",
      "green building certification",
      "commercial plumbing specialist",
      "emergency response certified",
    ].join(", "),
  };
}

export default function CertificationPage({ params }) {
  const certification = certifications.find(
    cert => cert.id === parseInt(params.id)
  );

  if (!certification) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Certification Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The requested certification could not be found.
            </p>
            <Link
              href="/clients"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Certifications
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ backgroundColor: "var(--background)" }}>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href="/clients"
                className="text-gray-600 hover:text-blue-600"
              >
                Our Clients
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">
                Certification Details
              </span>
            </nav>
          </div>
        </div>

        {/* Certification Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Certification Image */}
                <div className="space-y-6">
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <div
                      className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${certification.fullImage})`,
                      }}
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3
                      className="text-lg font-semibold mb-4"
                      style={{ color: "var(--foreground)" }}
                    >
                      Certificate Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Issued Date:</span>
                        <span className="font-medium">
                          {new Date(certification.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Valid Until:</span>
                        <span className="font-medium">
                          {certification.validity === "Permanent"
                            ? "Permanent"
                            : new Date(
                                certification.validity
                              ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="text-green-600 font-medium">
                          {certification.validity === "Permanent"
                            ? "Active"
                            : "Valid"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certification Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="px-4 py-2 rounded-full text-sm font-medium text-white"
                        style={{ backgroundColor: "var(--primary)" }}
                      >
                        {certification.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {certification.validity === "Permanent"
                          ? "Permanent"
                          : "Valid"}
                      </span>
                    </div>

                    <h1
                      className="text-3xl font-bold mb-4"
                      style={{ color: "var(--foreground)" }}
                    >
                      {certification.title}
                    </h1>

                    <div className="text-lg text-gray-600 mb-6">
                      <div className="font-medium">{certification.issuer}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2
                      className="text-xl font-semibold mb-4"
                      style={{ color: "var(--foreground)" }}
                    >
                      About This Certification
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {certification.fullDescription}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2
                      className="text-xl font-semibold mb-4"
                      style={{ color: "var(--foreground)" }}
                    >
                      Key Benefits
                    </h2>
                    <ul className="space-y-3">
                      {certification.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/clients"
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                    >
                      View All Certifications
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
