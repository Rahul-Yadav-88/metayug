'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProductSkeleton } from '../components/ProductSkeleton'
import HeroSection from '../components/Home/Hero.jsx'

type Product = {
  name: string
  images: string[]
  link: string
}

const sampleProducts: Product[] = [
  { name: 'Coin', images: ['/h2.jpeg'], link: '/product/coin' },
  { name: 'Fins', images: ['/ffi.png'], link: '/product/fins' },
  { name: 'Louvers', images: ['/lu1.jpg'], link: '/product/louvers' },
  { name: 'Staggered Louvers', images: ['/11.png'], link: '/product/staggered-louvers' },
  { name: '3d Pyramid', images: ['/p2.png'], link: '/product/pyramid' },
  { name: 'Shingles', images: ['/sh1.jpg'], link: '/product/shingles' },
]

export function ProductGallery() {
  const [loading] = useState(false)

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900">
      <HeroSection
        imageSrc="/p.jpeg"
        title="Our Products"
        showButton={true}
                  buttonLink="/Contact"

      />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : sampleProducts.map((product, index) => (
                <Link key={index} href={product.link}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className="group rounded-2xl border-2 border-[#cb972b]/30 bg-neutral-900/70 backdrop-blur overflow-hidden hover:border-[#cb972b]"
                  >
                    {/* IMAGE */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#cb972b]/20 to-[#f9e3aa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-fill transition-transform duration-700 ease-out group-hover:scale-110"
                        priority={index < 3}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 h-[25vw] md:h-[10vw] lg:h-[7vw] flex flex-col justify-normal">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#f9e3aa] transition-colors">
                        {product.name}
                      </h3>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#cb972b]">
                        Explore
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 6 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#cb972b] to-transparent" />
    </section>
  )
}
