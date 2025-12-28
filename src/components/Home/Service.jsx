"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ServicesSection({
  imageSrc = "/f7.png",
  category = "Classic",
  title = "Facade Design Services And Much More...",
  description = "",
  services = [],
  bgImages = [],
  imagePosition = "left", // "left" | "right"
}) {
  const sectionRef = useRef(null);

  /* -------------------------------
     Scroll Parallax
  -------------------------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  /* -------------------------------
     Background Logic
  -------------------------------- */
  const [currentBg, setCurrentBg] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (!bgImages.length || hoveredIndex !== null) return;

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [bgImages.length, hoveredIndex]);

  const activeBgIndex =
    hoveredIndex !== null
      ? hoveredIndex % bgImages.length
      : currentBg;

  /* -------------------------------
     Render
  -------------------------------- */
  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[110vh] flex items-center px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background */}
      {bgImages.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBgIndex}
            className="absolute inset-0 z-0"
            style={{ y: bgY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={bgImages[activeBgIndex]}
              alt="Background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div
          className={`relative h-[80vh] rounded-md overflow-hidden ${
            imagePosition === "right" ? "md:order-2" : "md:order-1"
          }`}
          whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
          animate={{
            y: [0, -10, 0],
            rotateY: [0, 5, -5, 0],
            rotateX: [0, 3, -3, 0],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </motion.div>

        {/* Text */}
        <div
          className={`${
            imagePosition === "right" ? "md:order-1" : "md:order-2"
          }`}
        >
          {category && (
            <motion.p
              className="text-[#b6a68a] mb-4 tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {category}
            </motion.p>
          )}

          {title && (
            <motion.h2
              className="font-serif text-white text-4xl mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
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
              className="text-gray-300 mb-10 max-w-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {description}
            </motion.p>
          )}

          {/* Services */}
          {services.length > 0 && (
            <motion.ul
              className="space-y-3 text-sm max-w-sm"
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
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer p-3 rounded-md bg-black/25 backdrop-blur-sm hover:bg-[#b6a68a]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 14,
                  }}
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
