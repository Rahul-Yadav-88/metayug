"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";

export default function BachelorPad() {
  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white overflow-hidden relative">
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#cb972b]/10 via-[#f9e3aa]/5 to-transparent pointer-events-none"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
                  buttonLink="/Contact"

      >
        <HeroSection
          imageSrc="/37.webp"
          title="Residential Facade Design"
          subtitle="Minimal, masculine, and modern living spaces."
        />
      </motion.div>

      {/* Keywords */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <KeywordsSection
          keywords={["Bespoke Architecture · Crafted with Precision"]}
        />
      </motion.div>

      {/* Intro Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-serif mb-10 text-[#cb972b]"
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Residential Facade Design
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-b border-[#cb972b]/30 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            We design elegant and modern residential facades that enhance the beauty and character of your home. Our designs focus on aesthetics, functionality, and durability, creating a welcoming exterior that reflects your lifestyle and complements the surrounding environment.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-[#f9e3aa]/70 mb-2">
                Service Type
              </p>
              <motion.p
                className="text-[#f9e3aa]"
                whileHover={{ color: "#cb972b", scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Residential Interior
              </motion.p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-[#f9e3aa]/70 mb-2">
                Features
              </p>
              <motion.p
                className="text-[#f9e3aa]"
                whileHover={{ color: "#cb972b", scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Smart Storage, Minimal Decor, Neutral Palette
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Gallery 1 */}
      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {["/17.png", "/22.png"].map((img, i) => (
          <motion.div
            key={i}
            className="w-full h-[620px] perspective-[1000px]"
            style={{ x, y, rotateX, rotateY }}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Image
              src={img}
              width={600}
              height={620}
              className="w-full h-full object-cover rounded-xl shadow-lg shadow-[#cb972b]/30"
              alt={`Gallery image ${i + 1}`}
            />
          </motion.div>
        ))}
      </motion.section>

      {/* Image Gallery 2 */}
      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {["/19.png", "/24.png", "/27.png"].map((img, i) => (
          <motion.div
            key={i}
            className="w-full h-[380px] perspective-[1000px]"
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Image
              src={img}
              width={400}
              height={380}
              className="w-full h-full object-fill rounded-lg shadow-md shadow-[#cb972b]/30"
              alt={`Gallery image ${i + 3}`}
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
