"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/Projects" },
  { name: "About", href: "/About" },
  { name: "Blog", href: "/Blog" },
]

/* ===============================
   STATIC LOGO (NO ANIMATION)
================================ */
function Logo() {
  return (
    <Link href="/" aria-label="Go to home">
      <div className="relative cursor-pointer">
        <Image
          src="/logo.png"
          alt="V Interiors Logo"
          width={100}
          height={100}
          priority
          className="select-none"
        />
      </div>
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
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left Menu */}
          <ul className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-gray-200">
            {navLinks.slice(0, 3).map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -2 }}
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
          <Logo />

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-10 text-sm tracking-widest uppercase text-gray-200">
              {navLinks.slice(3).map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ y: -2 }}
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

            <motion.div whileHover={{ scale: 1.05 }}>
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

      {/* ===============================
          MOBILE MENU
      =============================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center justify-center h-full gap-8 text-white uppercase tracking-widest text-lg">

              {/* Mobile Links */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/Contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-block px-8 py-3 bg-[#9c8f7a] text-black text-sm uppercase tracking-widest hover:bg-white transition"
                >
                  Book a Call
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
