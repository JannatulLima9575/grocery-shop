"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Live KachaBazer Price Tracker",
    subtitle: "Check today’s latest market prices instantly",
    image: "/Hero/Banner1.jpg",
  },
  {
    id: 2,
    title: "Fresh Market Updates",
    subtitle: "Real-time vegetable, fish, and meat prices",
    image: "/Hero/Banner2.jpg",
  },
  {
    id: 3,
    title: "Smart Shopping Decisions",
    subtitle: "Decide when to buy with accurate price insights",
    image: "/Hero/Banner3.jpg",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-gray-950">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="w-full h-full object-cover scale-110 animate-zoom"
          />

          {/* Centered Content Overlay */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl animate-fade-in-up">
                {slide.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-2xl text-gray-100 dark:text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-lg animate-fade-in-up delay-200">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Center Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === current 
                ? "w-8 h-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" 
                : "w-2 h-2 bg-white/60 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;