"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

import HeroSection from "../../components/Home/Hero.jsx"
import KeywordsSection from "../../components/Home/Keyword.jsx"
import ServicesSection from "../../components/Home/Service.jsx"


const blogs = [
  {
    title: "The Role of Art in Luxury Interior Design",
    image: "/b1.png",
    link: "/Blog/role-of-art-in-luxury-interior-design",
  },
  {
    title: "Color Palettes for Interiors: The Guide",
    image: "/b2.png",
    link: "/Blog/color-palettes-for-interiors-guide",
  },
  {
    title: "Small Touches that Make an Impact in Design",
    image: "/b3.png",
    link: "/Blog/small-touches-impact-design",
  },
  {
    title: "The Role of Art in Luxury Interior Design",
    image: "/b4.png",
    link: "/Blog/role-of-art-in-luxury-interior-design-2",
  },
  {
    title: "Minimal Luxury: Less is More",
    image: "/b5.png",
    link: "/Blog/minimal-luxury-less-is-more",
  },
  {
    title: "How Lighting Changes Interior Mood",
    image: "/b6.png",
    link: "/Blog/how-lighting-changes-interior-mood",
  },
]

export default function BlogPage() {
  const BLOGS_PER_LOAD = 4
  const [visible, setVisible] = useState(BLOGS_PER_LOAD)

  return (
    <main className="bg-[#111] text-[#eae7e2] overflow-hidden">

    
      <HeroSection imageSrc="/85.webp" title="Our Blog" />

      {/* KEYWORDS */}
      <KeywordsSection
        keywords={["LUXURY", "CRAFTSMANSHIP", "ELEGANCE", "OPULENCE", "MAJESTIC"]}
      />

      {/* FEATURED */}
      <ServicesSection
        imageSrc="/74.webp"
        category="Featured Post"
        title="Timeless Facade Design"
        bgImages={["/71.webp", "/72.webp", "/73.webp"]}
        imagePosition="right"
        description="With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are."
      />

      {/* BLOG GRID */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] text-stone-400 mb-4">
              Design Journal
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Latest Posts
            </h2>
          </div>

          {/* GRID */}
          <AnimatePresence>
            <div className="grid gap-10 md:grid-cols-2">
              {blogs.slice(0, visible).map((blog, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#161616] p-6 md:p-8"
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl mb-6 text-center">
                    {blog.title}
                  </h3>

                  {/* NAVIGATION */}
                  <div className="text-center">
                    <Link
                      href={blog.link}
                      className="text-xs uppercase tracking-[0.25em] text-stone-400 hover:text-stone-200 transition"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>

          {/* LOAD MORE */}
          <div className="mt-20 flex justify-center gap-10">
            {visible < blogs.length && (
              <button
                onClick={() => setVisible(blogs.length)}
                className="text-xs uppercase tracking-[0.3em] text-stone-400 hover:text-white transition"
              >
                See All
              </button>
            )}

            {visible > BLOGS_PER_LOAD && (
              <button
                onClick={() => setVisible(BLOGS_PER_LOAD)}
                className="text-xs uppercase tracking-[0.3em] text-stone-400 hover:text-white transition"
              >
                See Less
              </button>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}
