/**
 * Hero Slider Component for PLKNM Plumbing Services
 * 
 * Classic-style hero banner slider showcasing large-scale plumbing projects.
 * Features smooth transitions and professional imagery placeholders.
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Large-Scale Hotel Plumbing Projects",
      subtitle: "Professional Infrastructure Solutions",
      description: "Comprehensive plumbing systems for luxury hotels and hospitality complexes with over 50 years of expertise.",
      image: "/images/hero/hotel-plumbing.jpg", // Placeholder
      alt: "Hotel plumbing infrastructure project"
    },
    {
      id: 2,
      title: "Commercial Mall & Retail Plumbing",
      subtitle: "Complex Commercial Systems",
      description: "Advanced plumbing solutions for shopping malls, retail complexes, and commercial buildings across the region.",
      image: "/images/hero/mall-plumbing.jpg", // Placeholder
      alt: "Commercial mall plumbing systems"
    },
    {
      id: 3,
      title: "Resort & Bungalow Plumbing",
      subtitle: "Luxury Residential Projects",
      description: "Premium plumbing installations for resorts, luxury bungalows, and high-end residential developments.",
      image: "/images/hero/resort-plumbing.jpg", // Placeholder
      alt: "Resort and bungalow plumbing project"
    },
    {
      id: 4,
      title: "Cinema & Entertainment Complexes",
      subtitle: "Specialized Entertainment Venues",
      description: "Custom plumbing solutions for cinemas, entertainment complexes, and showrooms with precision engineering.",
      image: "/images/hero/cinema-plumbing.jpg", // Placeholder
      alt: "Cinema complex plumbing infrastructure"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background with Gradient Fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary">
            {/* Image placeholder - will be enabled when actual images are available */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="mb-4">
                  <span className="inline-block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">
                    {slide.subtitle}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors duration-200 text-center"
                  >
                    View Our Services
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md font-semibold text-lg transition-colors duration-200 text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Company Badge */}
      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 z-20">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">50+</div>
          <div className="text-sm text-gray-700">Years of Excellence</div>
        </div>
      </div>
    </div>
  );
}
