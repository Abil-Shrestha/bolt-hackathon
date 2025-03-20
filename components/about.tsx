"use client"

import { useState } from 'react'
import Image from 'next/image'

type OrganizerType = {
  name: string
  role: string
  image: string
}

const About = () => {
  // Sample organizers data - replace with actual data
  const organizers: OrganizerType[] = [
    {
      name: "Jane Doe",
      role: "Lead Organizer",
      image: "/organizers/placeholder.png"
    },
    {
      name: "John Smith",
      role: "Technical Lead",
      image: "/organizers/placeholder.png"
    },
    {
      name: "Alex Johnson",
      role: "Community Manager",
      image: "/organizers/placeholder.png"
    }
  ]

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Left border with pattern */}
        <div className="absolute top-0 bottom-0 left-0 w-8 border-r border-white/10 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10 max-lg:hidden" />
        
        {/* Right border with pattern */}
        <div className="absolute top-0 bottom-0 right-0 w-8 border-l border-white/10 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10 max-lg:hidden" />

        {/* Content wrapper with padding to prevent overlap with borders */}
        <div className="px-10">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-stk-serif mb-16 text-center">About the Hackathon</h2>
          
          {/* Description Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-white/20 pl-4">Description</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Join us for the world's largest hackathon, where innovators, creators, and problem-solvers 
                  from around the globe come together to build the next generation of technology.
                </p>
                <p className="text-lg text-gray-300">
                  Over the course of 48 hours, participants will collaborate in teams to develop 
                  groundbreaking solutions that address real-world challenges. Whether you're a 
                  seasoned developer or just starting your coding journey, this hackathon offers 
                  an inclusive environment for all skill levels.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  With mentorship from industry experts, workshops to enhance your skills, and 
                  networking opportunities with like-minded individuals, this event is designed 
                  to inspire creativity and foster innovation.
                </p>
                <p className="text-lg text-gray-300">
                  Substantial prizes await the most innovative projects, with categories ranging 
                  from AI and machine learning to sustainability and social impact. Don't miss 
                  this chance to showcase your talents and make a difference!
                </p>
              </div>
            </div>
          </div>
          
          {/* Theme Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-white/20 pl-4">Theme</h3>
            <div className="bg-black p-8 border border-white/10 rounded-lg">
              <h4 className="text-xl md:text-2xl font-stk-serif text-center mb-6">"Building for the Future"</h4>
              <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
                This year's theme challenges participants to create solutions that address 
                tomorrow's problems today. From climate tech to accessibility innovations, 
                we're looking for projects that push boundaries and create lasting impact.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black p-6 rounded-lg border border-white/10">
                  <h5 className="text-lg font-bold mb-3 text-white">Sustainability</h5>
                  <p className="text-gray-300">Projects that address environmental challenges and promote sustainable practices.</p>
                </div>
                <div className="bg-black p-6 rounded-lg border border-white/10">
                  <h5 className="text-lg font-bold mb-3 text-white">AI for Good</h5>
                  <p className="text-gray-300">Leveraging artificial intelligence to solve social and humanitarian issues.</p>
                </div>
                <div className="bg-black p-6 rounded-lg border border-white/10">
                  <h5 className="text-lg font-bold mb-3 text-white">Next-Gen Interfaces</h5>
                  <p className="text-gray-300">Reimagining how humans interact with technology through innovative interfaces.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Organizers Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-white/20 pl-4">Organizers</h3>
            <p className="text-lg text-gray-300 mb-8">
              Meet the dedicated team behind the world's largest hackathon. Our organizers work tirelessly 
              to create an unforgettable experience for all participants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {organizers.map((organizer) => (
                <div key={`${organizer.name}-${organizer.role}`} className="bg-black p-6 rounded-lg border border-white/10 text-center transition-transform hover:scale-105">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image 
                      src={organizer.image} 
                      alt={organizer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold">{organizer.name}</h4>
                  <p className="text-gray-400">{organizer.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About