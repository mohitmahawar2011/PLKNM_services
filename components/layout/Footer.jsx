/**
 * Footer Component for PLKNM Plumbing Services
 * 
 * Modern footer design with dark green background, 4-column layout,
 * and professional styling matching the Archilux-inspired design.
 * 
 * @author PLKNM Development Team
 * @version 2.0.0
 */

import Link from 'next/link';
import { siteConfig } from '../../lib/seo-config';
import Image from 'next/image';
import logo from '@/public/logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/clients' },
    { name: 'Contact us', href: '/contact' },
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Team', href: '/team' },
    { name: 'News', href: '/news' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 !pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8">
          {/* Company Information - Archilux Style */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Company Logo Icon */}
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src={logo} alt={siteConfig.name} width={48} height={48} />
              </div>
            <div>
              <h3 className="text-xl font-bold !text-white">
                {siteConfig.name}
              </h3>
            </div>
          </div>
          <p className="text-white mb-6 leading-relaxed text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur ccaecat cupidata proident, sunt in culpa officia deserunt mollit.
          </p>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href={siteConfig.social.facebook} className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              <a href={siteConfig.social.youtube} className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className='mt-4 md:mt-0  md:ml-10 lg:ml-10'>
            <h4 className="text-sm font-bold !text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 ">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-blue-500 transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className='mt-4 md:mt-0 md:ml-10 lg:ml-10'>
            <h4 className="text-sm font-bold !text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-blue-500 transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-bold !text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-white">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1235 211 5236</span>
              </div>
              <div className="flex items-center text-white">
                <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>hello@archilux.com</span>
              </div>
              <div className="flex items-start text-white">
                <svg className="w-8 h-10 mr-3 mt-1 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  121 King Street, Melbourne Victoria 3000 Australia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Copyright */}
      <div className="border-t border-gray-600">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-white text-sm my-4">
              Copyright ©{currentYear} PLKNM Plumbing Services All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
