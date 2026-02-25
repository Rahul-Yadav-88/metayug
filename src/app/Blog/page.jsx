"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../../components/Home/Hero.jsx";
import KeywordsSection from "../../components/Home/Keyword.jsx";
import ServicesSection from "../../components/Home/Service.jsx";

const blogs = [
  {
    title: "Ventilated Facades: The Future of Energy-Efficient Buildings",
    image: "/19.png",
    link: "/Blog/Ventilated",
  },
  {
    title:
      "Modern Facade Design: Transforming Buildings with Aesthetic and Performance",
    image: "/74.jpg",
    link: "/Blog/modern",
  },
];

export default function BlogPage() {
  const BLOGS_PER_LOAD = 4;
  const [visible, setVisible] = useState(BLOGS_PER_LOAD);

  return (
    <main className="bg-[#111] text-[#f9e3aa] overflow-hidden">
      <HeroSection imageSrc="/b.jpeg" title="Our Blog"           buttonLink="/Contact"
 />

           <KeywordsSection keywords={["Bespoke Architecture · Crafted with Precision"]} />


      <ServicesSection
        imageSrc="/22.png"
        category="Featured Post"
        title="Timeless Facade Design"
        bgImages={["/77.webp", "/65.jpeg", "/40.png"]}
        imagePosition="right"
        description="With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are."
      />

      {/* BLOG GRID */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] text-[#cb972b] mb-4">
              DESIGN JOURNAL
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#f9e3aa]">
              Latest Posts
            </h2>
          </div>

          <AnimatePresence>
            <div className="grid gap-10 md:grid-cols-2">
              {blogs.slice(0, visible).map((blog, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-[#161616] p-6 md:p-8 rounded-2xl border border-[#cb972b]/20
                             hover:border-[#cb972b]/50 hover:shadow-[0_0_40px_rgba(203,151,43,0.15)]
                             transition-all duration-500"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* GOLD OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#cb972b]/30 via-transparent to-transparent
                                    opacity-0 group-hover:opacity-100 transition duration-700" />
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl mb-6 text-center text-[#f9e3aa]">
                    {blog.title}
                  </h3>

                  {/* LINK */}
                  <div className="text-center">
                    <Link
                      href={blog.link}
                      className="relative inline-block text-xs uppercase tracking-[0.3em]
                                 text-[#cb972b] transition hover:text-[#f9e3aa]"
                    >
                      Learn More →
                      <span
                        className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gradient-to-r
                                   from-[#cb972b] to-[#f9e3aa]
                                   group-hover:w-full transition-all duration-500"
                      />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>

          {/* LOAD MORE */}
          <div className="mt-20 flex justify-center gap-10">
            {visible < blogs.length && (
              <button className="text-xs uppercase tracking-[0.35em] text-[#cb972b] hover:text-[#f9e3aa] transition">
                See All
              </button>
            )}

            {visible > BLOGS_PER_LOAD && (
              <button className="text-xs uppercase tracking-[0.35em] text-[#cb972b] hover:text-[#f9e3aa] transition">
                See Less
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
