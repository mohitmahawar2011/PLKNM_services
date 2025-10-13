/**
 * Services Page for PLKNM Plumbing Services
 *
 * Showcases major plumbing contractor services for large-scale projects.
 * Features classic styling and comprehensive service descriptions.
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import Link from "next/link";
import { siteConfig } from "../../lib/seo-config";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { ServiceSchema } from "../../components/seo/StructuredData";
import Image from "next/image";
import ImageSlider from "../../components/ui/ImageSlider";
import pipe_lines from "@/public/images/service/copper_pipeline.jpg";
import golden_tulip from "@/public/images/service/golden_tulip.webp";
import washrooms from "@/public/images/service/washroom.webp";
import copper_pipeline from "@/public/images/service/copper_pipeline.jpg";
import dark_blueprint from "@/public/images/service/dark_blueprint_maps.jpg";
import light_blueprint from "@/public/images/service/light_blueprint_maps.jpg";
import pipe_line from "@/public/images/service/pipe_line.jpeg";
import hotel_plumbing from "@/public/images/hero/hotel-plumbing.jpg";
import cinema_plumbing from "@/public/images/hero/cinema-plumbing.jpg";
import mall_plumbing from "@/public/images/hero/mall-plumbing.jpg";
import resort_plumbing from "@/public/images/hero/resort-plumbing.jpg";

// Services page metadata
export const metadata = {
  title: "Professional Plumbing Contractor Services | PLKNM",
  description: `Comprehensive plumbing contractor services by ${siteConfig.fullName}. Specializing in hotels, malls, resorts, bungalows, cinemas, and commercial buildings.`,
  keywords: [
    "plumbing contractor services",
    "hotel plumbing",
    "mall plumbing systems",
    "resort plumbing",
    "commercial plumbing",
    "cinema plumbing",
    "showroom plumbing",
    "large scale plumbing",
  ].join(", "),
};

// Detailed services data
const services = [
  {
    id: 1,
    title: "Hotel Plumbing Systems",
    description:
      "Complete plumbing infrastructure solutions for luxury hotels and hospitality complexes. We design and install comprehensive water supply, drainage, and waste management systems that meet the demanding requirements of the hospitality industry.",
    features: [
      "Guest room plumbing installations",
      "Commercial kitchen plumbing",
      "Laundry facility systems",
      "Swimming pool plumbing",
      "Hot water distribution systems",
      "Waste management solutions",
    ],
    icon: "🏨",
    images: [hotel_plumbing, golden_tulip, washrooms, copper_pipeline],
  },
  {
    id: 2,
    title: "Shopping Mall Infrastructure",
    description:
      "Advanced plumbing solutions for shopping malls and retail complexes. Our expertise covers everything from food court plumbing to restroom facilities and maintenance access systems throughout large commercial spaces.",
    features: [
      "Food court plumbing systems",
      "Public restroom facilities",
      "Retail space plumbing",
      "Maintenance access systems",
      "Fire suppression integration",
      "Drainage and waste management",
    ],
    icon: "🏬",
    images: [mall_plumbing, washrooms, dark_blueprint, pipe_line],
  },
  {
    id: 3,
    title: "Resort & Luxury Bungalow Plumbing",
    description:
      "Premium plumbing installations for resorts and luxury residential developments. We specialize in high-end fixtures, spa systems, and custom water features that enhance the luxury experience.",
    features: [
      "Luxury bathroom installations",
      "Spa and wellness facilities",
      "Custom water features",
      "Outdoor plumbing systems",
      "Pool and jacuzzi plumbing",
      "Irrigation systems",
    ],
    icon: "🏖️",
    images: [resort_plumbing, golden_tulip, washrooms, light_blueprint],
  },
  {
    id: 4,
    title: "Cinema & Entertainment Complexes",
    description:
      "Specialized plumbing systems for cinemas, theaters, and entertainment venues. Our solutions include concession area plumbing, restroom facilities, and specialized drainage systems for large venues.",
    features: [
      "Concession area plumbing",
      "Theater restroom facilities",
      "Specialized drainage systems",
      "Maintenance access planning",
      "Emergency plumbing systems",
      "HVAC integration support",
    ],
    icon: "🎬",
    images: [cinema_plumbing, washrooms, copper_pipeline, dark_blueprint],
  },
  {
    id: 5,
    title: "Commercial Building Infrastructure",
    description:
      "Comprehensive plumbing systems for office buildings and commercial spaces. We provide complete infrastructure solutions including water supply, waste management, and specialized systems for modern commercial requirements.",
    features: [
      "Office building plumbing",
      "Commercial restroom facilities",
      "Water supply systems",
      "Waste management solutions",
      "Emergency plumbing systems",
      "Maintenance planning",
    ],
    icon: "🏢",
    images: [golden_tulip, washrooms, pipe_line, light_blueprint],
  },
  {
    id: 6,
    title: "Showroom & Retail Plumbing",
    description:
      "Custom plumbing solutions for showrooms and retail display spaces. Our services include specialized installations that support retail operations while maintaining aesthetic appeal and functionality.",
    features: [
      "Retail space plumbing",
      "Display area utilities",
      "Customer restroom facilities",
      "Staff facility plumbing",
      "Maintenance access systems",
      "Utility integration",
    ],
    icon: "🏪",
    images: [washrooms, golden_tulip, copper_pipeline, pipe_line],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data */}
      <ServiceSchema
        service={{
          name: "Professional Plumbing Contractor Services",
          description:
            "Comprehensive plumbing contractor services for large-scale commercial and residential projects",
          serviceType: "Plumbing Contractor",
          areaServed: siteConfig.serviceAreas,
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ backgroundColor: "var(--background)" }}>
        {/* Page Header */}
        <section className="py-10 relative bg-cover bg-center bg-no-repeat">
          <Image
            src={washrooms}
            alt="Various pipes background"
            fill
            className="object-cover"
            priority
            style={{
              opacity: 0.8,
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-opacity-70"></div>
          <div className="absolute inset-0 opacity-90"></div>

          <div
            className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center"
            style={{ minHeight: "400px" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark">
              Our Professional Services
            </h1>
            <p className="text-xl text-dark font-bold max-w-3xl mx-auto leading-relaxed">
              With over 50 years of experience, {siteConfig.name} provides
              comprehensive plumbing contractor services for large-scale
              commercial and residential projects. We are not small service
              providers but full-scale contractors specializing in major
              developments.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section
          className="py-16"
          style={{ backgroundColor: "var(--background-alt)" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map(service => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Service Image Slider */}
                  <ImageSlider
                    images={service.images}
                    alt={service.title}
                    className="h-64"
                  />

                  {/* Service Content */}
                  <div className="p-8">
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "var(--foreground)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h3
                        className="text-lg font-semibold mb-4 flex items-center"
                        style={{ color: "var(--foreground)" }}
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          style={{ color: "var(--primary)" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start group">
                            <div
                              className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 transition-all duration-200 group-hover:scale-125"
                              style={{ backgroundColor: "var(--primary)" }}
                            ></div>
                            <span className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Button */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-md font-semibold text-white transition-all duration-200 bg-primary hover:bg-primary-dark hover:shadow-lg hover:scale-105 active:scale-95"
                    >
                      Get Quote for This Service
                      <svg
                        className="w-4 h-4 ml-2"
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
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your large-scale plumbing project
              requirements. Our experienced team is ready to provide
              professional contractor services.
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
                <span className="relative z-10">Get Project Quote</span>
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
                href="/clients"
                className="group relative bg-transparent border-2 !border-gray-900 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <span className="relative z-10">View Our Work</span>
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
