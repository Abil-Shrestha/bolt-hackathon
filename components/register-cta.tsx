"use client"

import Link from 'next/link';
import { Cta } from './cta-button';
import Background from './grid';

export default function RegisterCTA() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <Background isHero={true} />
      </div>
      
      {/* Mask to hide grid lines around the button */}
      <div className="absolute z-[5] pointer-events-none">
        {/* Desktop mask */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[120px] bg-black rounded-xl" />
        
        {/* Tablet mask */}
        <div className="hidden md:block lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[100px] bg-black rounded-xl" />
        
        {/* Mobile mask */}
        <div className="block md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[80px] bg-black rounded-xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-fit w-fit items-center justify-center px-4">
        {/* Big CTA Button */}
        <Cta
          cta="Register Now"
          cols={50}
          rows={12}
          className="text-2xl md:text-3xl lg:text-5xl font-semibold py-6 md:py-8 lg:py-10 px-8 md:px-12 lg:px-16 min-w-[200px] md:min-w-[300px] lg:min-w-[400px] scale-100 md:scale-110 lg:scale-125"
        />
      </div>
    </section>
  );
}
