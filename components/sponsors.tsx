"use client"

import Image from 'next/image'

type Sponsor = {
  name: string
  logo: string
}

const Sponsors = () => {
  // Sample sponsors data - replace with actual data
  const sponsors: Sponsor[] = [
    { name: "EXA", logo: "/sponsors/exa.svg" },
    { name: "Sentry", logo: "/sponsors/sentry.svg" },
    { name: "Loops", logo: "/sponsors/loops.svg" },
    { name: "Supabase", logo: "/sponsors/supabase-dark.png" },
    { name: "Netlify", logo: "/sponsors/netlify-logo.png" },
    { name: "Cloudflare", logo: "/sponsors/cloudflare.svg" },
    { name: "AlgoFoundation", logo: "/sponsors/algorand-logo-white-CMYK.svg" },
    { name: "HsrHackerHouse", logo: "/sponsors/hackerhouse.svg" },
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
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <div className="w-[120px] h-[35px] relative flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={35}
                        className="object-scale-down"
                      />
                    </div>
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
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <div className="w-[120px] h-[30px] relative flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={30}
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
           {/* First row */}
           <div className="grid grid-cols-2 md:grid-cols-4 border-b border-b-white/10">
            {sponsors.slice(0, 4).map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`flex h-[152px] items-center justify-center ${index < 2 ? 'border-b border-b-white/10 md:border-b-0' : ''} ${index % 2 === 0 ? 'border-r border-r-white/10' : ''} ${index < 3 ? 'md:border-r md:border-r-white/10' : ''}`}
              >
                <div className="flex h-16 w-36 max-w-[80%] select-none items-center justify-center text-white md:w-[200px]">
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <div className="w-[120px] h-[35px] relative flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={35}
                        className="object-scale-down"
                      />
                    </div>
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
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <div className="w-[120px] h-[30px] relative flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={30}
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third row */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4">
            {sponsors.slice(8, 12).map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`flex h-[152px] items-center justify-center ${index < 2 ? 'border-b border-b-white/10 md:border-b-0' : ''} ${index % 2 === 0 ? 'border-r border-r-white/10' : ''} ${index < 3 ? 'md:border-r md:border-r-white/10' : ''}`}
              >
                <div className="flex h-16 w-36 max-w-[80%] select-none items-center justify-center text-white md:w-[200px]">
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <div className="w-[120px] h-[30px] relative flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={30}
                        className="object-scale-down"
                        style={{ width: '120px', height: '30px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
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
