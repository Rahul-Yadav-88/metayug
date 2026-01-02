"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import HeroSection from "../../../components/Home/Hero.jsx";
import KeywordsSection from "../../../components/Home/Keyword.jsx";

/* =======================
   ✅ SINGLE DATA SOURCE
======================= */
const projects = [
  {
    id: "bachelor-pad",
    title: "Contemporary Bachelor Pad for Thomas.",
    shortTitle: "Contemporary Bachelor Pad",
    description:
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste. In a luxury space, the integration of fine art elevates the environment, transforming it.",
    serviceType: "Residential Interior",
    features: ["Marble Counter", "Wooden Flooring", "Custom Lighting"],
    heroImage: "/16.webp",
    galleryLarge: ["/17.webp", "/18.webp"],
    gallerySmall: ["/19.webp", "/20.webp", "/21.webp"],
    galleryLarge2: ["/22.webp", "/23.webp"],
    gallerySmall2: ["/24.webp", "/25.webp", "/26.webp"],
  },
  {
    id: "modern-living",
    title: "Modern Living Room",
    shortTitle: "Modern Living",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Living Space Design",
    features: ["Neutral Palette", "Natural Light", "Minimal Furniture"],
    heroImage: "/27.webp",
    galleryLarge: ["/28.webp", "/29.webp"],
    gallerySmall: ["/30.webp", "/31.webp", "/32.webp"],
    galleryLarge2: ["/33.webp", "/34.webp"],
    gallerySmall2: ["/35.webp", "/36.webp", "/37.webp"],
  },
  {
    id: "olive-opulence",
    title: "Olive Opulence",
    shortTitle: "Olive Opulence",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Living Space Design",
    features: ["Neutral Palette", "Natural Light", "Minimal Furniture"],
    heroImage: "/38.webp",
    galleryLarge: ["/39.webp", "/40.webp"],
    gallerySmall: ["/41.webp", "/42.webp", "/43.webp"],
    galleryLarge2: ["/44.webp", "/45.webp"],
    gallerySmall2: ["/46.webp", "/47.webp", "/48.webp"],
  },
  {
    id: "white-elegant",
    title: "White Elegant",
    shortTitle: "White Elegant",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Living Space Design",
    features: ["Neutral Palette", "Natural Light", "Minimal Furniture"],
    heroImage: "/49.webp",
    galleryLarge: ["/50.webp", "/51.webp"],
    gallerySmall: ["/52.webp", "/53.webp", "/54.webp"],
    galleryLarge2: ["/55.webp", "/56.webp"],
    gallerySmall2: ["/57.webp", "/58.webp", "/59.webp"],
  },
  {
    id: "exquisite-marble-bathroom",
    title: "Exquisite Marble Bathroom",
    shortTitle: "Marble Bathroom",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Bathroom Design",
    features: ["Marble Finish", "Luxury Fittings", "Ambient Lighting"],
    heroImage: "/60.webp",
    galleryLarge: ["/61.webp", "/62.webp"],
    gallerySmall: ["/63.webp", "/64.webp", "/65.webp"],
    galleryLarge2: ["/66.webp", "/67.webp"],
    gallerySmall2: ["/68.webp", "/69.webp", "/70.webp"],
  },
];

export default function Page({ params }) {
  // ✅ REQUIRED IN NEXT 16 CLIENT COMPONENTS
  const { id } = use(params);

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <HeroSection
        imageSrc={project.heroImage}
        title={project.title}
        subtitle="We create interiors that inspire, comfort, and elevate everyday living."
      />

      {/* ================= KEYWORDS ================= */}
      <KeywordsSection
        keywords={["Bespoke Architecture · Crafted with Precision"]}
      />

      {/* ================= TAG LINE ================= */}
      

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">
            {project.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Service Type
              </p>
              <p>{project.serviceType}</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Features
              </p>
              <ul className="flex flex-wrap gap-1">
                {project.features.map((item, i) => (
                  <li key={i}>{item}{i !== project.features.length - 1 && ","}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LARGE IMAGES ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {project.galleryLarge.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={project.title}
            width={600}
            height={620}
            className="w-full h-[620px] object-cover"
          />
        ))}
      </section>

      {/* ================= SMALL IMAGES ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24">
        {project.gallerySmall.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={project.title}
            width={400}
            height={380}
            className="w-full h-[380px] object-cover"
          />
        ))}
      </section>

      {/* ================= LARGE IMAGES 2 ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {project.galleryLarge2.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={project.title}
            width={600}
            height={620}
            className="w-full h-[620px] object-cover"
          />
        ))}
      </section>

      {/* ================= SMALL IMAGES 2 ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24">
        {project.gallerySmall2.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={project.title}
            width={400}
            height={380}
            className="w-full h-[380px] object-cover"
          />
        ))}
      </section>
    </div>
  );
}
