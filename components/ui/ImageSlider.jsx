/**
 * ImageSlider Component
 *
 * A responsive image slider for service cards with navigation controls
 * and smooth transitions between images.
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ImageSlider = ({ images, alt, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Start with auto-play disabled
  const intervalRef = useRef(null);

  // Auto-play functionality with smooth transitions - only when hovering
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds for better hover experience

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    // Stop auto-play when user manually navigates
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    // Stop auto-play when user manually navigates
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={() => {
        // Start auto-play when hovering
        if (images.length > 1) {
          setIsAutoPlaying(true);
        }
      }}
      onMouseLeave={() => {
        // Stop auto-play when not hovering
        setIsAutoPlaying(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }}
    >
      {/* Main Image Container with smooth transitions */}
      <div className="relative h-64 w-full">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Image
                src={image}
                alt={`${alt} - Image ${index + 1}`}
                fill
                className="object-cover"
                style={{
                  opacity: 0.9,
                }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5"
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
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
