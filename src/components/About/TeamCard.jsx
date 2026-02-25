"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TeamCard({ member, index }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-60, 60], [8, -8]);
  const rotateY = useTransform(mouseX, [-60, 60], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          y: {
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.03 }}
        className="
          relative p-8 w-full max-w-[400px]
          bg-black border border-[#2a2a2a]
          transform-style-preserve-3d
          shadow-[0_30px_90px_rgba(203,151,43,0.18)]
        "
      >
        {/* Image */}
        <div className="relative w-full h-[420px] overflow-hidden border border-[#cb972b]/40">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div
          style={{ transform: "translateZ(35px)" }}
          className="text-center mt-6"
        >
          <h3 className="text-[#cb972b] text-sm tracking-widest uppercase">
            {member.name}
          </h3>

          <p className="mt-4 inline-block text-[11px] tracking-[0.25em] uppercase
            text-[#f9e3aa] border-b-2 border-[#cb972b] pb-2">
            {member.role}
          </p>
        </div>

        {/* Gold Glow */}
        <div className="
          pointer-events-none absolute inset-0
          opacity-0 hover:opacity-100 transition-opacity duration-500
          shadow-[inset_0_0_80px_rgba(203,151,43,0.18)]
        " />
      </motion.div>
    </motion.div>
  );
}
