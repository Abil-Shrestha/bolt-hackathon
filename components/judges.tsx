'use client';

import Image from 'next/image';
import { useState } from 'react';

// Define the Judge type
interface Judge {
  id: number;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
}

// Judges data
const judgesData: Judge[] = [
  {
    id: 1,
    name: 'Eric',
    title: 'CEO',
    company: 'StackBlitz',
    imageUrl: '/images/judges/eric.png',
  },
  {
    id: 2,
    name: 'Sara',
    title: 'Startup Investor',
    company: 'Conviction',
    imageUrl: '/images/judges/sara.png',
  },
  {
    id: 3,
    name: 'Levels.io',
    title: 'Indie Hacker',
    company: 'Levels.io',
    imageUrl: '/images/judges/levels.png',
  },
  {
    id: 4,
    name: 'Evan',
    title: 'Creator',
    company: 'VueJS',
    imageUrl: '/images/judges/evan.png',
  },
  {
    id: 5,
    name: 'KP',
    title: 'The "Build In Public" Guy',
    company: 'PaddleHQ',
    imageUrl: '/images/judges/kp.png',
  },
  {
    id: 6,
    name: 'Logan',
    title: 'Product Lead',
    company: 'Google',
    imageUrl: '/images/judges/logan.png',
  },
  {
    id: 7,
    name: 'Theo',
    title: 'Full time CEO',
    company: 'T3-Chat',
    imageUrl: '/images/judges/theo.png',
  },
  {
    id: 8,
    name: 'Alex Albert',
    title: 'Head of Relations',
    company: 'Claude',
    imageUrl: '/images/judges/alex.png',
  },
  {
    id: 9,
    name: 'Ben Tossell',
    title: 'Founder',
    company: 'Makerpad',
    imageUrl: '/images/judges/ben.png',
  },
];

// Judge Card Component
const JudgeCard = ({ judge }: { judge: Judge }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[220px] p-4">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-3 overflow-hidden rounded-md bg-black group">
          {/* 3D pixelated judge image with hover effect */}
          <div className="w-full h-full transition-opacity duration-300 opacity-80 hover:opacity-100">
            <Image
              src={judge.imageUrl}
              alt={`${judge.name} - ${judge.title}`}
              width={250}
              height={250}
              className="object-cover w-full h-full"
              priority
              quality={100}
            />
          </div>
        </div>
        <h3 className="text-base font-medium text-white text-center">{judge.name}</h3>
        <p className="text-xs text-white/40 text-center">{judge.title}</p>
        <p className="text-xs text-white/40 text-center">{judge.company}</p>
      </div>
    </div>
  );
};

// Main Judges Component
export default function Judges() {
  // Calculate rows based on 4 judges per row on desktop
  const rows = [
    judgesData.slice(0, 4),
    judgesData.slice(4, 8),
    judgesData.slice(8, 12)
  ];

  return (
    <section className="py-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-eb-garamond mb-4">Meet Our Judges</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Industry experts evaluating your projects
          </p>
        </div>

        {/* Judges Grid with borders */}
        <div className="border border-white/10">
          {rows.map((row, rowIndex) => (
            <div
              key={`judges-row-${row[0]?.id || rowIndex}`}
              className={`grid grid-cols-2 md:grid-cols-4 ${rowIndex < rows.length - 1 ? 'border-b border-b-white/10' : ''}`}
            >
              {row.map((judge, index) => (
                <div
                  key={judge.id}
                  className={`flex items-center justify-center ${index < 2 ? 'border-b border-b-white/10 md:border-b-0' : ''} ${index % 2 === 0 ? 'border-r border-r-white/10' : ''} ${index < 3 ? 'md:border-r md:border-r-white/10' : ''}`}
                >
                  <JudgeCard judge={judge} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
