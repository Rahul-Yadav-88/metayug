"use client"

import { useState } from "react"
import { ImageCard } from "./Brocard"
import DownloadBrochureModal from "./DownloadBrochureModal"

const GOLD = "#cb972b"
const GOLD_LIGHT = "#f9e3aa"

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [open, setOpen] = useState(false)

  const images = [
    {
      id: 1,
      src: "/fff.jpeg",
      label: "Form",
      alt: "Palm fronds with geometric striped architecture",
    },
    {
      id: 2,
      src: "/h1.jpeg",
      label: "Function",
      alt: "Modern building with ribbed metal exterior and glass",
    },
    {
      id: 3,
      src: "/h2.jpeg",
      label: "Parametric",
      alt: "Pyramid-shaped building against clear blue sky",
    },
    {
      id: 4,
      src: "/h3.jpeg",
      label: "Surface",
      alt: "Grid of copper and ceramic circular tiles with texture",
    },
  ]

  return (
    <main className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1
          className="text-5xl font-light text-center mb-14"
          style={{ color: GOLD }}
        >
          Our Brochures
          <span
            className="block mt-3 text-sm tracking-widest uppercase"
            style={{ color: GOLD_LIGHT }}
          >
            Explore Architectural Innovation
          </span>
        </h1>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative rounded-2xl overflow-hidden aspect-square ring-1"
              style={{ borderColor: GOLD }}
            >
              <ImageCard
                src={image.src}
                alt={image.alt}
                label={image.label}
                isHovered={false}
                onClick={() => setOpen(true)}
              />
            </div>
          ))}
        </div>

        {/* Desktop Hover Layout */}
        <div className="hidden md:flex gap-5 lg:gap-6 h-80 lg:h-96">
          {images.map((image, index) => {
            const isHovered = hoveredIndex === index

            return (
              <div
                key={image.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-out
                  ${
                    hoveredIndex === null
                      ? "flex-1"
                      : isHovered
                      ? "flex-[3]"
                      : "flex-1"
                  }
                `}
                style={{
                  boxShadow: isHovered
                    ? `0 20px 60px rgba(203,151,43,0.35)`
                    : "none",
                }}
              >
                <ImageCard
                  src={image.src}
                  alt={image.alt}
                  label={image.label}
                  isHovered={isHovered}
                  onClick={() => setOpen(true)}
                />

                {/* Gold overlay glow */}
                {isHovered && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(203,151,43,0.15), transparent)",
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <DownloadBrochureModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </main>
  )
}
