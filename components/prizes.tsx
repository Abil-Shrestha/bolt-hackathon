"use client"

import { useState } from 'react'
import Image from 'next/image'

type PrizeType = {
  title: string
  amount: string
  description: string
  icon: string
}

const Prizes = () => {
  // Sample prizes data
  const prizes: PrizeType[] = [
    {
      title: "Grand Prize",
      amount: "$500,000",
      description: "Awarded to the team with the most innovative and impactful project that aligns with our hackathon theme.",
      icon: "/prizes/trophy.svg"
    },
    {
      title: "Runner Up",
      amount: "$250,000",
      description: "For the second-place team that demonstrates exceptional technical execution and creativity.",
      icon: "/prizes/medal.svg"
    },
    {
      title: "Category Winners",
      amount: "$100,000 each",
      description: "Five category prizes for the best projects in AI, Sustainability, Web3, Health Tech, and Social Impact.",
      icon: "/prizes/star.svg"
    },
    {
      title: "Community Choice",
      amount: "$75,000",
      description: "Voted by hackathon participants and the wider tech community for the most beloved project.",
      icon: "/prizes/heart.svg"
    },
    {
      title: "Best Technical Implementation",
      amount: "$50,000",
      description: "For the team that demonstrates the most impressive technical skills and innovation.",
      icon: "/prizes/code.svg"
    },
    {
      title: "Best UI/UX Design",
      amount: "$50,000",
      description: "Awarded to the project with the most intuitive, accessible, and visually appealing interface.",
      icon: "/prizes/design.svg"
    }
  ]

  // Calculate total prize pool
  const totalPrizePool = "$1,000,000+"

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Content wrapper */}
        <div>
          {/* Section Title with Prize Pool */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-stk-serif mb-4">Prizes</h2>
            <div className="inline-block bg-black border border-white/20 rounded-full px-8 py-3">
              <p className="text-xl md:text-2xl font-bold">Total Prize Pool: <span className="text-white">{totalPrizePool}</span></p>
            </div>
          </div>
          
          {/* Prize Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <div 
                key={prize.title} 
                className="bg-black border border-white/10 rounded-lg p-8 transition-transform hover:scale-[1.02] relative overflow-hidden"
              >
                {/* Prize card content */}
                <div className="relative z-10">
                  {/* Icon placeholder - replace with actual icons */}
                  <div className="w-12 h-12 mb-4 relative">
                    <div className="absolute inset-0 bg-white/5 rounded-full" />
                    {/* Uncomment when you have actual icons */}
                    {/* <Image 
                      src={prize.icon} 
                      alt={prize.title} 
                      fill 
                      className="object-contain p-2" 
                    /> */}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
                  <p className="text-2xl font-stk-serif text-white mb-4">{prize.amount}</p>
                  <p className="text-gray-400">{prize.description}</p>
                </div>
                
                {/* Subtle diagonal pattern in background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] opacity-5 [--pattern-fg:var(--color-white)]" />
              </div>
            ))}
          </div>
          
          {/* Additional Prizes Note */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300">
              Additional prizes include mentorship opportunities, investor meetings, 
              and incubator placements for promising projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
