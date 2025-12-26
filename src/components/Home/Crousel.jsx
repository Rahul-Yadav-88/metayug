"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CAROUSEL_ITEMS = [
  {
    id: 1,
    image: "/f2.png",
    alt: "Luxury interior with warm lighting",
  },
  {
    id: 2,
    image: "/f5.png",
    alt: "Elegant living room with furniture",
  },
  {
    id: 3,
    image: "/f4.png",
    alt: "Sophisticated interior with patterns",
  },
]

export function InteriorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === CAROUSEL_ITEMS.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_ITEMS.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === CAROUSEL_ITEMS.length - 1 ? 0 : prev + 1))
  }

  const getItemAtPosition = (offset) => {
    const index = (currentIndex + offset + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length
    return CAROUSEL_ITEMS[index]
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-6 md:gap-12">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 z-30 p-3 hover:bg-zinc-900 rounded-lg transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-amber-50" />
        </button>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left Image - Small */}
          <div
            className="w-32 h-40 md:w-40 md:h-48 rounded-lg overflow-hidden flex-shrink-0 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={goToPrevious}
          >
            <img
              src={getItemAtPosition(-1).image || "/placeholder.svg"}
              alt={getItemAtPosition(-1).alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Image - Large */}
          <div className="w-48 h-64 md:w-96 md:h-80 rounded-lg overflow-hidden flex-shrink-0 shadow-2xl">
            <img
              src={getItemAtPosition(0).image || "/placeholder.svg"}
              alt={getItemAtPosition(0).alt}
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />
          </div>

          {/* Right Image - Small */}
          <div
            className="w-32 h-40 md:w-40 md:h-48 rounded-lg overflow-hidden flex-shrink-0 opacity-60 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={goToNext}
          >
            <img
              src={getItemAtPosition(1).image || "/placeholder.svg"}
              alt={getItemAtPosition(1).alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 z-30 p-3 hover:bg-zinc-900 rounded-lg transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-amber-50" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {CAROUSEL_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-amber-600 w-8" : "bg-zinc-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
export default InteriorCarousel;