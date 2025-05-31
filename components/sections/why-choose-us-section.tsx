"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { whyChooseUs } from "@/lib/constants";
import { IconComponent } from "@/components/icon-component";
import { staggerContainer, textVariant, cardHoverVariants } from "@/lib/animations";

export function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2
            {...textVariant(0.1)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            {...textVariant(0.2)}
            className="text-muted-foreground"
          >
            Discover the advantages of working with RareLinks Technical Services
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <IconComponent name={item.icon} className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}