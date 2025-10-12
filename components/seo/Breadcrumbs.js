/**
 * Breadcrumbs Component for PLKNM Plumbing Services
 * 
 * This component provides navigation breadcrumbs that improve both
 * user experience and SEO by showing the page hierarchy.
 * 
 * Features:
 * - Automatic breadcrumb generation based on URL path
 * - Structured data integration
 * - Customizable styling
 * - Accessibility support
 * - Mobile-responsive design
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BreadcrumbSchema } from './StructuredData';
import { siteConfig } from '../../lib/seo-config';

/**
 * Main Breadcrumbs Component
 * @param {Object} props - Component props
 * @param {Array} props.customBreadcrumbs - Custom breadcrumb items
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showHome - Whether to show home link
 * @param {boolean} props.showStructuredData - Whether to include structured data
 * @returns {JSX.Element} Breadcrumbs navigation component
 */
export default function Breadcrumbs({ 
  customBreadcrumbs = null, 
  className = '', 
  showHome = true,
  showStructuredData = true 
}) {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname if custom ones aren't provided
  const breadcrumbs = customBreadcrumbs || generateBreadcrumbs(pathname, showHome);
  
  // Don't show breadcrumbs on home page unless there are custom ones
  if (pathname === '/' && !customBreadcrumbs) {
    return null;
  }

  return (
    <>
      {/* Structured Data for SEO */}
      {showStructuredData && (
        <BreadcrumbSchema 
          breadcrumbs={breadcrumbs.map(item => ({
            name: item.label,
            url: `${siteConfig.url}${item.href}`
          }))} 
        />
      )}
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb navigation"
        className={`breadcrumbs ${className}`}
      >
        <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              
              {index === breadcrumbs.length - 1 ? (
                // Current page - not a link
                <span 
                  className="text-gray-900 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Link to previous pages
                <Link 
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  title={`Go to ${item.label}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Generate breadcrumbs from URL pathname
 * @param {string} pathname - Current page pathname
 * @param {boolean} showHome - Whether to include home link
 * @returns {Array} Array of breadcrumb objects
 */
function generateBreadcrumbs(pathname, showHome = true) {
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  const breadcrumbs = [];
  
  // Add home breadcrumb
  if (showHome) {
    breadcrumbs.push({
      label: 'Home',
      href: '/'
    });
  }
  
  // Generate breadcrumbs for each path segment
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert segment to readable label
    const label = formatSegmentLabel(segment);
    
    breadcrumbs.push({
      label,
      href: currentPath
    });
  });
  
  return breadcrumbs;
}

/**
 * Format URL segment into readable label
 * @param {string} segment - URL segment
 * @returns {string} Formatted label
 */
function formatSegmentLabel(segment) {
  // Handle special cases
  const specialCases = {
    'emergency-plumbing': 'Emergency Plumbing',
    'drain-cleaning': 'Drain Cleaning',
    'water-heater': 'Water Heater Services',
    'pipe-repair': 'Pipe Repair',
    'bathroom-plumbing': 'Bathroom Plumbing',
    'kitchen-plumbing': 'Kitchen Plumbing',
    'leak-detection': 'Leak Detection',
    'commercial-plumbing': 'Commercial Plumbing',
  };
  
  if (specialCases[segment]) {
    return specialCases[segment];
  }
  
  // Default formatting: replace hyphens with spaces and capitalize
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Specialized Breadcrumb Components
 */

// Service Page Breadcrumbs
export function ServiceBreadcrumbs({ serviceName, serviceSlug }) {
  const customBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: serviceName, href: `/services/${serviceSlug}` }
  ];
  
  return <Breadcrumbs customBreadcrumbs={customBreadcrumbs} />;
}

// Location Page Breadcrumbs
export function LocationBreadcrumbs({ locationName, locationSlug }) {
  const customBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/locations' },
    { label: locationName, href: `/locations/${locationSlug}` }
  ];
  
  return <Breadcrumbs customBreadcrumbs={customBreadcrumbs} />;
}

// Blog Post Breadcrumbs
export function BlogBreadcrumbs({ postTitle, postSlug, categoryName = null, categorySlug = null }) {
  const customBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' }
  ];
  
  // Add category if provided
  if (categoryName && categorySlug) {
    customBreadcrumbs.push({
      label: categoryName,
      href: `/blog/category/${categorySlug}`
    });
  }
  
  // Add current post
  customBreadcrumbs.push({
    label: postTitle,
    href: `/blog/${postSlug}`
  });
  
  return <Breadcrumbs customBreadcrumbs={customBreadcrumbs} />;
}
