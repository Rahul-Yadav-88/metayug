"use client";

import Image from "next/image";
import HeroSection from "../../components/Home/Hero.jsx";
import KeywordsSection from "../../components/Home/Keyword.jsx";
import AboutShowcase from "../../components/Home/Cro.jsx";
// import FounderIntro from "../../components/Home/Founder.jsx";
import BlogSection from "../../components/Home/Blog.jsx";
import ServicesSection from "../../components/Home/Service.jsx";
import TestimonialSection from "../../components/Home/Test.jsx";
import MaterialCraftsmanshipSection from "../../components/Projects/Mcraft.jsx";
import DownloadCatalogSection from "../../components/Home/cato.jsx";
const servicesList = [
  "01. Residential Facade Design",
  "02. Commercial Facade Design",
  "03. Exterior Elevation & Front View Design",
];

export default function Home() {
  return (
    <main className="bg-[#1c1c1c] text-white overflow-hidden">

      {/* HERO SECTION */}
      <HeroSection
        imageSrc="/h4.webp"
        title="Architectural facades, crafted for iconic structures."
        subtitle="From design to execution — precision, craftsmanship, and in-house expertise."
        buttonText="Explore ."
        buttonAction={() => console.log("Home Hero Button Clicked")}
        showButton={true}

      />

      {/* KEYWORDS */}
      <KeywordsSection keywords={["Bespoke Architecture · Crafted with Precision"]} />

      {/* ABOUT SHOWCASE */}
      <AboutShowcase
        imageSrc="/85.webp"
        text="We craft high-end exterior designs that transform spaces into timeless landmarks."
      />

      {/* FOUNDER INTRO
      <FounderIntro
        imageSrc="/Founder_image.jpg"
        name="Marcus Finn"
        role="Welcome"
        description="As the founder of Vela, I believe interior design is about crafting environments that inspire."
        buttons={[
          { label: "Our Team", action: () => console.log("Team clicked") },
          { label: "Get In Touch", action: () => console.log("Contact clicked"), bg: "border border-gray-500", textColor: "text-white" }
        ]}
      /> */}


      <MaterialCraftsmanshipSection
        image="/f5.webp"
        title="Vision"
        description="Inspired by a pioneering spirit and a forward-thinking mindset, our vision is to embrace the limitless potential of design, innovation, and technology. Guided by the belief that “Anything is Possible,” we commit to uncompromising standards, boundless creativity, and values rooted in integrity.

We aspire to redefine the built and digital landscape—crafting a legacy where resilience meets artistry, ideas evolve into purpose, and ambition is transformed into timeless excellence."
      />

      {/* TESTIMONIAL */}
      <TestimonialSection />

      {/* SERVICES */}
      <ServicesSection
        imageSrc="/f7.webp"
        category="Classic"
        title="Facade Design Services\nAnd Much More..."
        description="We craft timeless, elegant facades with precision and style."
        bgImages={["/h6.webp", "/h2.webp", "/h7.webp"]}

        services={servicesList}
      />

      {/* BLOG + CTA */}
      <BlogSection
        posts={[
          { title: "Luxury Exterior Art", image: "/11.webp" },
          { title: "Color Palettes Guide", image: "/12.webp" },
          { title: "Small Touches Matter", image: "/13.webp" }
        ]}
      />

      <DownloadCatalogSection />

    </main>
  );
}
