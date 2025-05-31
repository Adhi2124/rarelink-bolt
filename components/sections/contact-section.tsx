"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { fadeIn, slideIn, textVariant } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            {...fadeIn("left", 0.3)}
          >
            <motion.h2
              {...textVariant(0.1).animate}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Get In Touch
            </motion.h2>
            
            <motion.p
              {...textVariant(0.2).animate}
              className="text-muted-foreground mb-8"
            >
              Have questions about our services or want to discuss your project? Reach out to us and our team will get back to you shortly.
            </motion.p>
            
            <motion.div
              {...textVariant(0.3).animate}
              className="space-y-4 mb-8"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href={`tel:${siteConfig.links.phone}`} className="hover:text-primary">
                      {siteConfig.links.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a href={`mailto:${siteConfig.links.email}`} className="hover:text-primary">
                      {siteConfig.links.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">{siteConfig.links.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    <a 
                      href={`https://wa.me/${siteConfig.links.whatsapp}?text=Hello%20RareLinks,%20I'm%20interested%20in%20your%20services.`}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              {...textVariant(0.4).animate}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">
                  View on Map
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            {...slideIn("right", "spring", 0.2, 1)}
          >
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}