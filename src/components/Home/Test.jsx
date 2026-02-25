"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      >
        <Image
          src="/02.jpeg"
          alt="Testimonial Background"
          fill
          priority
          className="object-cover blur-sm"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            font-serif
            font-semibold
            text-lg sm:text-xl
            leading-relaxed
            max-w-3xl mx-auto
            text-[#cb972b]
            hover:text-[#f9e3aa]
            transition-colors duration-300
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
          "
        >
          At Facadewala, we design and deliver high-end facades that elevate
          exteriors into powerful, majestic statements of architecture.
        </motion.p>
      </div>
    </section>
  );
}
