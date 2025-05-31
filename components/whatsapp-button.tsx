"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { buttonVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsTooltipVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Show tooltip after 3 seconds if the button is visible
    const tooltipTimer = setTimeout(() => {
      if (isVisible) {
        setIsTooltipVisible(true);
      }
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 8000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, [isVisible]);

  const handleClick = () => {
    window.open(
      `https://wa.me/${siteConfig.links.whatsapp}?text=Hello%20RareLinks,%20I'm%20interested%20in%20your%20services.`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute bottom-full right-0 mb-2 p-3 bg-white text-gray-800 rounded-lg shadow-lg max-w-[200px] text-sm"
              >
                <X
                  className="absolute top-1 right-1 h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTooltipVisible(false);
                  }}
                />
                <p>Need help? Chat with us on WhatsApp!</p>
                <div className="absolute bottom-0 right-5 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={handleClick}
            className={cn(
              "flex items-center justify-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
            )}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}