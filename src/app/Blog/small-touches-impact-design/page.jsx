"use client"

import Image from "next/image"
import HeroSection from "../../../components/Home/Hero.jsx"
import KeywordsSection from "../../../components/Home/Keyword.jsx"

export default function SmallTouchesBlog() {
  return (
    <main className="bg-[#111] text-[#eae7e2] min-h-screen">

      <HeroSection
        imageSrc="/b3.png"
        title="Small Touches That Make an Impact"
        subtitle="Details that elevate interiors."
      />

      <KeywordsSection keywords={["DETAILS","DESIGN","LUXURY"]} />

      <section className="max-w-3xl mx-auto px-4 py-24 text-center">

        <p className="text-xs tracking-[0.35em] text-gray-400 mb-6">
          APRIL 23, 2025
        </p>

        <h1 className="font-serif text-4xl mb-14">
          Small Touches That Make an Impact
        </h1>

        <p className="text-gray-300 mb-16">
          From lighting accents to textures, subtle design choices leave
          lasting impressions.
        </p>

        <Image src="/blog1.png" width={320} height={420} className="mx-auto mb-20 rounded-xl" alt="" />

        <blockquote className="italic font-serif text-xl mb-16">
          “Luxury is attention to detail.”
        </blockquote>

        <div className="space-y-6 text-gray-300 text-left">
          <p>Small enhancements define sophistication.</p>
          <p>Design excellence lives in the details.</p>
        </div>

      </section>
    </main>
  )
}
