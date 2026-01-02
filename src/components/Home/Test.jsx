"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      >
        <Image src="/h3.webp" alt="Testimonial" fill className="object-cover" />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-xl max-w-3xl mx-auto mb-10 text-white"
        >
         At Facadewala, we design and deliver high-end facades that elevate exteriors into powerful, majestic statements of architecture.
        </motion.p>
      </div>
    </section>
  );
}
