/**
 * Clients Page for PLKNM Plumbing Services
 *
 * Showcases past clients, testimonials, and successful partnerships.
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
import { ReviewSchema } from "../../components/seo/StructuredData";
import LondBanner from "@/public/images/clients/Long_island_design_build.webp";

// Clients page metadata
export const metadata = {
  title: "Our Clients & Testimonials | PLKNM Plumbing Services",
  description: `Discover the satisfied clients of ${siteConfig.fullName}. Read testimonials from hotels, malls, resorts, and commercial buildings we've served since the 1970s.`,
  keywords: [
    "PLKNM clients",
    "plumbing contractor testimonials",
    "hotel plumbing clients",
    "commercial plumbing reviews",
    "satisfied customers",
    "project references",
  ].join(", "),
};

// Client testimonials data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Project Manager",
    company: "Grand Palace Hotel",
    rating: 5,
    text: "PLKNM Plumbing Services delivered exceptional work on our 200-room luxury hotel project. Their expertise in large-scale hospitality plumbing systems is unmatched. The project was completed on time and exceeded our expectations.",
    date: "2023-08-15",
    projectType: "Hotel Plumbing",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Construction Director",
    company: "Metro Shopping Complex",
    rating: 5,
    text: "Working with PLKNM on our shopping mall project was a pleasure. Their professional approach and attention to detail in handling the complex plumbing requirements for our food court and retail spaces was impressive.",
    date: "2023-06-20",
    projectType: "Commercial Mall",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Resort Owner",
    company: "Sunset Beach Resort",
    rating: 5,
    text: "The team at PLKNM transformed our resort's plumbing infrastructure. From luxury bathroom installations to pool plumbing systems, their craftsmanship and reliability have been outstanding. Highly recommended for luxury projects.",
    date: "2023-04-10",
    projectType: "Resort Development",
  },
];

// Past clients data (dummy data for demonstration)
const clients = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    type: "Luxury Hotel",
    location: "City Center",
    project: "Complete plumbing infrastructure for 200-room luxury hotel",
    year: "2023",
    logo: "/images/clients/grand-palace-hotel.png", // Placeholder
  },
  {
    id: 2,
    name: "Metro Shopping Complex",
    type: "Shopping Mall",
    location: "Downtown",
    project: "Commercial plumbing systems for 3-level shopping complex",
    year: "2023",
    logo: "/images/clients/metro-shopping.png", // Placeholder
  },
  {
    id: 3,
    name: "Sunset Beach Resort",
    type: "Luxury Resort",
    location: "Coastal Area",
    project: "Resort plumbing including spa and pool systems",
    year: "2023",
    logo: "/images/clients/sunset-resort.png", // Placeholder
  },
  {
    id: 4,
    name: "Cineplex Entertainment",
    type: "Cinema Complex",
    location: "Mall District",
    project: "Specialized plumbing for 12-screen cinema complex",
    year: "2022",
    logo: "/images/clients/cineplex.png", // Placeholder
  },
  {
    id: 5,
    name: "Corporate Tower",
    type: "Office Building",
    location: "Business District",
    project: "Commercial building plumbing for 25-floor office tower",
    year: "2022",
    logo: "/images/clients/corporate-tower.png", // Placeholder
  },
  {
    id: 6,
    name: "Luxury Bungalow Estate",
    type: "Residential Development",
    location: "Premium Locality",
    project: "High-end plumbing for luxury bungalow development",
    year: "2022",
    logo: "/images/clients/luxury-estate.png", // Placeholder
  },
];

// Project statistics
const stats = [
  { number: "50+", label: "Years of Experience" },
  { number: "100+", label: "Projects Completed" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

export default function ClientsPage() {
  return (
    <>
      {/* Structured Data */}
      <ReviewSchema
        reviews={{
          averageRating: "5.0",
          reviewCount: "50",
          reviews: testimonials.map(testimonial => ({
            author: testimonial.name,
            rating: testimonial.rating,
            text: testimonial.text,
            date: testimonial.date,
          })),
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ backgroundColor: "var(--background)" }}>
        {/* Page Header */}
        <section
          className="py-20 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${LondBanner.src})`,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-opacity-40"></div>

          <div className="container mx-auto px-4 text-center relative z-10 text-dark">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              Our Valued Clients
            </h1>
            <p className="text-xl !text-bold  max-w-3xl mx-auto leading-relaxed">
              For over 50 years, we have built lasting partnerships with leading
              hotels, malls, resorts, and commercial developments. Our client
              satisfaction and successful project completions speak to our
              commitment to excellence.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--background-alt)" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: "var(--primary)" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Read testimonials from our satisfied clients who have
                experienced our professional plumbing contractor services
                firsthand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <div
                  key={testimonial.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-3 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-gray-200 pt-2">
                    <div
                      className="font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "var(--primary)" }}
                    >
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Project: {testimonial.projectType}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Clients */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--background-alt)" }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Our Project Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A showcase of successful partnerships and completed projects
                across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map(client => (
                <div
                  key={client.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  {/* Client Logo/Image */}
                  <div className="h-30 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div
                      className="text-4xl font-bold"
                      style={{ color: "var(--primary)" }}
                    >
                      {client.name.charAt(0)}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      {client.name}
                    </h3>
                    <div
                      className="text-sm mb-2"
                      style={{ color: "var(--primary)" }}
                    >
                      {client.type} • {client.location}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {client.project}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Completed: {client.year}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: "var(--secondary)" }}
                      >
                        Successful
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
              Join Our Satisfied Clients
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the same level of professionalism and quality that has
              made our clients successful. Let us be your trusted plumbing
              contractor partner.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "1s",
                animationFillMode: "forwards",
              }}
            >
              <Link
                href="/contact"
                className="group relative bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group relative bg-transparent border-2 !border-gray-900 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <span className="relative z-10">View Our Services</span>
                <div className="absolute inset-0  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
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
