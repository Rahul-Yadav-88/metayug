"use client";

import Image from "next/image";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";
import { motion } from "framer-motion";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fade3D = {
  hidden: { opacity: 0, rotateX: 10, y: 60 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function FacadeBlog() {
  return (
    <main className="bg-[#111] text-[#eae7e2]">

      {/* Hero */}
      <HeroSection
        imageSrc="/27.png"
        title="Modern Facade Design"
        subtitle="Transforming buildings with aesthetics and performance."
                  buttonLink="/Contact"

      />

      {/* Keywords */}
      <KeywordsSection
        keywords={["FACADE DESIGN", "ARCHITECTURE", "MODERN BUILDINGS"]}
      />

      {/* Blog Content */}
      <section className="max-w-3xl mx-auto px-4 py-24 perspective-[1600px]">

        {/* Date */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xs tracking-[0.35em] text-[#cb972b] mb-6 text-center"
        >
          APRIL 23, 2025
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl mb-10 text-center text-[#f9e3aa]
          drop-shadow-[0_0_25px_rgba(203,151,43,0.25)]"
        >
          Modern Facade Design: Transforming Buildings with Aesthetic and Performance
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 mb-14 text-center leading-relaxed"
        >
          A building’s facade is more than its exterior — it defines identity, efficiency,
          and long-term durability.
        </motion.p>

        {/* Feature Image – 3D Gold Card */}
        <motion.div
          variants={fade3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            rotateY: 6,
            rotateX: -6,
            scale: 1.02,
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative mb-20 rounded-xl border border-[#cb972b]/30
          shadow-[0_30px_80px_-20px_rgba(203,151,43,0.25)]"
        >
          <Image
            src="/h2.jpeg"
            width={900}
            height={520}
            className="rounded-xl"
            alt="Modern building facade design"
          />

          {/* Gold Glow Overlay */}
          <div className="absolute inset-0 rounded-xl pointer-events-none
            bg-gradient-to-tr from-[#cb972b]/10 via-transparent to-[#f9e3aa]/10" />
        </motion.div>

        {/* Quote – Luxury Hover */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="italic font-serif text-xl mb-20 text-center text-[#f9e3aa]
          drop-shadow-[0_0_20px_rgba(249,227,170,0.25)]"
        >
          “A facade is the language a building speaks to the world.”
        </motion.blockquote>

        {/* Content Sections */}
        {[
          {
            title: "What Is a Building Facade?",
            content:
              "A facade refers to the outer face of a building and acts as a protective skin. It shields the structure from environmental elements such as heat, rain, wind, and pollution while defining architectural character.",
          },
          {
            title: "Importance of Facade Design in Modern Architecture",
            content:
              "In modern architecture, facade design balances visual appeal with performance. A well-planned facade enhances the overall look of the building while supporting energy efficiency and sustainability.",
          },
          {
            title: "Benefits of a Well-Designed Facade",
            content:
              "Investing in a professionally designed facade adds long-term value. It improves performance, reduces maintenance costs, and increases property value.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-2xl mb-6 text-[#cb972b]
            drop-shadow-[0_0_15px_rgba(203,151,43,0.3)]">
              {item.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}

      </section>
    </main>
  );
}
