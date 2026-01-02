"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"

export default function MaterialCraftsmanshipSection({
  image,
  title,
  description,
}) {
  const containerRef = useRef(null)

  // Mouse-based 3D motion
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [12, -12])
  const rotateY = useTransform(x, [-100, 100], [-12, 12])

  function handleMouseMove(e) {
    const rect = containerRef.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx)
    y.set(dy)
  }

  function resetMouse() {
    x.set(0)
    y.set(0)
  }

  return (
    <section className="relative bg-black py-20 px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ perspective: 2000 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* IMAGE */}
          <div className="relative h-[520px] overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover scale-110"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative bg-[#1c1c1c] flex items-center px-12 py-16">
            {/* Floating border */}
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl md:text-3xl font-serif text-gray-200 mb-8 leading-snug">
                {title}
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {description}
              </p>

              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="h-[1px] bg-gray-300/40 mt-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
