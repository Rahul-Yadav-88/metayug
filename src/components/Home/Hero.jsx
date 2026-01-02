"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({
  imageSrc = "/h4.webp",
  title = "Default Hero Title",
  subtitle = "",
  buttonText = "Explore",
  buttonLink = "#", // URL for the button
  showButton = true,
}) {
  return (
    <section className="relative h-[84vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with slow zoom */}
      <motion.img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-snug">
          {title}
        </h1>

        {subtitle && (
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Button as Link */}
        {showButton && buttonText && (
          <motion.div
            whileHover={{ scale: 1.08 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <Link
              href="/Contact"
              className="bg-[#b6a68a] text-black px-6 py-3 uppercase tracking-widest inline-block"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
