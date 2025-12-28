"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection({
  subtitle = "Collaboration",
  title = "Meet our Team",
  team = [],
}) {
  return (
    <section className="py-20 px-4 perspective-[1200px]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[15px] tracking-[0.35em] text-gray-500 uppercase">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-200 mt-3">
            {title}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {/* Floating 3D Card */}
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotateZ: [0, 0.6, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  rotateY: -8,
                  rotateX: 6,
                  scale: 1.04,
                }}
                className="border border-[#2a2a2a] bg-black p-8 w-full max-w-[400px]
                           transform-style-preserve-3d shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                {/* Image */}
                <div className="border border-[#2a2a2a] relative w-full h-[420px] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  style={{ transform: "translateZ(40px)" }}
                  className="text-center mt-6"
                >
                  <h3 className="text-gray-200 text-sm tracking-widest uppercase">
                    {member.name}
                  </h3>

                  <p className="text-[11px] border-b-2 border-[#8D8271] inline-block text-gray-200 tracking-[0.25em] uppercase mt-4 pb-2">
                    {member.role}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
