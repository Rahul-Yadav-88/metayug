"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ImageCard({ title, image, link }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />

        {/* Gold overlay on hover */}
        <div className="absolute inset-0 bg-[#cb972b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="mt-4 md:mt-6">
        <motion.h3
          className="text-lg md:text-xl font-serif text-[#f9e3aa] transition-colors duration-300 group-hover:text-[#cb972b]"
          whileHover={{ color: "#cb972b" }}
        >
          {title}
        </motion.h3>

        <Link
          href={link}
          className="mt-2 inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.25em] uppercase text-gray-400 transition-all duration-300 group-hover:text-[#cb972b]"
        >
          Details
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
