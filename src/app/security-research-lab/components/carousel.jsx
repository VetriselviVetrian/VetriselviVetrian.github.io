"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ResearchCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/file.svg',
    '/globe.svg',
    '/next.svg',
    '/l1.jpeg'
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mb-12"> {/* Reduced margin bottom */}
      <div className="w-full max-w-xl mx-auto px-4"> {/* Changed from max-w-3xl to max-w-xl */}
        <div className="relative h-[200px] md:h-[350px] lg:h-[400px] w-full rounded-xl overflow-hidden"> {/* Further reduced heights */}
          {/* Carousel container */}
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide}
                  alt={`Research slide ${index + 1}`}
                  fill
                  className="object-contain p-4" // Changed from object-cover to object-contain and added padding
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-2"> {/* Reduced padding */}
            <button
              onClick={goToPrevious}
              className="btn btn-circle btn-sm bg-black/30 border-none hover:bg-black/50 text-white" // Added btn-sm
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button
              onClick={goToNext}
              className="btn btn-circle btn-sm bg-black/30 border-none hover:bg-black/50 text-white" // Added btn-sm
              aria-label="Next slide"
            >
              ❯
            </button>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1"> {/* Reduced spacing */}
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchCarousel;