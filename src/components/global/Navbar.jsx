"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/Projects" },
  { name: "About", href: "/About" },
  { name: "Blog", href: "/Blog" },
]

/* ===============================
   FLOATING IMAGE LOGO (CLICKABLE)
================================ */
function FloatingLogo() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-100, 100], [12, -12])
  const rotateY = useTransform(mouseX, [-100, 100], [-12, 12])

  return (
    <Link href="/" aria-label="Go to home">
      <motion.div
        className="relative perspective-[1200px] cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          mouseX.set(e.clientX - rect.left - rect.width / 2)
          mouseY.set(e.clientY - rect.top - rect.height / 2)
        }}
        onMouseLeave={() => {
          mouseX.set(0)
          mouseY.set(0)
        }}
      >
        <motion.div
          style={{ rotateX, rotateY }}
          animate={{
            y: [0, -14, 0],
            rotateZ: [0, 1.5, -1.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative transform-style-preserve-3d"
        >
          {/* Shadow */}
          <motion.div
            animate={{ scale: [1, 0.9, 1], opacity: [0.25, 0.15, 0.25] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/50 blur-xl rounded-full"
          />

          {/* Glow */}
          <div className="absolute inset-0 bg-[#9c8f7a]/30 blur-2xl rounded-full -z-10" />

          {/* Logo Image */}
          <Image
            src="/logo.png"
            alt="V Interiors Logo"
            width={100}
            height={100}
            priority
            className="relative z-10 select-none"
          />
        </motion.div>
      </motion.div>
    </Link>
  )
}

/* ===============================
   NAVBAR
================================ */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-black/70 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between perspective-[1400px]">

          {/* Left Menu */}
          <ul className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-gray-200 transform-style-preserve-3d">
            {navLinks.slice(0, 3).map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ rotateX: 12, rotateY: -8, translateZ: 30 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative group"
              >
                <Link href={link.href} className="hover:text-white transition">
                  {link.name}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#9c8f7a] transition-all group-hover:w-full" />
              </motion.li>
            ))}
          </ul>

          {/* Logo */}
          <FloatingLogo />

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-10 transform-style-preserve-3d">
            <ul className="flex gap-10 text-sm tracking-widest uppercase text-gray-200">
              {navLinks.slice(3).map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ rotateX: 12, rotateY: 8, translateZ: 30 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative group"
                >
                  <Link href={link.href} className="hover:text-white transition">
                    {link.name}
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#9c8f7a] transition-all group-hover:w-full" />
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.08, translateZ: 30 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href="/Contact"
                className="px-6 py-2 bg-[#9c8f7a] text-black text-sm uppercase tracking-widest hover:bg-white transition"
              >
                Book a Call
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", rotateY: 30 }}
            animate={{ x: 0, rotateY: 0 }}
            exit={{ x: "-100%", rotateY: 30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center justify-center h-full gap-8 text-white uppercase tracking-widest text-lg">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
