"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Crou from "./Crousel.jsx";

export default function AboutShowcase({
  imageSrc,
  text,
  showCarousel = true,
}) {
  return (
    <section className="relative h-[83vh] flex items-center justify-center py-4 overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      >
        <Image
          src={imageSrc}
          alt="Showcase Background"
          fill
          priority
          className="object-cover brightness-[0.45] blur-sm"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            font-serif
            text-xl sm:text-2xl
            leading-relaxed
            mb-6
            text-[#cb972b]
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]
          "
        >
          {text}
        </motion.p>

        {showCarousel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="mt-6"
          >
            <Crou />
          </motion.div>
        )}
      </div>
    </section>
  );
}
