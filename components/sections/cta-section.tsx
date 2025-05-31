"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { fadeIn, textVariant } from "@/lib/animations";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-primary text-white"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            {...textVariant(0.1).animate}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          
          <motion.p
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            {...textVariant(0.2).animate}
            className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto"
          >
            Contact us today for a free consultation and quote. Our team of experts is ready to bring your vision to life.
          </motion.p>
          
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            {...fadeIn("up", 0.3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              asChild
            >
              <a href={`tel:${siteConfig.links.phone}`}>
                <Phone className="mr-2 h-4 w-4" /> Call Us Now
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">
                Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}