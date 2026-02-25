"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection({
  subtitle = "Services",
  title = "What We Do",
  services = [
    { title: "Residential Facades", img: "/19.png" },
    { title: "Commercial Elevations", img: "/ff2.jpeg" },
    { title: "Exterior Renovation", img: "/10.png" },
  ],
}) {
  return (
    <section className="bg-[#161616] py-20 px-4 perspective-[1400px]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[14px] tracking-[0.4em] text-[#cb972b] uppercase">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f9e3aa] mt-4">
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                rotateX: -6,
                rotateY: 6,
                scale: 1.04,
              }}
              className="group relative bg-black border border-[#2a2a2a] rounded-xl overflow-hidden transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image */}
              <motion.div
                className="relative h-[260px]"
                whileHover={{ scale: 1.08, z: 30 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Gold Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>

              {/* Title */}
              <div className="py-6 text-center bg-black relative z-10">
                <p className="text-[#cb972b]  text-sm tracking-widest uppercase">
                  {item.title}
                </p>
              </div>

              {/* Gold Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-br from-[#cb972b]/40 via-transparent to-transparent blur-xl" />
              </div>

              {/* Gold Border Accent */}
              <div className="absolute inset-0 rounded-xl border border-[#cb972b]/20 group-hover:border-[#cb972b]/40 transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
