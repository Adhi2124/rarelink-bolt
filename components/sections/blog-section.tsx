"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { staggerContainer, textVariant, cardHoverVariants, fadeIn } from "@/lib/animations";

export function BlogSection({ limit = 3 }: { limit?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const displayedPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2
            {...textVariant(0.1)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.p
            {...textVariant(0.2)}
            className="text-muted-foreground"
          >
            Insights, tips, and updates from the world of interior and technical services
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {displayedPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 text-xs font-medium py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button
                  variant="link"
                  className="p-0 text-primary font-medium group-hover:underline"
                  asChild
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && blogPosts.length > limit && (
          <motion.div
            className="mt-12 text-center"
            {...fadeIn("up", 0.3)}
          >
            <Button 
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/blog">
                View All Posts <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}