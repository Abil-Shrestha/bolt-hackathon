'use client'
import React from 'react'
import dynamic from 'next/dynamic';
const CanvasComponent = dynamic(
  () => import('@/components/smoke-canvas'),
  { ssr: false }
);

const Footer = () => {
    return (
        
    )
}

export default Footer