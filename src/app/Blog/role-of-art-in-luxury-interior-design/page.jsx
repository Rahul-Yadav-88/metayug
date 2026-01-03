"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import HeroSection from "../../../components/Home/Hero.jsx"
import KeywordsSection from "../../../components/Home/Keyword.jsx"

export default function ColorPalettesBlog() {
  return (
    <main className="bg-[#111] text-[#eae7e2] min-h-screen overflow-hidden">

      <HeroSection
        imageSrc="/b2.png"
        title="Color Palettes for Interiors"
        subtitle="Choosing tones that define elegance and mood."
      />

      <KeywordsSection keywords={["LUXURY","COLOR","DESIGN","INTERIORS"]} />

      <section className="px-4 py-24 max-w-3xl mx-auto text-center">

        <p className="text-xs tracking-[0.35em] text-gray-400 mb-6">
          APRIL 23, 2025
        </p>

        <h1 className="font-serif text-4xl md:text-5xl mb-14">
          Color Palettes for Interiors
        </h1>

        <p className="text-gray-300 leading-relaxed mb-16">
          Color palettes play a defining role in shaping the emotion and
          personality of interior spaces. Thoughtful combinations elevate
          luxury interiors.
        </p>

        <Image
          src="/blog1.png"
          width={320}
          height={420}
          className="mx-auto rounded-xl mb-20"
          alt=""
        />

        <blockquote className="italic font-serif text-xl mb-16">
          “Color is a power which directly influences the soul.”
        </blockquote>

        <div className="space-y-6 text-gray-300 text-left">
          <p>
            Neutral palettes create timeless elegance while bold hues add
            character and vibrancy.
          </p>
          <p>
            Layering shades and textures ensures depth and harmony within
            interiors.
          </p>
        </div>

      </section>
    </main>
  )
}
