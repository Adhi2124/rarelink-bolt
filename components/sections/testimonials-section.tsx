"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { staggerContainer, textVariant, cardHoverVariants } from "@/lib/animations";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2
            variants={textVariant(0.1).animate}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            variants={textVariant(0.2).animate}
            className="text-gray-300"
          >
            See what our clients say about our services and workmanship
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              className="bg-gray-800 rounded-lg p-6 md:p-8"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-gray-300">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}