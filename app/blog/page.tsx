import { Metadata } from 'next';
import { BlogSection } from '@/components/sections/blog-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles, news, and insights from RareLinks Technical Services LLC.',
};

export default function BlogPage() {
  return (
    <>
      <div className="pt-24 md:pt-32 pb-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-lg">
              Insights, tips, and updates from the world of interior and technical services
            </p>
          </div>
          
          <BlogSection limit={999} />
        </div>
      </div>
      
      <CTASection />
    </>
  );
}