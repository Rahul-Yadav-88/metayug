"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FounderIntro({ imageSrc, name, role = "", description, buttons = [] }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateLimit = 15; // max degrees
    setRotateY(((x - centerX) / centerX) * rotateLimit);
    setRotateX(((centerY - y) / centerY) * rotateLimit);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image with 3D tilt */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
          className="relative h-[420px] w-[450px] rounded-tl-[180px] overflow-hidden cursor-pointer shadow-2xl"
        >
          <Image src={imageSrc} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-tl-[180px]" />
        </motion.div>

        {/* Text content with fade-in */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {role && <p className="text-[#b6a68a] mb-4">{role}</p>}
          <h2 className="font-serif text-4xl mb-6">{name}</h2>
          <p className="text-gray-300 leading-relaxed mb-10">{description}</p>
          <div className="flex gap-4">
            {buttons.map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95, rotate: -2 }}
                onClick={btn.action}
                className={`${btn.bg ? btn.bg : "bg-[#b6a68a]"} ${btn.textColor ? btn.textColor : "text-black"} px-6 py-3 text-xs uppercase shadow-lg`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
