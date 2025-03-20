"use client"

import Image from 'next/image'

type Sponsor = {
  name: string
  logo: string
}

const Sponsors = () => {
  // Sample sponsors data - replace with actual data
  const sponsors: Sponsor[] = [
    { name: "MongoDB", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Indeed", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Mercury", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Rippling", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Hexaware", logo: "/sponsors/placeholder-logo.svg" },
    { name: "1840 & Co.", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Rho", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Golin", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Workable", logo: "/sponsors/placeholder-logo.svg" },
    { name: "Knock", logo: "/sponsors/placeholder-logo.svg" },
    { name: "8Sleep", logo: "/sponsors/placeholder-logo.svg" },
    { name: "G2", logo: "/sponsors/placeholder-logo.svg" }
  ]

  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-stk-serif mb-4" id="sponsors-title">Our Sponsors</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Making the world's largest hackathon possible
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="border border-white/10">
          {/* First row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-b-white/10">
            {sponsors.slice(0, 4).map((sponsor, index) => (
              <div 
                key={sponsor.name}
                className={`flex h-[152px] items-center justify-center ${index < 2 ? 'border-b border-b-white/10 md:border-b-0' : ''} ${index % 2 === 0 ? 'border-r border-r-white/10' : ''} ${index < 3 ? 'md:border-r md:border-r-white/10' : ''}`}
              >
                <div className="flex h-16 w-36 max-w-[80%] select-none items-center justify-center text-white md:w-[200px]">
                  {/* Placeholder for logo - replace with actual SVG or Image component when you have logos */}
                  <div className="h-10 w-max bg-white/5 rounded px-4 py-2 flex items-center justify-center">
                    <p className="text-white/40">{sponsor.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-b-white/10">
            {sponsors.slice(4, 8).map((sponsor, index) => (
              <div 
                key={sponsor.name}
                className={`flex h-[152px] items-center justify-center ${index < 2 ? 'border-b border-b-white/10 md:border-b-0' : ''} ${index % 2 === 0 ? 'border-r border-r-white/10' : ''} ${index < 3 ? 'md:border-r md:border-r-white/10' : ''}`}
              >
                <div className="flex h-16 w-36 max-w-[80%] select-none items-center justify-center text-white md:w-[200px]">
                  {/* Placeholder for logo */}
                  <div className="h-10 w-max bg-white/5 rounded px-4 py-2 flex items-center justify-center">
                    <p className="text-white/40">{sponsor.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third row */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {sponsors.slice(8, 12).map((sponsor, index) => (
              <div 
                key={sponsor.name}
                className={`flex h-[152px] items-center justify-center ${index < 2 ? 'border-b border-b-white/10 md:border-b-0' : ''} ${index % 2 === 0 ? 'border-r border-r-white/10' : ''} ${index < 3 ? 'md:border-r md:border-r-white/10' : ''}`}
              >
                <div className="flex h-16 w-36 max-w-[80%] select-none items-center justify-center text-white md:w-[200px]">
                  {/* Placeholder for logo */}
                  <div className="h-10 w-max bg-white/5 rounded px-4 py-2 flex items-center justify-center">
                    <p className="text-white/40">{sponsor.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Text */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-300">
            Our hackathon is made possible by the generous support of industry-leading organizations 
            committed to fostering innovation and supporting the next generation of technology.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
