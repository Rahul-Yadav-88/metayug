"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection({
  subtitle = "Services",
  title = "What We Do",
  services = [
    { title: "Residential Facades", img: "/f1.webp" },
    { title: "Commercial Elevations", img: "/f2.webp" },
    { title: "Exterior Renovation", img: "/f3.webp" },
  ],
}) {
  return (
    <section className="bg-[#1c1c1c] py-20 px-4 perspective-[1400px]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[15px] tracking-[0.35em] text-gray-500 uppercase">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-200 mt-4">
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -14, 0],
                rotateX: [0, 2, 0],
                rotateY: [0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
              whileHover={{
                rotateX: -8,
                rotateY: 8,
                scale: 1.05,
                z: 50,
              }}
              className="group relative bg-black border border-[#2a2a2a] rounded-xl overflow-hidden transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image */}
              <motion.div
                className="relative h-[260px]"
                whileHover={{ scale: 1.1, z: 30 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>

              {/* Title */}
              <motion.div
                className="py-6 text-center bg-black"
                whileHover={{ z: 25 }}
              >
                <p className="text-gray-300 text-sm tracking-widest uppercase">
                  {item.title}
                </p>
              </motion.div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
