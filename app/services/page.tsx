import { Metadata } from 'next';
import { ServicesSection } from '@/components/sections/services-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the comprehensive range of interior and technical services offered by RareLinks Technical Services LLC.',
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 md:pt-32 pb-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive interior and technical contracting solutions for your projects
            </p>
          </div>
          
          <ServicesSection />
        </div>
      </div>
      
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}