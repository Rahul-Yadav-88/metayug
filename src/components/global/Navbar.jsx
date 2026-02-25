"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

/* ================= NAV LINKS ================= */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },

  { name: "Project", href: "/Projects" },
  { name: "Product", href: "/product" },
    { name: "Blog", href: "/Blog" },

]

/* ================= SOCIAL LINKS ================= */
const socialLinks = [
  { icon: FaInstagram, url: "https://www.instagram.com/facadewala" },
  { icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61586982733512" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/111783587/admin/dashboard/" },
  { icon: FaPinterest, url: "https://pin.it/3ybJfUQu8" },
  { icon: FaSquareXTwitter, url: "https://x.com/home" },
  { icon: FaYoutube, url: "https://www.youtube.com/channel/UCJUV7TBK-iwUJtNheZOGlQg" },
]

/* ================= LOGO ================= */
function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Facadewala Logo"
        width={100}
        height={100}
        priority
      />
    </Link>
  )
}

/* ================= NAVBAR ================= */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/70 backdrop-blur-md">
        <nav className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          {/* LEFT : SOCIAL ICONS */}
          <div className="hidden md:flex gap-5 text-[#f9e3aa]/80">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="hover:text-[#cb972b]"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* CENTER : LOGO (ABSOLUTE CENTER – NEVER MOVES) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>

          {/* RIGHT : MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="text-[#f9e3aa]"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* ================= FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-[#f9e3aa]"
            >
              <X size={32} />
            </button>

            {/* MENU LINKS */}
            <div className="flex flex-col items-center justify-center h-full gap-8 text-[#f9e3aa] uppercase tracking-widest text-lg">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#cb972b]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/Contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 px-8 py-3 bg-[#cb972b] text-black text-sm uppercase tracking-widest hover:bg-[#f9e3aa]"
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
