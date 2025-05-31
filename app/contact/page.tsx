import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with RareLinks Technical Services LLC for your interior and technical contracting needs.',
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 md:pt-32 pb-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Get in touch with our team for inquiries, quotes, or information
            </p>
          </div>
          
          <ContactSection />
          
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-[400px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.933225070709!2d55.27172581500955!3d25.197196983903183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbd09b4eaed1155d2!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1620811558713!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="RareLinks Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}