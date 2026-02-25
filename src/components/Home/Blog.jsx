"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

/* --------------------------------
   Motion System
--------------------------------- */

const floatAnimations = [
  { y: ["0%", "-1.5%", "0%"], duration: 6 },
  { y: ["0%", "-2%", "0%"], duration: 7 },
];

/* --------------------------------
   Blog Section
--------------------------------- */

export default function BlogSection({ posts = [] }) {
  return (
    <section className="relative min-h-[110vh] px-6 py-28 overflow-hidden bg-[#0b0b0b]">
      {/* Cinematic Gold Ambient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.08), transparent 60%)",
            "radial-gradient(circle at 80% 70%, rgba(212,175,55,0.12), transparent 60%)",
            "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.08), transparent 60%)",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="tracking-[0.3em] text-xs text-[#f0ad1c] mb-4">
            INSIGHTS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#c9a24d]">
            Architectural Perspectives
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {posts.map((post, i) => (
            <LuxuryCard key={i} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Luxury Card
--------------------------------- */

function LuxuryCard({ post, index }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Subtle architectural tilt
  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);

  // Gold light tracking
  const glowX = useTransform(x, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(y, [0, 1], ["20%", "80%"]);

  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const floatAnim = floatAnimations[index % floatAnimations.length];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY }}
      animate={{ y: floatAnim.y }}
      transition={{
        duration: floatAnim.duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.03 }}
      className="relative bg-[#302d28] border border-[#2a2416] rounded-2xl p-6 overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.7)]"
    >
      {/* Gold Hover Light */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(212,175,55,0.25), transparent 65%)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Image */}
      <div className="relative mb-8">
        <motion.div
          className="relative aspect-[16/10] md:aspect-[3/3] rounded-xl overflow-hidden"
          style={{ translateZ: 25 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <p className="font-serif text-lg text-[#f5e6b0] mb-6 leading-snug">
        {post.title}
      </p>

      <Link
        href={post.href || "/Blog"}
        className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#c9a24d] hover:text-[#f5e6b0] transition"
      >
        READ ARTICLE
        <span className="block w-6 h-[1px] bg-[#c9a24d]" />
      </Link>
    </motion.div>
  );
}
