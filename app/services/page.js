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
    "large scale plumbing"
  ].join(", "),
};

// Detailed services data
const services = [
  {
    id: 1,
    title: "Hotel Plumbing Systems",
    description: "Complete plumbing infrastructure solutions for luxury hotels and hospitality complexes. We design and install comprehensive water supply, drainage, and waste management systems that meet the demanding requirements of the hospitality industry.",
    features: [
      "Guest room plumbing installations",
      "Commercial kitchen plumbing",
      "Laundry facility systems",
      "Swimming pool plumbing",
      "Hot water distribution systems",
      "Waste management solutions"
    ],
    icon: "🏨",
    image: "/images/services/hotel-plumbing.jpg"
  },
  {
    id: 2,
    title: "Shopping Mall Infrastructure",
    description: "Advanced plumbing solutions for shopping malls and retail complexes. Our expertise covers everything from food court plumbing to restroom facilities and maintenance access systems throughout large commercial spaces.",
    features: [
      "Food court plumbing systems",
      "Public restroom facilities",
      "Retail space plumbing",
      "Maintenance access systems",
      "Fire suppression integration",
      "Drainage and waste management"
    ],
    icon: "🏬",
    image: "/images/services/mall-plumbing.jpg"
  },
  {
    id: 3,
    title: "Resort & Luxury Bungalow Plumbing",
    description: "Premium plumbing installations for resorts and luxury residential developments. We specialize in high-end fixtures, spa systems, and custom water features that enhance the luxury experience.",
    features: [
      "Luxury bathroom installations",
      "Spa and wellness facilities",
      "Custom water features",
      "Outdoor plumbing systems",
      "Pool and jacuzzi plumbing",
      "Irrigation systems"
    ],
    icon: "🏖️",
    image: "/images/services/resort-plumbing.jpg"
  },
  {
    id: 4,
    title: "Cinema & Entertainment Complexes",
    description: "Specialized plumbing systems for cinemas, theaters, and entertainment venues. Our solutions include concession area plumbing, restroom facilities, and specialized drainage systems for large venues.",
    features: [
      "Concession area plumbing",
      "Theater restroom facilities",
      "Specialized drainage systems",
      "Maintenance access planning",
      "Emergency plumbing systems",
      "HVAC integration support"
    ],
    icon: "🎬",
    image: "/images/services/cinema-plumbing.jpg"
  },
  {
    id: 5,
    title: "Commercial Building Infrastructure",
    description: "Comprehensive plumbing systems for office buildings and commercial spaces. We provide complete infrastructure solutions including water supply, waste management, and specialized systems for modern commercial requirements.",
    features: [
      "Office building plumbing",
      "Commercial restroom facilities",
      "Water supply systems",
      "Waste management solutions",
      "Emergency plumbing systems",
      "Maintenance planning"
    ],
    icon: "🏢",
    image: "/images/services/commercial-plumbing.jpg"
  },
  {
    id: 6,
    title: "Showroom & Retail Plumbing",
    description: "Custom plumbing solutions for showrooms and retail display spaces. Our services include specialized installations that support retail operations while maintaining aesthetic appeal and functionality.",
    features: [
      "Retail space plumbing",
      "Display area utilities",
      "Customer restroom facilities",
      "Staff facility plumbing",
      "Maintenance access systems",
      "Utility integration"
    ],
    icon: "🏪",
    image: "/images/services/showroom-plumbing.jpg"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data */}
      <ServiceSchema 
        service={{
          name: "Professional Plumbing Contractor Services",
          description: "Comprehensive plumbing contractor services for large-scale commercial and residential projects",
          serviceType: "Plumbing Contractor",
          areaServed: siteConfig.serviceAreas
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ backgroundColor: 'var(--background)' }}>
        {/* Page Header */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 50 years of experience, {siteConfig.name} provides comprehensive plumbing 
              contractor services for large-scale commercial and residential projects. We are not 
              small service providers but full-scale contractors specializing in major developments.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16" style={{ backgroundColor: 'var(--background-alt)' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Service Image */}
                  <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                        Key Features:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="mr-2 mt-1" style={{ color: 'var(--secondary)' }}>•</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Contact Button */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-md font-semibold text-white transition-colors duration-200 bg-primary hover:bg-primary-dark"
                    >
                      Get Quote for This Service
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your large-scale plumbing project requirements. 
              Our experienced team is ready to provide professional contractor services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-md font-semibold text-white transition-colors duration-200"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Get Project Quote
              </Link>
              <Link
                href="/clients"
                className="px-8 py-3 rounded-md font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
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
