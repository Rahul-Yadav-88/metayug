"use client";

import Image from "next/image";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";

export default function ModernLiving() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white overflow-hidden">
      <HeroSection
        imageSrc="/27.webp"
        title="Modern Living Room"
        subtitle="Elegant spaces crafted for comfort and style."
      />

      <KeywordsSection
        keywords={["Living Room · Contemporary · Comfort"]}
      />

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">
            Modern Living Room
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            A refined living space with warm tones, modern furniture, and
            natural lighting.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Service Type
              </p>
              <p>Living Area Design</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Features
              </p>
              <p>Neutral Tones, Custom Furniture, Lighting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {["/28.webp", "/29.webp"].map((img, i) => (
          <Image key={i} src={img} width={600} height={620} className="w-full h-[620px] object-cover" alt="" />
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24">
        {["/30.webp", "/31.webp", "/32.webp"].map((img, i) => (
          <Image key={i} src={img} width={400} height={380} className="w-full h-[380px] object-cover" alt="" />
        ))}
      </section>
    </div>
  );
}
