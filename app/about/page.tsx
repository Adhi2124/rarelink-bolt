import { Metadata } from 'next';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about RareLinks Technical Services LLC, our mission, vision, and values.',
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 md:pt-32 pb-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground text-lg">
              Learn about our company, mission, vision, and values
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-96 relative">
              <Image
                src="https://images.pexels.com/photos/6474554/pexels-photo-6474554.jpeg"
                alt="RareLinks Team"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                RareLinks Technical Services LLC
              </h2>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  RareLinks Technical Services LLC is a Dubai-based company specializing in comprehensive interior and technical contracting services. We offer end-to-end solutions for residential and commercial projects – from supplying skilled manpower to executing full renovations.
                </p>
                <p>
                  Our team brings together experienced engineers, technicians, and craftsmen dedicated to high-quality workmanship and client satisfaction. Operating in the UAE, we adhere to local regulations and international standards to ensure safety and excellence in every project.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver reliable, high-quality technical services and interior solutions that exceed client expectations. We strive to "build trust through quality" by completing projects on time, within budget, and to the highest standards of craftsmanship and safety.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become a leading one-stop service provider in Dubai's technical and interior contracting industry, known for our innovation, integrity, and exceptional customer service. We envision RareLinks as a trusted partner for transforming spaces and bringing our clients' visions to life.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={cn("border rounded-lg p-4", "border-l-4 border-l-primary")}>
                    <h4 className="font-medium mb-2">Client-Centric</h4>
                    <p className="text-sm text-muted-foreground">
                      We place our clients at the center of everything we do, ensuring their needs and vision guide our work.
                    </p>
                  </div>
                  
                  <div className={cn("border rounded-lg p-4", "border-l-4 border-l-primary")}>
                    <h4 className="font-medium mb-2">Quality Focused</h4>
                    <p className="text-sm text-muted-foreground">
                      We never compromise on quality, using premium materials and proven techniques in all our projects.
                    </p>
                  </div>
                  
                  <div className={cn("border rounded-lg p-4", "border-l-4 border-l-primary")}>
                    <h4 className="font-medium mb-2">Innovation Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      We continuously explore new methods, materials, and technologies to deliver better results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}