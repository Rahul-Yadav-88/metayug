"use client";

import Image from "next/image";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";

export default function OliveOpulence() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white overflow-hidden">
      <HeroSection
        imageSrc="/40.webp"
        title="Olive Opulence"
        subtitle="Where earthy elegance meets modern luxury."
      />

      <KeywordsSection
        keywords={["Luxury Interior · Earthy Tones · Premium Finish"]}
      />

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">
            Olive Opulence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            A rich interior concept built around olive hues, textured finishes,
            and luxurious materials that create a warm, inviting atmosphere.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Service Type
              </p>
              <p>Luxury Residential Interior</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Features
              </p>
              <p>Olive Palette, Textured Walls, Designer Lighting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {["/41.webp", "/42.webp"].map((img, i) => (
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
        {["/43.webp", "/44.webp", "/45.webp"].map((img, i) => (
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
