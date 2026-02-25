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
import Bro from "../../components/Home/Bro.tsx";
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
        imageSrc="/h.png"
        title="Architectural facades, crafted for iconic structures."
        subtitle="From design to execution — precision, craftsmanship, and in-house expertise."
        buttonText="Explore "
        buttonAction={() => console.log("Home Hero Button Clicked")}
        showButton={true}
          buttonLink="/Contact"

      />

      {/* KEYWORDS */}
      <KeywordsSection keywords={[""]} />

      {/* ABOUT SHOWCASE */}
      <AboutShowcase
        imageSrc="/40.png"
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
        image="/fff.jpeg"
        title="Vision"
        description="To become a trusted facade solutions brand delivering modern, durable, and well-designed metal and aluminium exteriors that enhance building identity and redefine architectural excellence across India."
      />

     

      {/* TESTIMONIAL */}
      <TestimonialSection />



       <MaterialCraftsmanshipSection
        image="/15.jpeg"
        title="Mission"
          imagePosition="right"

        description="To deliver high-quality facade systems through clear communication, precise engineering, quality materials, and disciplined execution while ensuring reliable performance and client satisfaction."
      />




      {/* SERVICES */}
      <ServicesSection
        imageSrc="/22.png"
        category=""
        title="Facade Design Services and Much More..."
        description="We craft timeless, elegant facades with precision and style."
        bgImages={["/h6.webp", "/h2.webp", "/h7.webp"]}

        services={servicesList}
      />

      {/* BLOG + CTA */}
      <BlogSection
        posts={[
          { title: "Ventilated Facades", image: "/39.png" },
          { title: "Modern Facade Design", image: "/f2.png" },
          // { title: "Small Touches Matter", image: "/13.webp" }
        ]}
      />
  <Bro />
      <DownloadCatalogSection />

    

    </main>
  );
}
