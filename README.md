# PLKNM Plumbing Services Website

A professional, SEO-optimized website for **Panna Lal Krishna Nand Mahawar Plumbing Services** built with Next.js 15, featuring comprehensive SEO optimization, local business schema markup, and modern web development best practices.

## 🚀 Features

### SEO Optimization
- **Comprehensive Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data**: Local business, organization, service, and FAQ schemas
- **Dynamic Sitemap**: Auto-generated XML sitemap with proper priorities
- **Robots.txt**: Optimized for search engine crawling
- **Canonical URLs**: Proper URL canonicalization
- **Local SEO**: Geographic targeting and local business optimization

### Performance & Accessibility
- **Next.js 15**: Latest features and optimizations
- **Image Optimization**: WebP/AVIF support with responsive images
- **Font Optimization**: Google Fonts with display swap
- **Accessibility**: WCAG compliant with skip links and proper ARIA labels
- **Mobile-First**: Responsive design with Tailwind CSS

### Technical Features
- **TypeScript Ready**: Easy migration to TypeScript
- **Component Architecture**: Reusable SEO components
- **Environment Configuration**: Secure environment variable management
- **PWA Ready**: Web app manifest and service worker support
- **Analytics Ready**: Google Analytics and Tag Manager integration

## 📁 Project Structure

```
plknm_services/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout with SEO optimization
│   ├── page.js                   # Homepage with local business schema
│   ├── robots.txt/route.js       # Dynamic robots.txt generator
│   └── sitemap.xml/route.js      # Dynamic sitemap generator
├── components/
│   └── seo/                      # SEO-specific components
│       ├── StructuredData.js     # JSON-LD schema components
│       ├── Breadcrumbs.js        # SEO-friendly breadcrumbs
│       └── MetaTags.js           # Meta tag management
├── lib/                          # Utility libraries
│   ├── seo-config.js            # SEO configuration and metadata
│   └── seo-utils.js             # SEO utility functions
├── public/                       # Static assets
│   ├── site.webmanifest         # PWA manifest
│   ├── browserconfig.xml        # Microsoft browser configuration
│   └── [favicon files]          # Favicon and touch icons
├── .env.example                  # Environment variables template
└── next.config.mjs              # Next.js configuration with SEO optimizations
```

## 🛠️ Setup Instructions

### 1. Environment Configuration

Copy the environment template and configure your settings:

```bash
cp .env.example .env.local
```

Update `.env.local` with your actual business information:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="PLKNM Plumbing Services"

# Contact Information
NEXT_PUBLIC_PHONE="+1-XXX-XXX-XXXX"
NEXT_PUBLIC_EMAIL="info@your-domain.com"

# Business Address
NEXT_PUBLIC_STREET_ADDRESS="Your Street Address"
NEXT_PUBLIC_CITY="Your City"
NEXT_PUBLIC_STATE="Your State"
NEXT_PUBLIC_ZIP_CODE="12345"

# Geographic Coordinates (for local SEO)
NEXT_PUBLIC_LATITUDE="40.7128"
NEXT_PUBLIC_LONGITUDE="-74.0060"

# SEO and Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="GA_TRACKING_ID"
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-verification-code"
```

### 2. Business Information Setup

Update the business information in `lib/seo-config.js`:

1. **Contact Details**: Phone, email, address
2. **Service Areas**: Cities and regions you serve
3. **Business Hours**: Operating hours for each day
4. **Social Media**: Links to your social profiles
5. **Geographic Coordinates**: For local SEO optimization

### 3. Required Images

Create and add the following images to the `public/` directory:

#### Favicon and Icons
- `favicon.ico` (32x32)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `mstile-150x150.png`
- `safari-pinned-tab.svg`

#### SEO Images
- `images/og-image.jpg` (1200x630) - Open Graph image
- `images/twitter-image.jpg` (1200x600) - Twitter Card image
- `images/homepage-og.jpg` (1200x630) - Homepage specific image
- `images/logo.png` - Company logo

#### Service Icons (optional)
- `icons/emergency-96x96.png`
- `icons/quote-96x96.png`
- `icons/contact-96x96.png`

### 4. Google Services Setup

#### Google Analytics
1. Create a Google Analytics 4 property
2. Add your tracking ID to `.env.local`
3. Update the tracking code in `app/layout.js`

#### Google Search Console
1. Verify your website ownership
2. Add verification code to `.env.local`
3. Submit your sitemap: `https://your-domain.com/sitemap.xml`

#### Google My Business
1. Create or claim your business listing
2. Ensure NAP (Name, Address, Phone) consistency
3. Add your website URL

### 5. Development

Install dependencies and start development:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📊 SEO Checklist

### ✅ Technical SEO
- [x] Meta titles and descriptions
- [x] Structured data (JSON-LD)
- [x] XML sitemap
- [x] Robots.txt
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Favicon and touch icons
- [x] Mobile-responsive design
- [x] Page speed optimization

### ✅ Local SEO
- [x] Local business schema
- [x] NAP consistency
- [x] Geographic targeting
- [x] Service area optimization
- [x] Business hours markup
- [x] Contact information schema

### ✅ Content SEO
- [x] Proper heading hierarchy (H1-H6)
- [x] Keyword optimization
- [x] Internal linking structure
- [x] Image alt attributes
- [x] FAQ schema markup
- [x] Service page optimization

### 🔄 Manual Setup Required
- [ ] Google Analytics configuration
- [ ] Google Search Console verification
- [ ] Google My Business optimization
- [ ] Social media profile setup
- [ ] Business directory submissions
- [ ] Review platform optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The website is compatible with:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Traditional hosting with Node.js support

## 📈 SEO Monitoring

### Tools to Use
- **Google Search Console**: Monitor search performance
- **Google Analytics**: Track website traffic and user behavior
- **Google PageSpeed Insights**: Monitor page speed
- **GTmetrix**: Performance monitoring
- **SEMrush/Ahrefs**: Keyword tracking and competitor analysis

### Key Metrics to Track
- Organic search traffic
- Local search rankings
- Page load speed
- Core Web Vitals
- Click-through rates
- Conversion rates

## 🔧 Customization

### Adding New Pages
1. Create page component in `app/` directory
2. Add SEO metadata using `generatePageMetadata()`
3. Include structured data if applicable
4. Update sitemap in `app/sitemap.xml/route.js`

### Adding New Services
1. Create service page in `app/services/[service]/page.js`
2. Add service to sitemap configuration
3. Update homepage service highlights
4. Add service-specific schema markup

### Modifying SEO Settings
- **Global settings**: Update `lib/seo-config.js`
- **Page-specific**: Use metadata export in page components
- **Structured data**: Modify components in `components/seo/`

## 📞 Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is proprietary software developed for PLKNM Plumbing Services.

---

**Built with ❤️ for PLKNM Plumbing Services**
