"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeIn, slideIn, textVariant } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            {...slideIn("left", "spring", 0.2, 1)}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
                alt="About RareLinks"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-40 rounded-lg overflow-hidden shadow-xl hidden md:block">
              <Image
                src="https://images.pexels.com/photos/8961267/pexels-photo-8961267.jpeg"
                alt="About RareLinks Team"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full hidden md:block"></div>
          </motion.div>

          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            {...fadeIn("right", 0.3)}
          >
            <motion.h2
              {...textVariant(0.1).animate}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              About RareLinks Technical Services
            </motion.h2>
            
            <motion.p
              {...textVariant(0.2).animate}
              className="text-muted-foreground mb-4"
            >
              RareLinks Technical Services LLC is a Dubai-based company specializing in comprehensive interior and technical contracting services. We offer end-to-end solutions for residential and commercial projects – from supplying skilled manpower to executing full renovations.
            </motion.p>
            
            <motion.p
              {...textVariant(0.3).animate}
              className="text-muted-foreground mb-6"
            >
              Our team brings together experienced engineers, technicians, and craftsmen dedicated to high-quality workmanship and client satisfaction. Operating in the UAE, we adhere to local regulations and international standards to ensure safety and excellence in every project.
            </motion.p>

            <motion.div
              {...textVariant(0.4).animate}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To deliver reliable, high-quality technical services and interior solutions that exceed client expectations.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To become a leading one-stop service provider in Dubai's technical and interior contracting industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...textVariant(0.5).animate}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/about">
                  Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}