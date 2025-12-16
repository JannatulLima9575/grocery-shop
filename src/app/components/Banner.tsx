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
    <section className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="w-full h-full object-cover scale-110 animate-zoom"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-green-500" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Banner;

/* Tailwind animation (add to globals.css)
@keyframes zoom {
  from { transform: scale(1); }
  to { transform: scale(1.15); }
}

.animate-zoom {
  animation: zoom 6s ease-in-out infinite;
}
*/