'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface CarouselImage {
  id: number
  src: string
  alt: string
  title?: string
  description?: string
}

// You can replace these with actual mosque images
const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: '/DA5C2A29-AE2A-4533-B542-05FD2BA6CEC6.jpeg',
    alt: 'MCSI Mosque Image 1',
    title: 'Our Community',
    description: 'Join us for prayer, Jumu\'ah, and more'
  },
  {
    id: 2,
    src: '/38B93C94-D03C-46BE-A453-EF78A7E61877.jpeg',
    alt: 'MCSI Mosque Image 2',
    title: 'Faith & Fellowship',
    description: 'Building connections through faith, fellowship, and service'
  }
]

export default function WelcomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Ensure currentIndex is always within bounds
  useEffect(() => {
    if (currentIndex >= carouselImages.length) {
      setCurrentIndex(0)
    }
  }, [currentIndex])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    if (index >= 0 && index < carouselImages.length) {
      setCurrentIndex(index)
    }
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)
  }

  // Safety check to ensure we have a valid current image
  const currentImage = carouselImages[currentIndex]
  if (!currentImage) {
    return <div className="relative w-full h-96 md:h-[500px] bg-gray-300 rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Loading images...</p>
    </div>
  }

  return (
    <div 
      className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Main carousel container */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background image with overlay */}
            <div className="relative w-full h-full">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                quality={75}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Carousel text overlay */}
            <div className="absolute bottom-8 sm:bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 text-white">
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2"
              >
                {currentImage.title}
              </motion.h3>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90"
              >
                {currentImage.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label="Next image"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide indicators - on the image only */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 