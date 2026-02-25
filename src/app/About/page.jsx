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
    image: "/a4.png",
  },
  {
    name: "Alan Thompson",
    role: "Project Manager",
    image: "/A1.png ",
  },
  {
    name: "Claire Ashford",
    role: "Design Associate",
    image: "/a4.png",
  },
];

const page = () => {
  return (
    <div className='bg-[#1c1c1c]'>

      <HeroSection
        imageSrc="/844.jpeg"
        title="About"
          showButton={true}
          buttonLink="/Contact"

      // subtitle="We create interiors that inspire, comfort, and elevate everyday living."
      />
      {/* KEYWORDS */}
      <KeywordsSection
        keywords={["Bespoke Architecture · Crafted with Precision"]}
      />


      {/* About Facade */}

      <ServicesSection
        imageSrc="/74.jpeg"
        category="About Us"
        title="Timeless Facade Design"
        bgImages={["/66.webp", "/c1.webp", "/57.webp"]} // array of background images
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
        imageSrc="/h2.jpeg"
        // category="About Us"
        title="Design Philosophy"
        bgImages={["/76.webp", "/37.webp", "/80.webp"]} // array of background images
        imagePosition="left"

        description=" Our philosophy is rooted in balance, proportion, and detail. Every line, material, and texture is carefully curated to achieve harmony between architecture and its surroundings. We believe a well-designed facade should feel timeless, not trend-driven—reflecting character, purpose, and refinement. Through thoughtful composition and material selection, we create exteriors that elevate the building’s identity while seamlessly integrating with their environment."
      // services={servicesList}
      />


      {/* section 3 */}


      {/* <TeamSection team={team} /> */}


      {/* Facade Services */}

      <Services />

      {/* Craftsmanship & Materials */}

      <ServicesSection
        imageSrc="/17.png"
        category="Craftsmanship"
        title="Materials That Define Character"
        bgImages={["/65.jpeg", "/24.png", "/74.jpeg"]} // array of background images
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