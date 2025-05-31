"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navigationLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { navVariants } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      {...navVariants}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="sr-only">RareLinks</span>
          <Image
            src="/logo.svg"
            alt="RareLinks Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            size="sm"
            className="ml-4 bg-primary hover:bg-primary/90"
            asChild
          >
            <a href={`tel:${siteConfig.links.phone}`}>
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <Menu className="h-6 w-6" />
          ) : (
            <X className="h-6 w-6" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary px-2 py-1 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 w-full"
                asChild
              >
                <a href={`tel:${siteConfig.links.phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}