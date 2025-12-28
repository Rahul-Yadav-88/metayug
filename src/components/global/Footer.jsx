"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/Projects" },
  // { label: "Services", href: "/services" },
  { label: "About", href: "/About" },
  { label: "Blog", href: "/Blog" },
  { label: "Contact", href: "/Contact" },
];
  return (
    <footer className="bg-[#1c1c1c] overflow-hidden">
      <section className="relative min-h-screen flex flex-col justify-end perspective-[2000px]">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center pt-28 pb-16"
        >
          <h3 className="font-serif text-white text-3xl md:text-4xl leading-snug">
            Let Us Help Transform Your Living <br /> Space into A Masterpiece.
          </h3>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div className="flex justify-center">
          <motion.button
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.08 }}
            className="bg-[#b6a68a] text-black px-12 py-3 text-xs uppercase tracking-widest shadow-[0_20px_60px_rgba(182,166,138,0.4)]"
          >
            Start Your Journey
          </motion.button>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="flex-1 flex items-center justify-center px-6 mt-20">
          <div className="grid md:grid-cols-3 gap-20 max-w-6xl w-full text-center">

            {/* ===== LOGO IMAGE (FLOATING 3D) ===== */}
            <FloatingLogo />

            {/* ===== NAVIGATION ===== */}
            <div className="text-gray-400">
      <h4 className="font-serif text-3xl italic mb-6">Navigation</h4>

      <ul className="space-y-3 text-xs tracking-[0.3em] uppercase">
        {navLinks.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{
              x: 8,
              color: "#fff",
              textShadow: "0px 0px 12px rgba(255,255,255,0.4)",
            }}
            className="cursor-pointer"
          >
            <Link href={item.href} className="block">
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>

            {/* ===== ADDRESS ===== */}
            <motion.div
              whileHover={{ y: -6 }}
              className="text-sm text-gray-400 space-y-1"
            >
              <p>info@velainteriorsabc</p>
              <p>123 Peachtree Lane</p>
              <p>Suite 400, Atlanta, GA 30309</p>
            </motion.div>

          </div>
        </div>

        {/* ================= FLOATING IMAGE STRIP ================= */}
        <div className="relative mt-3">
          <div className="absolute bottom-0 w-full h-32 bg-[#ded8d1]" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-14 px-8 md:px-20 py-16">
            {["/5.webp", "/1.webp", "/2.webp", "/4.webp"].map((img, i) => (
              <FloatingImage key={i} img={img} index={i} />
            ))}
          </div>
        </div>

      </section>
    </footer>
  );
}

/* ================= FLOATING LOGO ================= */

function FloatingLogo() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1 }}
      className="flex justify-center"
    >
      <div className="relative w-60 h-60 translate-z-[50px] drop-shadow-[0_30px_60px_rgba(182,166,138,0.6)]">
        <Image
          src="/logo.png"   
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}

/* ================= FLOATING IMAGE ================= */

function FloatingImage({ img, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: [0, -18 - index * 4, 0],
        rotateZ: [0, index % 2 === 0 ? 1.5 : -1.5, 0],
      }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.08 }}
      className="relative h-60 rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute inset-0 translate-z-[40px]">
        <Image src={img} alt="Interior" fill className="object-cover" />
      </div>
    </motion.div>
  );
}
