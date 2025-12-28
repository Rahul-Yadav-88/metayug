"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

import KeywordsSection from "../../components/Home/Keyword.jsx"
import ServicesSection from "../../components/Home/Service.jsx"
import HeroSection from "../../components/Home/Hero.jsx"

/* ================= BLOG DATA ================= */
const posts = [
  {
    id: 1,
    title: "The Role of Art in Luxury Interior Design",
    image: "/b1.png",
    slug: "role-of-art-in-luxury-interior-design",
  },
  {
    id: 2,
    title: "Color Palettes for Interiors: The Guide",
    image: "/b2.png",
    slug: "color-palettes-for-interiors-guide",
  },
  {
    id: 3,
    title: "Small Touches that Make an Impact in Design",
    image: "/b3.png",
    slug: "small-touches-impact-design",
  },
  {
    id: 4,
    title: "The Role of Art in Luxury Interior Design",
    image: "/b4.png",
    slug: "role-of-art-in-luxury-interior-design-2",
  },
  {
    id: 5,
    title: "Minimal Luxury: Less is More",
    image: "/b5.png",
    slug: "minimal-luxury-less-is-more",
  },
  {
    id: 6,
    title: "How Lighting Changes Interior Mood",
    image: "/b6.png",
    slug: "how-lighting-changes-interior-mood",
  },
]

/* ================= FLOAT ANIMATION ================= */
const floatAnimation = {
  animate: { y: [0, -14, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
}

export default function BlogPage() {
  const BLOGS_PER_LOAD = 4
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_LOAD)

  const visiblePosts = posts.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BLOGS_PER_LOAD, posts.length))
  }

  const showLess = () => {
    setVisibleCount(BLOGS_PER_LOAD)
  }

  return (
    <main className="bg-[#111] text-[#eae7e2] overflow-hidden">

      {/* ================= HERO ================= */}
      <HeroSection imageSrc="/85.webp" title="Our Blog" />

      {/* ================= KEYWORDS ================= */}
      <KeywordsSection
        keywords={["LUXURY", "CRAFTSMANSHIP", "ELEGANCE", "OPULENCE", "MAJESTIC"]}
      />

      {/* ================= FEATURED ================= */}
      <ServicesSection
        imageSrc="/74.webp"
        category="Featured Post"
        title="Timeless Facade Design"
        bgImages={["/71.webp", "/72.webp", "/73.webp"]}
        imagePosition="right"
        description="With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are."
      />

      {/* ================= LATEST POSTS ================= */}
      <section className="min-h-screen py-24 px-4 perspective-[1600px]">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-400">
              Design Journal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Latest Posts
            </h1>
          </motion.div>

          {/* Grid */}
          <AnimatePresence>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {visiblePosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, rotateX: 25, y: 80 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  whileHover={{
                    rotateY: 8,
                    rotateX: -6,
                    scale: 1.03,
                  }}
                  className="group relative bg-[#161616] p-6 md:p-8 transform-style-preserve-3d"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Floating Image */}
                  <motion.div
                    {...floatAnimation}
                    className="relative mb-6 aspect-[4/3] overflow-hidden border-8 border-stone-900 bg-black"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* Content */}
                  <div
                    className="flex flex-col items-center text-center"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    <h2 className="mb-6 font-serif text-xl md:text-2xl uppercase tracking-wide">
                      {post.title}
                    </h2>

                    <Link
                      href={`/Blog/${post.slug}`}
                      className="text-xs uppercase tracking-[0.25em] text-stone-400 hover:text-stone-200 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>

          {/* ================= SEE ALL / SEE LESS ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-20 flex items-center justify-center gap-10"
          >
            {visibleCount < posts.length && (
              <motion.button
                onClick={loadMore}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs uppercase tracking-[0.3em] text-stone-400 hover:text-stone-200 transition"
              >
                See All
              </motion.button>
            )}

            {visibleCount > BLOGS_PER_LOAD && (
              <motion.button
                onClick={showLess}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs uppercase tracking-[0.3em] text-stone-400 hover:text-stone-200 transition"
              >
                See Less
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 text-center bg-[#0d0d0d]"
      >
        <h4 className="text-xl mb-8 max-w-xl mx-auto">
          Let Us Help Transform Your Living Space into a Masterpiece.
        </h4>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="border px-10 py-4 text-xs tracking-[0.3em] hover:bg-white hover:text-black transition"
        >
          SCHEDULE CONSULTATION
        </motion.button>
      </motion.section>

    </main>
  )
}
