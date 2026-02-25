"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa"
import { ImageCard } from "../../components/Home/Brocard"
import DownloadBrochureModal from "../../components/Home/DownloadBrochureModal"
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const GOLD = "#cb972b"

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/Projects" },
          { label: "Product", href: "/product" },

    { label: "About", href: "/About" },
    { label: "Blog", href: "/Blog" },
    { label: "Contact", href: "/Contact" },
  ]

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://instagram.com/facadewala" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61586982733512" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/111783587/admin/dashboard/" },
    { icon: <FaPinterest />, href: "https://pin.it/3ybJfUQu8" },
    { icon: <FaSquareXTwitter />, href: "https://x.com/home" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCJUV7TBK-iwUJtNheZOGlQg" },
  ]

  const brochures = [
    {
      id: 1,
      src: "/fff.jpeg",
      label: "Form",
      alt: "Form architectural facade design",
    },
    {
      id: 2,
      src: "/h1.jpeg",
      label: "Function",
      alt: "Function modern facade system",
    },
    {
      id: 3,
      src: "/h2.jpeg",
      label: "Parametric",
      alt: "Parametric parametric architecture facade",
    },
    {
      id: 4,
      src: "/h3.jpeg",
      label: "Surface",
      alt: "Surface textured architectural surface",
    },
  ]

  return (
    <div className="bg-black">
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#1c1c1c] overflow-hidden"
      >
        <section className="px-6 md:px-20 pt-20">

          {/* HEADING */}
          <div className="text-center mb-12">
            <h3 className="font-serif text-[#cb972b] text-3xl md:text-4xl">
              Let Us Help Transform Your Living <br /> Space into A Masterpiece.
            </h3>
          </div>

          {/* CTA BUTTON → CONTACT PAGE */}
          <div className="flex justify-center mb-20">
            <Link href="/Contact">
              <motion.button
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f9e3aa] hover:bg-[#cb972b] text-black px-12 py-3 text-xs uppercase tracking-widest shadow-lg"
              >
                Start Your Journey
              </motion.button>
            </Link>
          </div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center mb-28">
            <div className="flex justify-center w-full">
              <Image
                src="/logo.png"
                alt="Facadewala logo"
                width={170}
                height={170}
                // style={{ width: "auto", height: "auto" }}
                className="mx-auto"
              />
            </div>
            <div className="text-[#cb972b]">
              <h4 className="font-serif text-3xl italic mb-6">Navigation</h4>
              <ul className="space-y-3 text-xs tracking-[0.3em] uppercase">
                {navLinks.map((item, i) => (
                  <li key={i}>
                    <Link className="hover:text-[#f9e3aa]" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-[#f9e3aa] text-sm space-y-3">
              <p>contactus@facadewala.com</p>
              <p>
                289/2, MG Road, Sultanpur,<br />
                New Delhi 110030
              </p>

              <div className="flex justify-center gap-6 pt-4 text-2xl">
                {socialLinks.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="hover:text-[#cb972b]"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* BROCHURE SECTION */}
          <div className="relative mt-24">
            <div className="absolute bottom-0 w-full h-28 bg-[#f9e3aa]" />

            <div className="relative z-10 pb-16">

              {/* Mobile */}
              <div className="grid grid-cols-2 gap-4 md:hidden">
                {brochures.map((item) => (
                  <div
                    key={item.id}
                    className="aspect-[4/5] rounded-xl overflow-hidden ring-1"
                    style={{ borderColor: GOLD }}
                  >
                    <ImageCard
                      src={item.src}
                      alt={item.alt}
                      label={item.label}
                      isHovered={false}
                      onClick={() => setOpen(true)}
                    />
                  </div>
                ))}
              </div>

              {/* Desktop */}
              <div className="hidden md:flex gap-5 h-56 max-w-6xl mx-auto">
                {brochures.map((item, index) => {
                  const isHovered = hoveredIndex === index

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`relative rounded-xl overflow-hidden transition-all duration-500
                        ${
                          hoveredIndex === null
                            ? "flex-1"
                            : isHovered
                            ? "flex-[2.2]"
                            : "flex-1"
                        }
                      `}
                      style={{
                        boxShadow: isHovered
                          ? "0 12px 35px rgba(203,151,43,0.3)"
                          : "none",
                      }}
                    >
                      <ImageCard
                        src={item.src}
                        alt={item.alt}
                        label={item.label}
                        isHovered={isHovered}
                        onClick={() => setOpen(true)}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* COPYRIGHT */}
        <div className="bg-[#111] text-[#cb972b] text-xs text-center py-3 flex flex-col md:flex-row gap-4 justify-center">
          <span>© {new Date().getFullYear()} Facadewala</span>
          <Link href="/privacy" className="underline">Privacy Policy</Link>
          <Link href="/terms" className="underline">Terms & Conditions</Link>
        </div>
      </motion.footer>

      <DownloadBrochureModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
