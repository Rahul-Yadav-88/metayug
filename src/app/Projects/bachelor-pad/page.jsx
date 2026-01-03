"use client";

import Image from "next/image";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";

export default function BachelorPad() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white overflow-hidden">
      <HeroSection
        imageSrc="/16.webp"
        title="Contemporary Bachelor Pad"
        subtitle="Minimal, masculine, and modern living spaces."
      />

      <KeywordsSection
        keywords={["Modern Living · Minimal Design · Urban Style"]}
      />

      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">
            Contemporary Bachelor Pad
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            Designed for modern urban living with clean lines, smart storage,
            and bold textures.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Service Type
              </p>
              <p>Residential Interior</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Features
              </p>
              <p>Smart Storage, Minimal Decor, Neutral Palette</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {["/17.webp", "/18.webp"].map((img, i) => (
          <Image key={i} src={img} width={600} height={620} className="w-full h-[620px] object-cover" alt="" />
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24">
        {["/19.webp", "/20.webp", "/21.webp"].map((img, i) => (
          <Image key={i} src={img} width={400} height={380} className="w-full h-[380px] object-cover" alt="" />
        ))}
      </section>
    </div>
  );
}
