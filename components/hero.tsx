"use client"

import { Cta } from '@/components/cta-button'
import { TextEffect } from '@/components/text-effect'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [activeVideo, setActiveVideo] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Handle responsive layout
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Set up video playback
    const setupVideoPlayback = () => {
      const video1 = video1Ref.current
      const video2 = video2Ref.current

      if (!video1 || !video2) return

      // Start the first video immediately
      video1.play().catch(e => console.error('Error playing video 1:', e))

      // Set up event listeners for transition
      const handleTimeUpdate = () => {
        const video = activeVideo === 1 ? video1 : video2

        // Start transition when approaching the end (last 2.5 seconds)
        // This gives enough time for a smooth transition
        if (!isTransitioning && video.currentTime >= video.duration - 2.5) {
          startTransition()
        }
      }

      video1.addEventListener('timeupdate', handleTimeUpdate)
      video2.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        video1.removeEventListener('timeupdate', handleTimeUpdate)
        video2.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }

    const cleanup = setupVideoPlayback()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (cleanup) cleanup()
    }
  }, [activeVideo, isTransitioning])

  // Function to handle the transition between videos
  const startTransition = () => {
    setIsTransitioning(true)

    const currentVideo = activeVideo === 1 ? video1Ref.current : video2Ref.current
    const nextVideo = activeVideo === 1 ? video2Ref.current : video1Ref.current

    if (!currentVideo || !nextVideo) return

    // Start the next video from the beginning
    nextVideo.currentTime = 0
    nextVideo.play().catch(e => console.error(`Error playing video ${activeVideo === 1 ? 2 : 1}:`, e))

    // Very slow and smooth crossfade (2 seconds)
    let opacity = 0
    nextVideo.style.opacity = '0'

    // Start with a delay to ensure the next video has loaded its first frame
    setTimeout(() => {
      const fadeInterval = setInterval(() => {
        opacity += 0.01 // Very small increments for smoothness

        if (opacity >= 1) {
          clearInterval(fadeInterval)
          currentVideo.style.opacity = '0'
          nextVideo.style.opacity = '1'
          setActiveVideo(activeVideo === 1 ? 2 : 1)
          setIsTransitioning(false)
        } else {
          nextVideo.style.opacity = opacity.toString()
        }
      }, 20) // 20ms intervals (50 steps per second)
    }, 100)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background with Smooth Crossfade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* First video */}
        <video
          ref={video1Ref}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000"
          muted
          playsInline
          src="/bg.mp4"
          style={{ opacity: activeVideo === 1 ? '1' : '0' }}
        />

        {/* Second video (identical but offset in timing) */}
        <video
          ref={video2Ref}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-2000"
          muted
          playsInline
          src="/bg.mp4"
          style={{ opacity: activeVideo === 2 ? '1' : '0' }}
        />

        {/* Gradient overlay to fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
        <div className="flex flex-col items-center mb-4">
          {/* Bolt.new logo */}
          <div className="w-24 h-10 mb-1 relative">
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewBox="0 0 51 21.9"
              className="w-full h-full fill-white"
              aria-label="bolt.new"
            >
              <title>Bolt.new logo</title>
              <path d="M24.1 19.3c-4.7 0-7-2.7-7-6.1s3.2-7.7 7.9-7.7 7 2.7 7 6.1-3.2 7.7-7.9 7.7Zm.2-4.3c1.6 0 2.7-1.5 2.7-3.1s-.8-2-2.2-2-2.7 1.5-2.7 3.1.8 2 2.2 2ZM37 19h-4.9l4-18.2H41l-4 18.1Z" />
              <path d="M9.6 19.3c-1.5 0-3-.5-3.8-1.7L5.5 19 0 21.9.6 19 4.6.8h4.9L8.1 7.2c1.1-1.2 2.2-1.7 3.6-1.7 3 0 4.9 1.9 4.9 5.5s-2.3 8.3-7 8.3Zm1.9-7.3c0 1.7-1.2 3-2.8 3s-1.7-.3-2.2-.9l.8-3.3c.6-.6 1.2-.9 2-.9 1.2 0 2.2.9 2.2 2.2Z" style={{ fillRule: 'evenodd' }} />
              <path d="M46.1 19.3c-2.8 0-4.9-1-4.9-3.3s0-.7.1-1l1.1-4.9h-2.2l1-4.2h2.2l.8-3.6L49.7 0l-.6 2.3-.8 3.6H51l-1 4.2h-2.7l-.7 3.2v.6c0 .6.4 1.1 1.2 1.1s.6 0 .7-.1v3.9c-.5.4-1.4.5-2.3.5Z" />
            </motion.svg>
          </div>
          <span className="text-md text-gray-400 mb-2">
            <TextEffect per='word' preset='blur' speedReveal={1} className='mt-4' segmentWrapperClassName=''>
              presents
            </TextEffect>
          </span>
        </div>

        {/* Main Hero Text */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center text-white mb-6 max-w-4xl font-eb-garamond font-medium">
          <TextEffect per='word' preset='blur' speedReveal={1} className='mt-4' delay={0.4}>
            World's Largest Hackathon
          </TextEffect>
        </h1>

        {/* Optional: Add description */}
        <span className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
          <TextEffect per='word' preset='blur' speedReveal={1} delay={0.6}>
            Show us what you got!
          </TextEffect>
        </span>

        {/* Optional: CTA Button */}
        <Cta cta="Register Now" cols={22} rows={5} />
      </div>
    </div>
  )
}

export default Hero