"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServicesSection({
  imageSrc = "/f7.png",
  category = "Classic",
  title = "Facade Design Services And Much More...",
  description = "",
  services = [],
  bgImages = ["/h6.webp", "/h2.webp", "/h7.webp"], // array of background images
}) {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [currentBg, setCurrentBg] = useState(0);

  // Auto-rotate background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <motion.section
      className="relative min-h-[110vh] flex items-center px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background parallax with fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          className="absolute inset-0 z-0"
          style={{ y: bgY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={bgImages[currentBg]}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Image with 3D tilt and floating effect */}
        <motion.div
          className="relative h-[80vh] rounded-md overflow-hidden"
          whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
          animate={{
            y: [0, -10, 0],        // floating up and down
            rotateY: [0, 5, -5, 0], // slow Y rotation
            rotateX: [0, 3, -3, 0], // slow X rotation
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
            rotateY: { duration: 12, repeat: Infinity, repeatType: "loop", ease: "linear" },
            rotateX: { duration: 10, repeat: Infinity, repeatType: "loop", ease: "linear" },
          }}
        >
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-md" />
        </motion.div>

        {/* Content */}
        <div>
          {category && (
            <motion.p
              className="text-[#b6a68a] mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {category}
            </motion.p>
          )}

          {title && (
            <motion.h2
              className="font-serif text-4xl mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h2>
          )}

          {description && (
            <motion.p
              className="text-gray-300 mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}

          {services.length > 0 && (
            <motion.ul
              className="space-y-3 text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {services.map((service, i) => (
                <motion.li
                  key={i}
                  className="cursor-pointer p-2 rounded-md bg-black/20 hover:bg-[#b6a68a]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                >
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.section>
  );
}
