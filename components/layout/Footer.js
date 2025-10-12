/**
 * Footer Component for PLKNM Plumbing Services
 * 
 * Classic-style footer with company information, quick links, and contact details.
 * Features professional styling consistent with the overall design theme.
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import Link from 'next/link';
import { siteConfig } from '../../lib/seo-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Hotel Plumbing',
    'Mall Infrastructure',
    'Resort Plumbing',
    'Commercial Buildings',
    'Cinema Complexes',
    'Showroom Plumbing',
  ];

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {siteConfig.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  Professional Contractors Since 1970
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {siteConfig.fullName} has been providing professional plumbing contractor services 
              since the 1970s. We specialize in large-scale projects for hotels, malls, resorts, 
              and commercial buildings with a legacy of excellence and reliability.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {siteConfig.contact.phone}
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {siteConfig.contact.email}
              </div>
              <div className="flex items-start text-gray-300">
                <svg className="w-5 h-5 mr-3 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zipCode}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/certifications"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Specializations</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  • {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {siteConfig.fullName}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Established in the 1970s
              </span>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-secondary rounded-full"></span>
                <span className="text-gray-400 text-sm">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
