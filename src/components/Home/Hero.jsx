"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"

export default function HeroSection({
  imageSrc = "/h4.webp",
  title = "Default Hero Title",
  subtitle = "",
  buttonText = "Explore",
  buttonLink = "/contact",
  showButton = true,
  openInNewTab = false,
  overlayClass = "bg-black/60",
  priority = true, // ✅ allow per-page control (LCP image)
}) {
  const prefersReducedMotion = useReducedMotion()

  const isExternal =
    typeof buttonLink === "string" &&
    (buttonLink.startsWith("http://") || buttonLink.startsWith("https://"))

  // ✅ memoize props object so we don't create a new object every render
  const linkProps = useMemo(() => {
    if (openInNewTab || isExternal) {
      return { target: "_blank", rel: "noopener noreferrer" }
    }
    return {}
  }, [openInNewTab, isExternal])

  // ✅ stable animation objects + reduced-motion fallback
  const bgMotion = prefersReducedMotion
    ? {}
    : {
        initial: { scale: 1.08 },
        animate: { scale: 1 },
        transition: { duration: 8, ease: "easeOut" },
      }

  const contentMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" },
      }

  const ctaMotion = prefersReducedMotion
    ? { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } }
    : {
        whileHover: { scale: 1.06 },
        whileTap: { scale: 0.98 },
        animate: { y: [0, -6, 0] },
        transition: { repeat: Infinity, duration: 2.6, ease: "easeInOut" },
      }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image (optimized) */}
      <motion.div className="absolute inset-0 will-change-transform" {...bgMotion}>
        <Image
          src={imageSrc}
          alt={title || "Hero background"}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          // ✅ slightly improve perceived loading without changing layout
          placeholder="empty"
        />
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl text-center px-6"
        {...contentMotion}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 leading-snug text-[#cb972b]">
          {title}
        </h1>

        {!!subtitle && (
          <p className="text-[#f9e3aa]/80 mb-8 max-w-2xl text-lg mx-auto">
            {subtitle}
          </p>
        )}

        {!!showButton && !!buttonText && (
          <motion.div {...ctaMotion}>
            <Link
              href={buttonLink}
              {...linkProps}
              prefetch={!isExternal} // ✅ don’t prefetch external links
              className="
                inline-block px-8 py-3 rounded-md
                bg-[#cb972b] text-black
                uppercase tracking-widest text-sm
                hover:bg-[#f9e3aa]
                transition
                shadow-[0_0_25px_rgba(203,151,43,0.25)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f9e3aa]/70
                will-change-transform
              "
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}