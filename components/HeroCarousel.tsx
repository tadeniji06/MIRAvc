"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const IMAGES = [
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", 
];

export default function HeroCarousel({ children }: { children: React.ReactNode }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  return (
    <section className="relative w-full h-svh min-h-[700px] max-h-[1000px] flex flex-col items-center justify-center overflow-hidden mb-20 -mt-20">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full z-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {IMAGES.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 h-full relative group" key={index}>
              <img 
                src={src} 
                alt={`MIRVac professional workspace ${index + 1}`} 
                className="w-full h-full object-cover transform scale-105 transition-transform duration-10000"
              />
              {/* Vibrant blue gradient overlay to ensure text contrast and fit the theme */}
              <div className="absolute inset-0 bg-foreground/80 bg-linear-to-t from-foreground to-transparent mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Overlay Content */}
      <div className="relative z-10 w-full pt-20">
        {children}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
         {IMAGES.map((_, i) => (
           <div key={i} className="w-2 h-2 rounded-full border border-white/50 bg-white/20 backdrop-blur-md" />
         ))}
      </div>
    </section>
  );
}
