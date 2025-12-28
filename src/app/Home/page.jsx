"use client";

import Image from "next/image";
import HeroSection from "../../components/Home/Hero.jsx";
import KeywordsSection from "../../components/Home/Keyword.jsx";
import AboutShowcase from "../../components/Home/Cro.jsx";
import FounderIntro from "../../components/Home/Founder.jsx";
import BlogSection from "../../components/Home/Blog.jsx";
import ServicesSection from "../../components/Home/Service.jsx";
import TestimonialSection from "../../components/Home/Test.jsx";

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
        title="Facade and luxury interior design—tailored exclusively for you."
        subtitle="We create interiors that inspire, comfort, and elevate everyday living."
        buttonText="Explore"
        buttonAction={() => console.log("Home Hero Button Clicked")}
          showButton={true}

      />

      {/* KEYWORDS */}
      <KeywordsSection keywords={["LUXURY", "CRAFTSMANSHIP", "ELEGANCE", "OPULENCE", "MAJESTIC"]} />

      {/* ABOUT SHOWCASE */}
      <AboutShowcase
        imageSrc="/85.webp"
        text="We are a high-end interior design studio transforming interiors into majestic spaces."
      />

      {/* FOUNDER INTRO */}
      <FounderIntro
        imageSrc="/Founder_image.jpg"
        name="Marcus Finn"
        role="Welcome"
        description="As the founder of Vela, I believe interior design is about crafting environments that inspire."
        buttons={[
          { label: "Our Team", action: () => console.log("Team clicked") },
          { label: "Get In Touch", action: () => console.log("Contact clicked"), bg: "border border-gray-500", textColor: "text-white" }
        ]}
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
          { title: "Luxury Interior Art", image: "/Hero_bg.jpg" },
          { title: "Color Palettes Guide", image: "/Hero_bg.jpg" },
          { title: "Small Touches Matter", image: "/Hero_bg.jpg" }
        ]}
      />

    </main>
  );
}
