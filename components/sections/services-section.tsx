"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { cardHoverVariants, staggerContainer, textVariant } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { IconComponent } from "@/components/icon-component";

export function ServicesSection({ limit = 6 }: { limit?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
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
            Our Services
          </motion.h2>
          <motion.p
            {...textVariant(0.2)}
            className="text-muted-foreground"
          >
            Comprehensive interior and technical contracting services for residential and commercial projects
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <IconComponent name={service.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 text-primary font-medium group-hover:underline"
                  asChild
                >
                  <Link href={`/services/${service.id}`}>
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && services.length > limit && (
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/services">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}