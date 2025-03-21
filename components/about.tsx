"use client"

import Image from 'next/image'
import { useState } from 'react'

type OrganizerType = {
    name: string
    role: string
    image: string
}

const About = () => {
    // Sample organizers data - replace with actual data
    const organizers: OrganizerType[] = [
        {
            name: "Greg",
            role: "Host",
            image: "/images/judges/greg.png"
        },
        {
            name: "Eric",
            role: "CEO",
            image: "/images/judges/eric.png"
        },
        {
            name: "Kp",
            role: "Viral Tweeter",
            image: "/images/judges/kp.png"
        }
    ]

    return (
        <section className="text-white mb-24">
            {/* No need for container, borders or padding as they're handled by SectionWrapper */}
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-stk-serif mb-16 text-center">About the Hackathon</h2>

            {/* Description Section */}
            <div className="mb-20">
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

            {/* Horizontal divider */}
            <div className="my-16">
                <div className="relative h-2 w-full bg-black">
                    <hr className="absolute top-1/2 inset-x-0 border-t border-white/10" />
                </div>
            </div>

            {/* Theme Section */}
            <div className="mb-20">
                <h4 className="text-xl md:text-2xl font-stk-serif text-center mb-6">"Building for the Future"</h4>
                <div className=" p-8 rounded-lg">

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

            {/* Horizontal divider */}
            <div className="my-16">
                <div className="relative h-2 w-full bg-black">
                    <hr className="absolute top-1/2 inset-x-0 border-t border-white/10" />
                </div>
            </div>

            {/* Organizers Section */}
            <div>
                <h4 className="text-xl md:text-2xl font-stk-serif text-center mb-6">Organizers</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {organizers.map((organizer) => (
                        <div key={`${organizer.name}-${organizer.role}`} className="bg-black p-6 rounded-lg  text-center transition-transform ">
                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-md overflow-hidden opacity-80 hover:opacity-100">
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
        </section>
    )
}

export default About