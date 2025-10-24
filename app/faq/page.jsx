/**
 * FAQ Page for PLKNM Plumbing Services
 *
 * Frequently Asked Questions page with manual show/hide functionality.
 * Features interactive accordion-style FAQ items with smooth animations.
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

"use client";

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { siteConfig } from "../../lib/seo-config";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What plumbing services do you offer?",
    answer:
      "We offer comprehensive plumbing services including emergency repairs, drain cleaning, pipe installation and repair, water heater services, bathroom and kitchen plumbing, commercial plumbing, and preventive maintenance. Our team handles everything from minor leaks to major installations.",
  },
  {
    id: 2,
    question: "Do you provide emergency plumbing services?",
    answer:
      "Yes, we offer 24/7 emergency plumbing services for urgent situations like burst pipes, major leaks, sewer backups, and other plumbing emergencies. Our emergency team is available around the clock to address critical plumbing issues that require immediate attention.",
  },
  {
    id: 3,
    question: "How much do your services cost?",
    answer:
      "Our pricing varies based on the specific service required, materials needed, and project complexity. We provide free estimates for all projects and transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your specific needs.",
  },
  {
    id: 4,
    question: "Are your plumbers licensed and insured?",
    answer:
      "Yes, all our plumbers are fully licensed, bonded, and insured. We maintain proper certifications and follow all local building codes and regulations. This ensures quality workmanship and protects both our team and our customers.",
  },
  {
    id: 5,
    question: "How long has PLKNM been in business?",
    answer:
      "PLKNM has been providing professional plumbing services since 1970, making us one of the most experienced plumbing contractors in the area. Our decades of experience have given us the expertise to handle any plumbing challenge.",
  },
  {
    id: 6,
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we stand behind our work with comprehensive warranties on all services and installations. The specific warranty terms vary by service type, but we're committed to ensuring your complete satisfaction with our workmanship and materials.",
  },
  {
    id: 7,
    question: "What areas do you serve?",
    answer:
      "We serve the greater metropolitan area and surrounding regions. Our service area includes residential, commercial, and industrial properties. Contact us to confirm if we service your specific location, as we may be able to accommodate requests outside our standard service area.",
  },
  {
    id: 8,
    question: "How can I schedule a service appointment?",
    answer:
      "You can schedule an appointment by calling our main number, using our online contact form, or visiting our contact page. We offer flexible scheduling including same-day service for emergencies and convenient appointment times for routine maintenance.",
  },
  {
    id: 9,
    question: "Do you work on both residential and commercial properties?",
    answer:
      "Yes, we provide plumbing services for both residential and commercial properties. Our team has experience with single-family homes, apartments, office buildings, restaurants, hotels, and industrial facilities. We adapt our approach based on the specific needs of each property type.",
  },
  {
    id: 10,
    question: "What should I do in case of a plumbing emergency?",
    answer:
      "In case of a plumbing emergency, first turn off the main water supply to prevent further damage. Then contact us immediately at our emergency number. Avoid using electrical appliances near water leaks and try to contain the water if possible. Our emergency team will respond quickly to assess and resolve the situation.",
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = id => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-xl md:text-2xl mb-8"
            style={{ color: "var(--gray-600)" }}
          >
            Find answers to common questions about our plumbing services
          </p>
          <div
            className="flex items-center justify-center space-x-2"
            style={{ color: "var(--gray-500)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Professional plumbing solutions since 1970</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--background-alt)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                    opacity: 0,
                    transform: "translateY(20px)",
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-gray-50 transition-all duration-300 focus:outline-none group-hover:shadow-md"
                    aria-expanded={openItems.has(item.id)}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {item.id}
                      </div>
                      <p className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                        {item.question}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center transition-all duration-300 ${
                          openItems.has(item.id)
                            ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                            : ""
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            openItems.has(item.id)
                              ? "rotate-180 text-white"
                              : "text-blue-600"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openItems.has(item.id)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-200 pt-6">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                          <p className="text-gray-700 leading-relaxed text-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help with all your plumbing needs
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-up"
            style={{
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}
          >
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="group relative bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
            >
              <span className="relative z-10">
                Call {siteConfig.contact.phone}
              </span>
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <a
              href="/contact"
              className="group relative bg-transparent border-2 !border-gray-900 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
            >
              <span className="relative z-10">Contact Us</span>
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
