/**
 * About Us Page for PLKNM Plumbing Services
 * 
 * Showcases company history, mission, vision, and founder story.
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
import { OrganizationSchema } from "../../components/seo/StructuredData";

// About page metadata
export const metadata = {
  title: "About Us - Professional Plumbing Contractors Since 1970 | PLKNM",
  description: `Learn about ${siteConfig.fullName} - Professional plumbing contractors established in the 1970s. Our history, mission, and commitment to excellence in large-scale plumbing projects.`,
  keywords: [
    "about PLKNM plumbing",
    "plumbing contractors history",
    "established 1970",
    "professional plumbing company",
    "plumbing contractor experience",
    "commercial plumbing experts"
  ].join(", "),
};

// Company milestones data
const milestones = [
  {
    year: "1970s",
    title: "Company Founded",
    description: "PLKNM Plumbing Services was established with a vision to provide professional plumbing contractor services for large-scale projects."
  },
  {
    year: "1980s",
    title: "Commercial Expansion",
    description: "Expanded operations to include major commercial projects, establishing partnerships with leading construction companies."
  },
  {
    year: "1990s",
    title: "Hospitality Specialization",
    description: "Developed expertise in hotel and resort plumbing systems, becoming a trusted name in the hospitality industry."
  },
  {
    year: "2000s",
    title: "Technology Integration",
    description: "Adopted modern plumbing technologies and sustainable practices while maintaining our commitment to quality craftsmanship."
  },
  {
    year: "2010s",
    title: "Industry Leadership",
    description: "Recognized as industry leaders in large-scale commercial plumbing projects with numerous successful completions."
  },
  {
    year: "Present",
    title: "Continued Excellence",
    description: "Continuing our legacy of excellence with over 50 years of experience in professional plumbing contractor services."
  }
];

// Core values data
const values = [
  {
    title: "Quality Craftsmanship",
    description: "We maintain the highest standards of workmanship in every project, ensuring long-lasting and reliable plumbing systems.",
    icon: "🔧"
  },
  {
    title: "Professional Integrity",
    description: "Our business is built on trust, transparency, and honest communication with our clients and partners.",
    icon: "🤝"
  },
  {
    title: "Innovation & Expertise",
    description: "We combine decades of experience with modern technologies to deliver cutting-edge plumbing solutions.",
    icon: "💡"
  },
  {
    title: "Client Satisfaction",
    description: "Our success is measured by the satisfaction of our clients and the long-term performance of our installations.",
    icon: "⭐"
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <OrganizationSchema 
        additionalData={{
          foundingDate: "1970",
          description: "Professional plumbing contractors specializing in large-scale commercial and residential projects since the 1970s"
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ backgroundColor: 'var(--background)' }}>
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                About {siteConfig.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16" style={{ backgroundColor: 'var(--background-alt)' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                  Our Legacy of Excellence
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {siteConfig.fullName} has been a cornerstone of the plumbing contractor industry 
                    since the 1970s. What began as a vision to provide professional, large-scale 
                    plumbing solutions has evolved into a legacy of excellence spanning over five decades.
                  </p>
                  <p>
                    We are not small service providers but full-scale contractors specializing in 
                    major commercial and residential developments. Our expertise encompasses hotels, 
                    shopping malls, luxury resorts, bungalows, cinema complexes, and commercial buildings.
                  </p>
                  <p>
                    Throughout our journey, we have maintained our commitment to quality craftsmanship, 
                    professional integrity, and client satisfaction. Our experienced team brings 
                    unmatched expertise to every project, ensuring reliable and long-lasting plumbing systems.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: 'var(--primary)' }}>
                    <span className="text-white text-3xl font-bold">P</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                    Founded in the 1970s
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>50+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: 'var(--secondary)' }}>100+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'var(--primary-light)' }}>
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional plumbing contractor services for large-scale commercial and 
                  residential projects, maintaining the highest standards of quality, professionalism, 
                  and reliability that have defined our company for over 50 years.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'var(--secondary-light)' }}>
                  <span className="text-2xl">🔮</span>
                </div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  To continue our legacy as the leading plumbing contractor for major developments, 
                  setting industry standards for excellence while embracing innovation and sustainable 
                  practices for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16" style={{ backgroundColor: 'var(--background-alt)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Our Journey Through the Decades
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A timeline of growth, innovation, and excellence in plumbing contractor services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-2 rounded-full text-white font-semibold" 
                          style={{ backgroundColor: 'var(--primary)' }}>
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: 'var(--foreground)' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: 'var(--background-alt)' }}>
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-white" style={{ backgroundColor: 'var(--primary)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Experience
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the many satisfied clients who have trusted PLKNM with their large-scale 
              plumbing projects. Experience the difference that 50+ years of expertise makes.
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
