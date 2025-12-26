"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Slightly different floating animation for each card
const floatAnimations = [
  { y: ["0%", "-2%", "0%"], duration: 4 },
  { y: ["0%", "-1.5%", "0%"], duration: 5 },
  { y: ["0%", "-2.5%", "0%"], duration: 4.5 },
];

export default function BlogSection({ posts = [] }) {
  return (
    <section className="relative min-h-[110vh] px-6 perspective-1000 overflow-hidden">
      {/* Background subtle glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] via-[#111] to-[#1c1c1c]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16 relative z-10">
          <p className="text-xs tracking-widest text-gray-400 mb-3">BLOG</p>
          <h2 className="font-serif text-4xl">Latest Posts</h2>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post, i) => (
            <FloatingTiltCard key={i} post={post} floatIndex={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FloatingTiltCard({ post, floatIndex }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  // Glow effect
  const gradientX = useTransform(x, [0, 1], ["25%", "75%"]);
  const gradientY = useTransform(y, [0, 1], ["25%", "75%"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const floatAnim = floatAnimations[floatIndex % floatAnimations.length];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      animate={{ y: floatAnim.y }}
      transition={{ duration: floatAnim.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      className="relative border border-gray-700 bg-black p-6 text-center cursor-pointer rounded-lg shadow-lg transform-style-preserve-3d overflow-hidden"
    >
      {/* Glow effect */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${gradientX} ${gradientY}, rgba(255,255,255,0.15), transparent 70%)`,
        }}
        className="absolute inset-0 pointer-events-none rounded-lg"
      />

      {/* Floating image with inner shadow */}
      <div className="relative mb-8">
        <motion.div
          style={{ translateZ: 20 }}
          className="relative aspect-[4/5] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <Image src={post.image} alt={post.title} fill className="object-cover rounded-md" />
        </motion.div>
      </div>

      <p className="font-serif text-sm mb-6">{post.title}</p>
      <span className="text-xs tracking-widest uppercase text-gray-400">Read Post</span>
    </motion.div>
  );
}
