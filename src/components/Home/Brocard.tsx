"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ImageCardProps {
  src: string
  alt: string
  label: string
  isHovered: boolean
  onClick: () => void
}

export function ImageCard({
  src,
  alt,
  label,
  isHovered,
  onClick,
}: ImageCardProps) {
  return (
    <motion.div
      className="relative w-full h-full overflow-hidden rounded-2xl perspective-[1200px]"
      whileHover={{
        rotateX: -6,
        rotateY: 6,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{ scale: isHovered ? 1.12 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Gold Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t
          from-[#0b0700]/80 via-[#cb972b]/35 to-transparent"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <motion.div
        className="absolute bottom-6 left-6 right-6"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 12,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={onClick}
          className="
            flex items-center gap-2
            text-[#f9e3aa] text-lg font-light tracking-wide
            border-b border-[#cb972b]/60 w-fit
            hover:text-white hover:border-[#f9e3aa]
            transition-colors duration-200
          "
        >
          {label}
          <motion.span
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            ↗
          </motion.span>
        </button>
      </motion.div>

      {/* Gold Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "0 0 50px rgba(203,151,43,0.35)"
            : "0 0 0 rgba(203,151,43,0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
