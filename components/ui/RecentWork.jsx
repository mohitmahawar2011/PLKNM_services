/**
 * Recent Work Component for PLKNM Plumbing Services
 *
 * Project showcase section with light beige background,
 * displaying recent plumbing projects with Swiper slider and hover effects.
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RecentWork() {
  const projects = [
    {
      id: 1,
      category: "Hotel - Plumbing Systems",
      title: "Luxury Hotel Plumbing",
      image: "/images/hero/hotel-plumbing.jpg",
      description:
        "Complete plumbing infrastructure for 5-star luxury hotel with advanced water management systems.",
    },
    {
      id: 2,
      category: "Mall - Infrastructure",
      title: "Shopping Mall Plumbing",
      image: "/images/hero/mall-plumbing.jpg",
      description:
        "Large-scale commercial plumbing systems for modern shopping complex with multiple floors.",
    },
    {
      id: 3,
      category: "Resort - Luxury Living",
      title: "Resort Water Systems",
      image: "/images/hero/resort-plumbing.jpg",
      description:
        "Premium plumbing solutions for luxury resort with spa facilities and multiple buildings.",
    },
    {
      id: 4,
      category: "Cinema - Entertainment",
      title: "Cinema Complex Plumbing",
      image: "/images/hero/cinema-plumbing.jpg",
      description:
        "Specialized plumbing systems for entertainment complex with multiple theaters and facilities.",
    },
    {
      id: 5,
      category: "Commercial - Office",
      title: "Office Building Systems",
      image: "/images/hero/office-plumbing.jpg",
      description:
        "Modern plumbing infrastructure for high-rise commercial office building with advanced features.",
    },
    {
      id: 6,
      category: "Showroom - Retail",
      title: "Showroom Plumbing",
      image: "/images/hero/showroom-plumbing.jpg",
      description:
        "Custom plumbing solutions for luxury showroom with display areas and customer facilities.",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-amber-50 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 text-md font-medium mb-2">
            Latest Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Recent Work We Have Done
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            {projects.map(project => (
              <SwiperSlide key={project.id}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
                  {/* Project Image */}
                  <div className="relative h-80 bg-gray-200 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={e => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                      fill
                    />
                    {/* Fallback for missing images */}
                    <div
                      className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <div className="text-center text-gray-600">
                        <div className="text-6xl mb-2">🏗️</div>
                        <p className="text-sm">Project Image</p>
                      </div>
                    </div>
                  </div>

                  {/* White Overlay Card */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-green-600 text-sm font-medium mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-lg font-bold text-black group-hover:text-green-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <Link
                        href="/clients"
                        className="inline-flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200 ml-4 group-hover:scale-110"
                      >
                        <svg
                          className="w-5 h-5 text-white"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 !bg-[#e4b078] !hover:bg-[#d49e78] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  );
}
