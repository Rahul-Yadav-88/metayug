"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import HeroSection from "../../../components/Home/Hero.jsx"
import KeywordsSection from "../../../components/Home/Keyword.jsx"

const posts = [
  {
    id: 1,
    slug: "role-of-art-in-luxury-interior-design",
    title: "The Role of Art in Luxury Interior Design",
    date: "APRIL 23, 2025",
    heroImage: "/b1.png",
    contentImage: "/blog1.png",
    quote: "The details are not the details. They make the design.",
    paragraphs: [
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste.",
      "The placement of art in a luxury interior is equally important. A carefully curated gallery wall or oversized painting can define a room’s atmosphere.",
      "In addition to its visual impact, art reflects the homeowner’s values, interests, and life experiences.",
      "In conclusion, art enhances emotional connection, aesthetic appeal, and sophistication in luxury spaces."
    ]
  },
  {
    id: 2,
    slug: "color-palettes-for-interiors-guide",
    title: "The Role of Art in Luxury Interior Design",
    date: "APRIL 23, 2025",
    heroImage: "/b1.png",
    contentImage: "/blog1.png",
    quote: "The details are not the details. They make the design.",
    paragraphs: [
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste.",
      "The placement of art in a luxury interior is equally important. A carefully curated gallery wall or oversized painting can define a room’s atmosphere.",
      "In addition to its visual impact, art reflects the homeowner’s values, interests, and life experiences.",
      "In conclusion, art enhances emotional connection, aesthetic appeal, and sophistication in luxury spaces."
    ]
  },
  {
    id: 3,
    slug: "small-touches-impact-design",
    title: "The Role of Art in Luxury Interior Design",
    date: "APRIL 23, 2025",
    heroImage: "/b1.png",
    contentImage: "/blog1.png",
    quote: "The details are not the details. They make the design.",
    paragraphs: [
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste.",
      "The placement of art in a luxury interior is equally important. A carefully curated gallery wall or oversized painting can define a room’s atmosphere.",
      "In addition to its visual impact, art reflects the homeowner’s values, interests, and life experiences.",
      "In conclusion, art enhances emotional connection, aesthetic appeal, and sophistication in luxury spaces."
    ]
  },
  {
    id: 4,
    slug: "role-of-art-in-luxury-interior-design-2",
    title: "The Role of Art in Luxury Interior Design",
    date: "APRIL 23, 2025",
    heroImage: "/b1.png",
    contentImage: "/blog1.png",
    quote: "The details are not the details. They make the design.",
    paragraphs: [
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste.",
      "The placement of art in a luxury interior is equally important. A carefully curated gallery wall or oversized painting can define a room’s atmosphere.",
      "In addition to its visual impact, art reflects the homeowner’s values, interests, and life experiences.",
      "In conclusion, art enhances emotional connection, aesthetic appeal, and sophistication in luxury spaces."
    ]
  },
  {
    id: 5,
    slug: "minimal-luxury-less-is-more",
    title: "The Role of Art in Luxury Interior Design",
    date: "APRIL 23, 2025",
    heroImage: "/b1.png",
    contentImage: "/blog1.png",
    quote: "The details are not the details. They make the design.",
    paragraphs: [
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste.",
      "The placement of art in a luxury interior is equally important. A carefully curated gallery wall or oversized painting can define a room’s atmosphere.",
      "In addition to its visual impact, art reflects the homeowner’s values, interests, and life experiences.",
      "In conclusion, art enhances emotional connection, aesthetic appeal, and sophistication in luxury spaces."
    ]
  },
  {
    id: 6,
    slug: "how-lighting-changes-interior-mood",
    title: "The Role of Art in Luxury Interior Design",
    date: "APRIL 23, 2025",
    heroImage: "/b1.png",
    contentImage: "/blog1.png",
    quote: "The details are not the details. They make the design.",
    paragraphs: [
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste.",
      "The placement of art in a luxury interior is equally important. A carefully curated gallery wall or oversized painting can define a room’s atmosphere.",
      "In addition to its visual impact, art reflects the homeowner’s values, interests, and life experiences.",
      "In conclusion, art enhances emotional connection, aesthetic appeal, and sophistication in luxury spaces."
    ]
  },
]

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageRotate = useTransform(scrollYProgress, [0, 1], [-6, 6])
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80])

  if (!post) {
    return <p className="text-center py-20 text-white">Post not found</p>
  }

  return (
    <main className="bg-[#111] text-[#eae7e2] min-h-screen overflow-hidden">

      {/* HERO */}
      <HeroSection
        imageSrc="/h4.webp"
        title="Facade and luxury interior design—tailored exclusively for you."
        subtitle="We create interiors that inspire, comfort, and elevate everyday living."
        buttonText="Explore"
        showButton
      />

      {/* KEYWORDS */}
      <KeywordsSection
        keywords={["LUXURY", "CRAFTSMANSHIP", "ELEGANCE", "OPULENCE", "MAJESTIC"]}
      />

      {/* BLOG CONTENT */}
      <section
        ref={sectionRef}
        className="relative bg-[#111] px-4 py-24 perspective-[1600px]"
      >
        <div className="max-w-3xl mx-auto text-center">

          {/* DATE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.35em] text-gray-400 mb-6"
          >
            {post.date}
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-14"
          >
            {post.title}
          </motion.h1>

          {/* INTRO TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-300 leading-relaxed mb-16"
          >
            {post.paragraphs.join(" ")}
          </motion.p>

          {/* 3D IMAGE */}
          <motion.div
            style={{ rotateX: imageRotate, y: imageY }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="flex justify-center mb-20"
          >
            <Image
              src={post.contentImage}
              alt="Luxury interior"
              width={300}
              height={400}
              className="rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* QUOTE */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="italic text-lg sm:text-xl font-serif text-gray-200 mb-16"
          >
            “{post.quote}”
          </motion.blockquote>

          {/* FINAL CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed"
          >
            <p>
              In addition to its visual impact, art in luxury interior design
              often reflects the homeowner’s values, interests, or life
              experiences. Art becomes storytelling.
            </p>

            <p>
              In conclusion, art plays a multifaceted role in luxury interior
              design by enhancing aesthetic appeal, emotional connection,
              and individuality.
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  )
}