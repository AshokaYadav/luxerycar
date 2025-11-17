'use client'

import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const HeroWithBooking = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const backgroundSettings = {
    background_background: "slideshow",
    background_slideshow_gallery: [
      {
        id: 16,
        url: "https://luxurycardrive.in/wp-content/uploads/2024/12/background-large-scaled.jpg"
      }
    ],
    background_slideshow_loop: "yes",
    background_slideshow_slide_duration: 5000,
    background_slideshow_slide_transition: "fade",
    background_slideshow_transition_duration: 500
  };

  const slides = backgroundSettings.background_slideshow_gallery.map(item => item.url);

  useEffect(() => {
    if (backgroundSettings.background_slideshow_loop === "yes") {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, backgroundSettings.background_slideshow_slide_duration);

      return () => clearInterval(interval);
    }
  }, [slides.length]);

  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${slide})`,
              transitionDuration: `${backgroundSettings.background_slideshow_transition_duration}ms`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 lg:px-8 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            
            {/* Text Section */}
            <div className="text-white text-center lg:text-left space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                Premium
                <span className="block font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Luxury Rides
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-200 font-light">
                Experience the ultimate in comfort and style
              </p>

              <div className="space-y-2 text-gray-300">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" /></svg>
                  <span>Premium Luxury Vehicles</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" /></svg>
                  <span>Professional Chauffeurs</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor"><path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" /></svg>
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="flex justify-center lg:justify-end">
              <BookingForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithBooking;
