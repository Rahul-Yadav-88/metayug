"use client";

import { motion } from "framer-motion";

export default function MaterialCraftsmanshipSection({
  image,
  title,
  description,
  imagePosition = "left",
}) {
  const isImageRight = imagePosition === "right";

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#cb972b]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-[#f9e3aa]/10 rounded-full blur-[120px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* 🔑 ONLY THIS HAS RADIUS */}
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl">
          {/* IMAGE */}
          <div
            className={`relative h-[520px] overflow-hidden group ${
              isImageRight ? "md:order-2" : "md:order-1"
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </div>

          {/* CONTENT */}
          <div
            className={`relative bg-gradient-to-r from-[#cb972b] to-[#f9e3aa] flex items-center px-8 md:px-12 py-16 ${
              isImageRight ? "md:order-1" : "md:order-2"
            }`}
          >
            <div className="absolute inset-0 border border-[#cb972b]/20 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: isImageRight ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-5xl font-serif text-black mb-6">
                {title}
              </h2>

              <p className="text-gray-800 text-sm md:text-lg leading-relaxed">
                {description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-[1px] bg-[#cb972b]/70 mt-8"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
