"use client";

import Image from "next/image";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";

export default function ExquisiteMarbleBathroom() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white overflow-hidden">
      {/* HERO */}
      <HeroSection
        imageSrc="/60.webp"
        title="Exquisite Marble Bathroom"
        subtitle="We create interiors that inspire, comfort, and elevate everyday living."
      />

      <KeywordsSection
        keywords={["Bespoke Architecture · Crafted with Precision"]}
      />

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">
            Exquisite Marble Bathroom
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            A modern bathroom that blends luxury marble finishes with ambient
            lighting and premium fittings.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Service Type
              </p>
              <p>Bathroom Design</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Features
              </p>
              <p>Marble Finish, Luxury Fittings, Ambient Lighting</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {["/61.webp", "/62.webp"].map((img, i) => (
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
        {["/63.webp", "/64.webp", "/65.webp"].map((img, i) => (
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
