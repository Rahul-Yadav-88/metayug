"use client"

import Image from "next/image"
import HeroSection from "../../../components/Home/Hero.jsx"
import KeywordsSection from "../../../components/Home/Keyword.jsx"

export default function LightingMoodBlog() {
  return (
    <main className="bg-[#111] text-[#eae7e2]">

      <HeroSection
        imageSrc="/b6.png"
        title="How Lighting Changes Interior Mood"
        subtitle="Illuminating luxury through design."
      />

      <KeywordsSection keywords={["LIGHTING","MOOD","INTERIOR"]} />

      <section className="max-w-3xl mx-auto px-4 py-24 text-center">

        <p className="text-xs tracking-[0.35em] text-gray-400 mb-6">
          APRIL 23, 2025
        </p>

        <h1 className="font-serif text-4xl mb-14">
          How Lighting Changes Interior Mood
        </h1>

        <p className="text-gray-300 mb-16">
          Lighting transforms perception, atmosphere, and emotion within spaces.
        </p>

        <Image src="/blog1.png" width={320} height={420} className="mx-auto mb-20 rounded-xl" alt="" />

        <blockquote className="italic font-serif text-xl mb-16">
          “Light reveals the soul of design.”
        </blockquote>

      </section>
    </main>
  )
}
