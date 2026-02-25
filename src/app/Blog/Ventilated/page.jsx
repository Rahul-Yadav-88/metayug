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

export default function VentilatedFacadeBlog() {
  return (
    <main className="bg-[#111] text-[#eae7e2]">

      {/* Hero */}
      <HeroSection
        imageSrc="/24.png"
        title="Ventilated Facades"
        subtitle="The future of energy-efficient buildings."
                  buttonLink="/Contact"

      />

      {/* Keywords */}
      <KeywordsSection
        keywords={[
          "VENTILATED FACADE",
          "ENERGY EFFICIENCY",
          "SUSTAINABLE DESIGN",
        ]}
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
          MAY 05, 2025
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
          Ventilated Facades: The Future of Energy-Efficient Buildings
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 mb-14 text-center leading-relaxed"
        >
          Ventilated facades are redefining modern architecture by combining
          advanced thermal performance with striking exterior design.
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
            src="/15.jpeg"
            width={900}
            height={520}
            className="rounded-xl"
            alt="Ventilated facade system on modern building"
          />

          {/* Gold Glow Overlay */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none
            bg-gradient-to-tr from-[#cb972b]/10 via-transparent to-[#f9e3aa]/10"
          />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="italic font-serif text-xl mb-20 text-center text-[#f9e3aa]
          drop-shadow-[0_0_20px_rgba(249,227,170,0.25)]"
        >
          “Architecture breathes best when buildings are designed to breathe.”
        </motion.blockquote>

        {/* Content Sections */}
        {[
          {
            title: "What Is a Ventilated Facade?",
            content:
              "A ventilated facade is a multi-layered exterior system that creates an air cavity between the structural wall and the outer cladding. This cavity enables airflow that reduces heat buildup and moisture accumulation.",
          },
          {
            title: "How Ventilated Facades Work",
            content:
              "Ventilated facades operate on the chimney effect. Warm air rises and exits at the top, drawing cooler air from below. This continuous circulation stabilizes indoor temperatures and reduces reliance on mechanical cooling.",
          },
          {
            title: "Key Advantages of Ventilated Facade Systems",
            content:
              "Ventilated facade systems improve thermal insulation, protect against moisture and condensation, enhance acoustic comfort, and significantly reduce energy consumption while extending building lifespan.",
          },
          {
            title: "Materials Used in Ventilated Facades",
            content:
              "Our designs utilize premium metal panels and sheets, ensuring superior strength, long-lasting performance, and a sleek, modern aesthetic.",
          },
          {
            title: "Sustainability and Environmental Impact",
            content:
              "By lowering heating and cooling demands, ventilated facades reduce carbon emissions and support green certifications such as LEED and IGBC, making them a sustainable choice for modern construction.",
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
            <h2
              className="font-serif text-2xl mb-6 text-[#cb972b]
              drop-shadow-[0_0_15px_rgba(203,151,43,0.3)]"
            >
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
