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
import Testimonials from "../components/ui/Testimonials";
import Statistics from "../components/ui/Statistics";
import RecentWork from "../components/ui/RecentWork";
import Image from "next/image";
import blueprint from "@/public/images/hero/map.png";

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
    "professional contractors",
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
        alt: "PLKNM Plumbing Services - Professional Plumbing Contractors",
      },
    ],
  },
};

// FAQ data for structured data
const faqData = [
  {
    question: "What types of large-scale projects do you handle?",
    answer:
      "We specialize in comprehensive plumbing systems for hotels, malls, resorts, bungalows, cinemas, commercial buildings, and showrooms.",
  },
  {
    question: "How long has PLKNM been in business?",
    answer:
      "PLKNM Plumbing Services has been providing professional plumbing contractor services since the 1970s, with over 50 years of experience.",
  },
  {
    question: "Do you work on both commercial and residential projects?",
    answer:
      "Yes, we handle large-scale commercial projects as well as luxury residential developments including resorts and bungalows.",
  },
  {
    question: "Are you licensed contractors?",
    answer:
      "Absolutely! We are fully licensed, bonded, and insured professional plumbing contractors with decades of proven expertise.",
  },
];

// Service highlights data for large-scale projects
const services = [
  {
    name: "Hotel Plumbing Systems",
    description:
      "Complete plumbing infrastructure for luxury hotels and hospitality complexes",
    icon: "🏨",
    link: "/services",
  },
  {
    name: "Commercial Mall Plumbing",
    description:
      "Advanced plumbing solutions for shopping malls and retail complexes",
    icon: "🏬",
    link: "/services",
  },
  {
    name: "Resort & Bungalow Plumbing",
    description:
      "Premium plumbing installations for luxury resorts and residential developments",
    icon: "🏖️",
    link: "/services",
  },
  {
    name: "Cinema & Entertainment Complexes",
    description:
      "Specialized plumbing systems for cinemas, showrooms, and entertainment venues",
    icon: "🎬",
    link: "/services",
  },
  {
    name: "Commercial Building Infrastructure",
    description:
      "Comprehensive plumbing systems for office buildings and commercial spaces",
    icon: "🏢",
    link: "/services",
  },
  {
    name: "Showroom Plumbing",
    description:
      "Custom plumbing solutions for showrooms and retail display spaces",
    icon: "🏪",
    link: "/services",
  },
];

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <ServiceSchema
        service={{
          name: "Professional Plumbing Contractors",
          description:
            "Large-scale plumbing contractor services for hotels, malls, resorts, and commercial buildings since 1970",
          serviceType: "Plumbing Contractor",
          areaServed: siteConfig.serviceAreas,
        }}
      />
      <FAQSchema faqs={faqData} />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div
        className="min-h-screen"
        style={{ backgroundColor: "var(--background)" }}
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
                {siteConfig.fullName} has been a trusted name in large-scale
                plumbing contractor services since the 1970s. We specialize in
                comprehensive plumbing solutions for hotels, malls, resorts,
                bungalows, cinemas, and commercial buildings.
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
                  className="bg-transparent border-2 border-primary text-primary hover:text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <Statistics />

        {/* Our Specializations Section */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ backgroundColor: "var(--background-alt)" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div
                className="inline-block px-4 py-2 bg-teal-100 text-teal-600 text-sm font-semibold rounded-full mb-4 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                Our Expertise
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up"
                style={{
                  color: "var(--foreground)",
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Specialized Plumbing Solutions
              </h2>
              <p
                className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                We deliver comprehensive plumbing solutions tailored to your
                specific needs. From luxury resorts to commercial complexes, our
                expertise ensures flawless execution.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 opacity-0 animate-fade-in-up hover:-translate-y-2"
                  style={{
                    animationDelay: `${0.8 + index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <div className="text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-teal-600 font-semibold group-hover:text-teal-700 transition-colors duration-300"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-teal-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className="absolute bottom-4 left-4 w-6 h-6 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className="text-center mt-16 opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "1.4s",
                animationFillMode: "forwards",
              }}
            >
              <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">
                    Available 24/7
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <span className="text-sm font-medium text-gray-600">
                    Emergency Service
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <span className="text-sm font-medium text-gray-600">
                    Expert Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Recent Work Section */}
        <RecentWork />

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Why Choose {siteConfig.name}?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                With over 50 years of experience, we bring unmatched expertise
                to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--primary-light)" }}
                >
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  Large-Scale Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in complex commercial projects including hotels,
                  malls, and entertainment complexes with comprehensive
                  infrastructure solutions.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--secondary-light)" }}
                >
                  <span className="text-3xl">⭐</span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  50+ Years Legacy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Established in the 1970s, we have built a reputation for
                  excellence and reliability in the plumbing contractor
                  industry.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  Licensed & Certified
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fully licensed, bonded, and insured professional contractors
                  with proven track record in successful project completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Start Project Section */}
        <section className="py-24 text-white relative overflow-hidden">
          {/* style={{ backgroundColor: '#1A4A3F' }} */}
          {/* Blueprint Background Image */}
          <div className="absolute inset-0 opacity-80 overflow-hidden">
            <Image
              src={blueprint}
              alt="Blueprint background"
              className="absolute inset-0 w-full h-full object-cover object-center transform scale-150"
              style={{ minHeight: "100%", minWidth: "100%" }}
              fill
            />
          </div>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-white text-md font-medium mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
              Contact us today to discuss your large-scale plumbing project. Our
              experienced team is ready to provide professional contractor
              services.
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <span>Get Project Quote</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
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
