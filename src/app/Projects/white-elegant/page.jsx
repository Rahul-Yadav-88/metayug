"use client";

import Image from "next/image";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";

export default function WhiteElegant() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white overflow-hidden">
      <HeroSection
        imageSrc="/50.webp"
        title="White Elegant"
        subtitle="Timeless elegance defined by light and simplicity."
      />

      <KeywordsSection
        keywords={["Minimal Design · White Interior · Elegant Living"]}
      />

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">
            White Elegant
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            A bright, airy interior crafted with white tones, clean lines, and
            subtle textures for a timeless, elegant living experience.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Service Type
              </p>
              <p>Modern Residential Interior</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Features
              </p>
              <p>White Palette, Natural Light, Minimal Decor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {["/51.webp", "/52.webp"].map((img, i) => (
          <Image
            key={i}
            src={img}
            width={600}
            height={620}
            className="w-full h-[620px] object-cover"
            alt=""
          />
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24">
        {["/53.webp", "/54.webp", "/55.webp"].map((img, i) => (
          <Image
            key={i}
            src={img}
            width={400}
            height={380}
            className="w-full h-[380px] object-cover"
            alt=""
          />
        ))}
      </section>
    </div>
  );
}
