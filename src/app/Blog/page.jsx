"use client"

import Image from "next/image"
import Link from "next/link"
import { blogs } from "../Blog/blog"


const posts = [
  {
    id: 1,
    title: "The Role of Art in Luxury Interior Design",
    image: "/b1.png",
    slug: "role-of-art-in-luxury-interior-design",
  },
  {
    id: 2,
    title: "Color Palettes for Interiors: The Guide",
    image: "/b2.png",
    slug: "color-palettes-for-interiors-guide",
  },
  {
    id: 3,
    title: "Small Touches that Make an Impact in Design",
    image: "/b3.png",
    slug: "small-touches-impact-design",
  },
  {
    id: 4,
    title: "The Role of Art in Luxury Interior Design",
    image: "/b4.png",
    slug: "role-of-art-in-luxury-interior-design-2",
  },
]

export default function BlogPage() {
    return (
        <main className="bg-[#111] text-[#eae7e2]">
            {/* HERO */}
            <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">


                <img
                    src="blog.png"
                    alt="Kitchen interior"
                    className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="relative flex items-center justify-center">


                        <div
                            className="
                absolute 
                w-[220px] h-[90px]
                sm:w-[300px] sm:h-[120px]
                md:w-[380px] md:h-[150px]
                lg:w-[450px] lg:h-[170px]
                bg-white/80 
                blur-[50px] 
                rounded-full
              "
                        ></div>


                        <h1
                            className="
                relative 
                text-3xl
                sm:text-4xl
                md:text-6xl
                lg:text-7xl
                font-serif 
                text-gray-900 
                tracking-[0.25em]
                sm:tracking-[0.3em]
                px-6
                sm:px-10
              "
                        >
                            Blog
                        </h1>

                    </div>
                </div>
            </section>


            {/* section 2 */}
            <section className="bg-[#212121] text-[#E5E5E5] px-4 py-6 sm:py-8">
                <ul
                    className="flex flex-wrap justify-around gap-x-6 gap-y-4 text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest"
                >
                    <li>LUXURY</li>
                    <li>CRAFTSMANSHIP</li>
                    <li>ELEGANCE</li>
                    <li>OPULENCE</li>
                    <li>MAJESTIC</li>
                </ul>
            </section>

            {/* FEATURED */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="italic text-sm tracking-wider">Featured</p>
                    <h2 className="text-2xl md:text-3xl font-light">
                        A Featured Blog Post Title Would Go Here
                    </h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are.
                    </p>
                    <Link href="#" className="inline-block border px-6 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition">
                        READ POST
                    </Link>
                </div>
                <div className="relative h-[400px]">
                    <Image src="/featured.jpg" alt="Featured" fill className="object-cover" />
                </div>
            </section>

            {/* LATEST POSTS */}
            <main className="min-h-screen bg-charcoal py-16 px-4 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-stone-400">Design Journal</p>
          <h1 className="font-serif text-4xl text-stone-100 md:text-5xl lg:text-6xl">Latest Posts</h1>
        </div>

        {/* Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative flex flex-col bg-charcoal-light p-6 transition-all duration-300 hover:bg-charcoal-lighter md:p-8"
            >
              {/* Image Frame */}
              <div className="relative mb-6 aspect-[4/3] overflow-hidden border-8 border-stone-900 bg-stone-950">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col items-center text-center">
                <h2 className="mb-6 font-serif text-xl uppercase tracking-wide text-stone-200 md:text-2xl">
                  {post.title}
                </h2>

                <Link
                  href={`/Blog/${post.slug}`}
                  className="mt-auto text-xs uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-200"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* See All Link */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-stone-700" />
          <Link
            href="/posts"
            className="text-xs uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-200"
          >
            See All
          </Link>
          <div className="h-px w-24 bg-stone-700" />
        </div>
      </div>
    </main>

            {/* CTA */}
            <section className="py-24 text-center bg-[#0d0d0d]">
                <h4 className="text-xl mb-6">Let Us Help Transform Your Living Space into a Masterpiece.</h4>
                <button className="border px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition">
                    SCHEDULE CONSULTATION
                </button>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-12 px-6 text-sm">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                    <div>
                        <p className="tracking-widest mb-4">V Interiors</p>
                        <p className="text-gray-400">Luxury interior design studio</p>
                    </div>
                    <nav className="space-y-2">
                        {['Home', 'Portfolio', 'Services', 'About', 'Blog', 'Contact'].map(item => (
                            <p key={item} className="hover:underline cursor-pointer">{item}</p>
                        ))}
                    </nav>
                    <div className="text-gray-400">
                        123 Peachtree Lane<br />Suite 400, Atlanta, GA 30303
                    </div>
                </div>
            </footer>
        </main>
    )
}
