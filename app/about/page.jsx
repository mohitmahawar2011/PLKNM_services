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
import maps from "@/public/images/aboutus/maps.jpg";
import Pipes_various from "@/public/images/aboutus/Pipes_various.jpg";

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
      <div className="relative" style={{ backgroundColor: 'var(--background)' }}>

        <div className=" z-10">
        {/* Company Story */}
        <section className="py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--background-alt)' }}>
          {/* Background Image */}
          <div className="absolute inset-0 opacity-15">
            <Image
              src={Pipes_various}
              alt="Various pipes background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 pt-10 !pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                About {siteConfig.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
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
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:scale-105"
                style={{
                  backgroundImage: 'url(' + maps.src + ')',
                  backgroundSize: '120%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div 
                  className="absolute inset-0 transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(' + maps.src + ')',
                    backgroundSize: '120%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1
                  }}
                ></div>
                <div className="text-center relative z-10 m-15">
                <h3 className="text-2xl font-bold mb-4 text-dark" style={{ color: 'var(--text-dark)' }}>
                    PLKNM
                  </h3>
                  
                  <h3 className="text-2xl font-bold mb-4 text-dark" style={{ color: 'var(--text-dark)' }}>
                    Founded in the 1970s
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center mt-15">
                    <div>
                      <div className="text-3xl font-bold" style={{ color: 'var(--text-dark)' }}>50+</div>
                      <div className="text-sm text-gray-600 font-bold">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: 'var(--text-dark)' }}>100+</div>
                      <div className="text-sm text-gray-600 font-bold">Projects Completed</div>
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
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 opacity-0 animate-fade-in-up hover:-translate-y-2"
                  style={{
                    animationDelay: `${0.8 + (index * 0.1)}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Year Badge */}
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg mx-auto">
                      <div className="text-sm font-bold text-white group-hover:scale-110 transition-transform duration-300">
                        {milestone.year}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300 text-center">
                      {milestone.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 text-center">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-teal-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
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
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 opacity-0 animate-fade-in-up hover:-translate-y-2"
                  style={{
                    animationDelay: `${1.2 + (index * 0.1)}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-teal-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.2s' }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-gray-900 relative overflow-hidden" style={{ backgroundColor: 'var(--background-alt)' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-400/10 to-transparent"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-300/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10" style={{ backgroundColor: 'var(--background-alt)' }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Partner with Experience
              </h2>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Join the many satisfied clients who have trusted PLKNM with their large-scale 
                plumbing projects. Experience the difference that 50+ years of expertise makes.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg opacity-0 animate-fade-in-up hover:bg-white hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">50+</div>
                  <div className="text-sm md:text-base text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg opacity-0 animate-fade-in-up hover:bg-white hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">100+</div>
                  <div className="text-sm md:text-base text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg opacity-0 animate-fade-in-up hover:bg-white hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">100%</div>
                  <div className="text-sm md:text-base text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <Link
                  href="/contact"
                  className="group relative bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="group relative bg-transparent border-2 !border-gray-900 text-gray-900 !hover:bg-gray-900 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
                >
                  <span className="relative z-10">View Our Services</span>
                  <div className="absolute inset-0 bg-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
