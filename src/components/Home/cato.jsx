"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function DownloadCatalogSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative bg-[#0b0b0b] py-28 px-14 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gray-400">
            Exclusive Collection
          </span>

          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 leading-tight">
            Download Our <br /> Signature Catalog
          </h2>

          <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
            A curated showcase of our architectural vision, timeless designs,
            and innovative solutions. Experience our work in a refined digital
            format.
          </p>

          <motion.a
            href="/catalog.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 border border-white px-10 py-5 text-xs uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Download Catalog
            <span className="text-lg">↓</span>
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE – 3D CARD */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[450px] md:h-[550px] rounded-2xl perspective-[2000px]"
        >

          {/* IMAGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
            style={{ transform: "translateZ(60px)" }}
          >
            <Image
              src="/fff.webp"
              alt="Catalog Preview"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* GLOW OVERLAY */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15), transparent 60%)",
              transform: "translateZ(80px)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
