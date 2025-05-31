"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, textVariant } from "@/lib/animations";

const slides = [
  {
    id: 1,
    title: "Quality Interior & Technical Services",
    subtitle: "Transforming spaces with expert craftsmanship",
    image: "https://images.pexels.com/photos/7937620/pexels-photo-7937620.jpeg",
    cta: "Explore Our Services",
    link: "/services",
  },
  {
    id: 2,
    title: "Complete Renovation Solutions",
    subtitle: "From concept to completion, we bring your vision to life",
    image: "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg",
    cta: "View Our Work",
    link: "/services/renovation-refurbishment",
  },
  {
    id: 3,
    title: "Skilled Manpower Supply",
    subtitle: "Professional technicians for all your project needs",
    image: "https://images.pexels.com/photos/8961256/pexels-photo-8961256.jpeg",
    cta: "Learn More",
    link: "/services/manpower-supply",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.div
              {...textVariant(0.1)}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                {...fadeIn("up", 0.3)}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-100 mb-8"
                {...fadeIn("up", 0.5)}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                {...fadeIn("up", 0.7)}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={slide.link}>
                    {slide.cta} <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-white/50 hover:bg-white/80"
              } transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}