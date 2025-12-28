"use client";

import React from 'react'
import ServicesSection from "../../components/Home/Service.jsx";
import TeamSection from "../../components/About/Team.jsx";
import Services from '../../components/About/Services.jsx'
import HeroSection from "../../components/Home/Hero.jsx";
import KeywordsSection from "../../components/Home/Keyword.jsx";

const team = [
  {
    name: "John Woodbridge",
    role: "Principal Designer",
    image: "/A1.png",
  },
  {
    name: "Juliana Rover",
    role: "Senior Architect",
    image: "/A2.png",
  },
  {
    name: "Alan Thompson",
    role: "Project Manager",
    image: "/A1.png ",
  },
  {
    name: "Claire Ashford",
    role: "Design Associate",
    image: "/A2.png",
  },
];

const bgImages = ["/h6.webp", "/h2.webp", "/h7.webp"]; // array of background images


const page = () => {
  return (
    <div className='bg-[#1c1c1c]'>

      <HeroSection
        imageSrc="/59.webp"
        title="About."
          showButton={true}

      // subtitle="We create interiors that inspire, comfort, and elevate everyday living."
      />
      {/* KEYWORDS */}
      <KeywordsSection
        keywords={["LUXURY", "CRAFTSMANSHIP", "ELEGANCE", "OPULENCE", "MAJESTIC"]}
      />


      {/* About Facade */}

      <ServicesSection
        imageSrc="/74.webp"
        category="About Us"
        title="Timeless Facade Design"
        bgImages={["/71.webp", "/72.webp", "/73.webp"]} // array of background images
        imagePosition="right"

        description=" We specialize in designing elegant and timeless facades that define the
      architectural identity of a space. Our work blends proportion, material
      intelligence, and refined aesthetics to create exteriors that leave a
      lasting impression.
      
      From contemporary elevations to classic architectural expressions, each
      facade is thoughtfully designed to balance beauty, functionality, and
      structural harmony—tailored uniquely to every client and context."
      // services={servicesList}
      />

      {/* Vision & Philosophy */}

      <ServicesSection
        imageSrc="/75.webp"
        // category="About Us"
        title="Design Philosophy"
        bgImages={["/76.webp", "/77.webp", "/78.webp"]} // array of background images
        imagePosition="left"

        description=" Our philosophy is rooted in balance, proportion, and detail. Every line, material, and texture is carefully curated to achieve harmony between architecture and its surroundings. We believe a well-designed facade should feel timeless, not trend-driven—reflecting character, purpose, and refinement. Through thoughtful composition and material selection, we create exteriors that elevate the building’s identity while seamlessly integrating with their environment."
      // services={servicesList}
      />


      {/* section 3 */}


      <TeamSection team={team} />


      {/* Facade Services */}

      <Services />

      {/* Craftsmanship & Materials */}

      <ServicesSection
        imageSrc="/79.webp"
        category="Craftsmanship"
        title="Materials That Define Character"
        bgImages={["/80.webp", "/81.webp", "/82.webp"]} // array of background images
        imagePosition="left"

        description="Our work is defined by a deep respect for craftsmanship and material
        integrity. Every surface, texture, and finish is carefully selected to
        enhance both durability and aesthetic appeal.
        From natural stone and concrete to glass and metal, we ensure each
        material complements the architectural form—creating facades that age
        gracefully and remain timeless."
      // services={servicesList}
      />



    </div>
  )
}

export default page