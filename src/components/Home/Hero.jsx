"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroSection({
  imageSrc = "/h4.webp", // default image
  title = "Default Hero Title",
  subtitle = "",
  buttonText = "Explore",
  buttonAction = () => {},
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    x.set(e.clientX - window.innerWidth / 2);
    y.set(e.clientY - window.innerHeight / 2);
  };

  return (
    <section
      className="relative h-[84vh] flex items-center justify-center overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
    >
      <motion.img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ rotateX, rotateY }}
      />
      <div className="absolute inset-0 bg-black/65" />
      <motion.div
        className="relative z-10 max-w-4xl text-center px-6"
        style={{ rotateX, rotateY }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-snug">
          {title}
        </h1>
        {subtitle && <p className="text-gray-300 mb-6">{subtitle}</p>}
        {buttonText && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={buttonAction}
            className="bg-[#b6a68a] text-black px-6 py-3 uppercase tracking-widest"
          >
            {buttonText}
          </motion.button>
        )}
      </motion.div>
    </section>
  );
}
