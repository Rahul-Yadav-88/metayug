'use client'

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/Projects" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/70 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left Menu (Desktop) */}
          <ul className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-gray-200">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.name} className="hover:text-white transition">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="text-center">
            <h1 className="text-xl font-serif tracking-widest text-white">
              V
            </h1>
            <p className="text-xs italic text-gray-300">Interiors</p>
          </div>

          {/* Right Menu (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-10 text-sm tracking-widest uppercase text-gray-200">
              {navLinks.slice(3).map((link) => (
                <li key={link.name} className="hover:text-white transition">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>

            <Link href={'/Contact'} className="px-6 py-2 bg-[#9c8f7a] text-black text-sm uppercase tracking-widest hover:bg-white transition">
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white uppercase tracking-widest text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#9c8f7a] transition"
            >
              {link.name}
            </a>
          ))}

          <button className="mt-6 px-8 py-3 bg-[#9c8f7a] text-black text-sm uppercase tracking-widest">
            Book a Call
          </button>
        </div>
      </div>
    </>
  )
}
