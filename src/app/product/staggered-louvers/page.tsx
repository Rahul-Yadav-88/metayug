'use client'

import Link from 'next/link'
import Image from 'next/image'
// import { Product } from '../lib/products'

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-16">
      {/* Back Button */}
      <div className="mb-14 px-10">
        <Link href="/product">
          <button className="flex items-center gap-3 rounded-lg border border-[#cb972b] px-8 py-4 text-sm font-semibold text-[#f9e3aa] transition hover:bg-[#cb972b] hover:text-black">
            ← Back
          </button>
        </Link>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-20 px-10 lg:grid-cols-[3fr_1.2fr]">
        {/* Static Image Row */}
        <div className="grid grid-cols-3 gap-10">
          {[
             '/10.png',
      '/11.png',
      // '/4.png',

          ].map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-transparent bg-zinc-900 transition-all duration-300 hover:border-[#cb972b]"
            >
              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gold overlay */}
              <div className="absolute inset-0 bg-[#cb972b]/0 transition duration-300 group-hover:bg-[#cb972b]/20" />
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col justify-center gap-6 pl-10">
          {/* Gold vertical divider */}
          <span className="absolute left-0 top-0 h-full w-[1px] bg-[#cb972b]" />

          <h1 className="text-5xl font-light tracking-wide text-[#f9e3aa]">
        Staggered Louvers
          </h1>

          <p className="max-w-md text-base leading-relaxed text-zinc-300">
            Staggered Louvers draws inspiration from ancient pyramid geometry, translating timeless form into modern metal architecture. Its precisely arranged staggered design and 3D perforations create a rich interplay of light and shadow, delivering a bold façade with lasting elegance and architectural depth.
          </p>
        </div>
      </div>
    </div>
  )
}
