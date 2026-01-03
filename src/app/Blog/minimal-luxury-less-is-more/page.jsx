"use client"

import Image from "next/image"
import HeroSection from "../../../components/Home/Hero.jsx"
import KeywordsSection from "../../../components/Home/Keyword.jsx"

export default function MinimalLuxuryBlog() {
  return (
    <main className="bg-[#111] text-[#eae7e2]">

      <HeroSection
        imageSrc="/b5.png"
        title="Minimal Luxury"
        subtitle="Less is truly more."
      />

      <KeywordsSection keywords={["MINIMAL","LUXURY","DESIGN"]} />

      <section className="max-w-3xl mx-auto px-4 py-24 text-center">

        <p className="text-xs tracking-[0.35em] text-gray-400 mb-6">
          APRIL 23, 2025
        </p>

        <h1 className="font-serif text-4xl mb-14">
          Minimal Luxury
        </h1>

        <p className="text-gray-300 mb-16">
          Minimal luxury balances restraint and refinement, allowing spaces to breathe.
        </p>

        <Image src="/blog1.png" width={320} height={420} className="mx-auto mb-20 rounded-xl" alt="" />

        <blockquote className="italic font-serif text-xl mb-16">
          “Simplicity is the ultimate sophistication.”
        </blockquote>

      </section>
    </main>
  )
}
