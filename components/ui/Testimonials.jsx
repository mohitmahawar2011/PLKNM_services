/**
 * Testimonials Component for PLKNM Plumbing Services
 * 
 * Modern testimonials section with customer reviews, star ratings,
 * and avatar carousel navigation matching the design reference.
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Lucy Smith",
      role: "Satisfied Customer",
      rating: 5,
      text: "Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aurodit aut fugit, sed neatae vitae dicta ripiscing elit, sed do euismod tempor incidunt labore are dolore magna aliqua aut enim a minim adipiscing elit, sed do euismod tempor incidunt labore minima veniam.",
      avatar: "/images/testimonials/lucy-smith.jpg"
    },
    {
      id: 2,
      name: "John Anderson",
      role: "Hotel Manager",
      rating: 5,
      text: "PLKNM Plumbing Services delivered exceptional work on our luxury hotel project. Their expertise in large-scale commercial plumbing systems is unmatched. Professional, reliable, and completed on time.",
      avatar: "/images/testimonials/john-anderson.jpg"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Mall Director",
      rating: 5,
      text: "Working with PLKNM was a pleasure from start to finish. They handled our complex mall plumbing infrastructure with precision and professionalism. Highly recommended for commercial projects.",
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Resort Owner",
      rating: 5,
      text: "The team at PLKNM transformed our resort's plumbing systems. Their attention to detail and commitment to quality is evident in every aspect of their work. Outstanding service!",
      avatar: "/images/testimonials/michael-brown.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal-500 text-sm font-medium mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -left-4 -top-4">
              <svg className="w-16 h-16 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Testimonial Text */}
            <div className="bg-white p-8 pt-12 rounded-lg shadow-sm">
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center text-lg text-gray-700 leading-relaxed mb-6">
                "{current.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-black mb-1">{current.name}</h3>
                <p className="text-gray-600">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Avatar Carousel */}
          <div className="flex items-center justify-center mt-12">
            {/* Previous Arrow */}
            <button
              onClick={prevTestimonial}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Avatar Images */}
            <div className="flex items-center space-x-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`relative w-16 h-16 rounded-full overflow-hidden transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'ring-4 ring-yellow-400 ring-offset-2'
                      : 'hover:scale-110'
                  }`}
                  aria-label={`View testimonial from ${testimonial.name}`}
                >
                  {/* Placeholder avatar with initials */}
                  <div className={`w-full h-full flex items-center justify-center text-white font-bold text-lg ${
                    index === 0 ? 'bg-pink-400' :
                    index === 1 ? 'bg-blue-500' :
                    index === 2 ? 'bg-green-500' :
                    'bg-purple-500'
                  }`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </button>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextTestimonial}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
