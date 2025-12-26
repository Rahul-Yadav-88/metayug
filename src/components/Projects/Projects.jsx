"use client";

import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import { useEffect, useState } from "react";

const Projects = () => {
const projects = [
  {
    id: "bachelor-pad",
    title: "Contemporary Bachelor Pad",
    image: "projects-img2.png",
  },
  {
    id: "modern-living",
    title: "Modern Living Room",
    image: "projects-img3.png",
  },
  {
    id: "olive-opulence",
    title: "Olive Wood Opulence",
    image: "projects-img4.png",
  },
  {
    id: "white-elegant",
    title: "White Elegant Residential",
    image: "projects-img5.png",
  },
  {
    id: "exquisite-marble-bathroom",
    title: "Exquisite Marble Bathroom",
    image: "projects-img7.png",
  },
];



const approaches = [
  {
    title: "Concept Driven Design",
    description:
      "Every project begins with a strong conceptual foundation. We translate ideas into architectural expressions that reflect clarity, purpose, and refined aesthetics.",
    bg: "/f1.png",
  },
  {
    title: "Material & Detail Focus",
    description:
      "We carefully curate materials, textures, and finishes to achieve balance and longevity, ensuring each design ages with elegance.",
    bg: "/f2.png",
  },
  {
    title: "Contextual Harmony",
    description:
      "Our designs respond thoughtfully to their surroundings—blending scale, proportion, and environment to create timeless architectural harmony.",
    bg: "/f3.png",
  },
];


const features = [
  {
    title: "Exclusive",
    description:
      "We create exclusive interiors tailored to the unique tastes and needs of our discerning clients.",
  },
  {
    title: "Opulent",
    description:
      "We specialize in crafting opulent environments where luxury is felt in every corner of the space.",
  },
  {
    title: "Innovative",
    description:
      "Each project combines innovative design with cutting-edge materials to push creative boundaries.",
  },
];
  const [active, setActive] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % approaches.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className='min-h-screen bg-[#1C1C1C]'>
                 <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[84vh] overflow-hidden">


                <img
                    src="projects-hero.png"
                    alt="Kitchen interior"
                    className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="relative flex items-center justify-center">


                        <div
                            className="
                absolute 
                w-[220px] h-[90px]
                sm:w-[300px] sm:h-[120px]
                md:w-[380px] md:h-[150px]
                lg:w-[450px] lg:h-[170px]
                bg-white/80 
                blur-[50px] 
                rounded-full
              "
                        ></div>

                       
                        <h1
                            className="
                relative 
                text-3xl
                sm:text-4xl
                md:text-6xl
                lg:text-7xl
                font-serif 
                text-gray-900 
                tracking-[0.25em]
                sm:tracking-[0.3em]
                px-6
                sm:px-10
              "
                        >
                            PROJECTS
                        </h1>

                    </div>
                </div>
            </section>

            {/* section 2 */}
         <section className="bg-[#212121] text-[#E5E5E5] px-4 py-6 sm:py-8">
  <ul
    className="flex flex-wrap justify-around gap-x-6 gap-y-4 text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest"
  >
    <li>LUXURY</li>
    <li>CRAFTSMANSHIP</li>
    <li>ELEGANCE</li>
    <li>OPULENCE</li>
    <li>MAJESTIC</li>
  </ul>
</section>



{/* Project Highlights – New UI */}
<section className="bg-[#212121] py-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-6">

    {[
      { value: "120+", label: "Projects Completed" },
      { value: "10+", label: "Years of Excellence" },
      { value: "15+", label: "Design Awards" },
      { value: "100%", label: "Client Satisfaction" },
    ].map((item, index) => (
      <div key={index} className="text-center">
        <h3 className="text-4xl md:text-5xl font-serif text-[#9f9280]">
          {item.value}
        </h3>
        <p className="text-xs tracking-widest uppercase text-gray-400 mt-3">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>




{/* Project Philosophy – BG Image */}
 <section className="relative h-[85vh] overflow-hidden flex items-center">
      
      {/* Background Images */}
      {approaches.map((item, index) => (
        <img
          key={index}
          src={item.bg}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${active === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

        {/* Left Heading */}
        <div className="md:col-span-4">
          <p className="text-[11px] tracking-[0.35em] text-gray-400 uppercase mb-6">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-snug">
            How We <br /> Design Spaces
          </h2>
        </div>

        {/* Slide Content */}
        <div className="md:col-span-6 relative min-h-[200px]">
          {approaches.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out
                ${
                  index === active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6 pointer-events-none"
                }
              `}
            >
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vertical Indicators */}
        <div className="md:col-span-2 flex md:flex-col gap-4 justify-center md:justify-start">
          {approaches.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-[2px] h-12 transition-all duration-300
                ${active === index ? "bg-[#9f9280]" : "bg-white/30"}
              `}
            />
          ))}
        </div>

      </div>
    </section>


{/* section 3 */}
<section className="mt-20">
  <div className="text-white flex flex-col items-center gap-10">
    <img src="projects-img.png" alt="" />
    <h3 className="text-2xl md:text-4xl text-center">
      Explore Our Gallery <br /> of Sophisticated Interiors
    </h3>
  </div>

  <div className="max-w-7xl mx-auto px-6 space-y-24 mt-20">
    {projects
      .reduce((rows, _, index) => {
        if (index % 2 === 0) {
          rows.push(projects.slice(index, index + 2))
        }
        return rows
      }, [])
      .map((row, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0
        const isSingle = row.length === 1

        return (
          <div
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-12 gap-12"
          >
            {/* If only one image → full width */}
            {isSingle ? (
              <div className="md:col-span-12">
                <ImageCard {...row[0]} />
              </div>
            ) : (
              <>
                {/* First Image */}
                <div
                  className={`${
                    isEvenRow ? "md:col-span-7" : "md:col-span-5"
                  }`}
                >
                  <ImageCard {...row[0]} />
                </div>

                {/* Second Image */}
                <div
                  className={`${
                    isEvenRow ? "md:col-span-5" : "md:col-span-7"
                  }`}
                >
                  <ImageCard {...row[1]} />
                </div>
              </>
            )}
          </div>
        )
      })}
  </div>
</section>




 <section className="bg-[#1b1b1b] text-[#e5e5e5] py-16 px-6 md:px-12">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative pl-6"
          >
            {/* Vertical Line */}
            <span className="absolute left-0 top-2 h-full w-[1px] bg-white/30" />

            {/* Title */}
            <h3 className=" text-3xl md:text-4xl mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-white/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>

       {/* Materials & Craftsmanship – New UI */}
<section className="relative bg-black py-14 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

    {/* Image */}
    <div className="h-[520px]">
      <img
        src="/f1.png"
        alt="Craftsmanship"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Panel */}
    <div className="bg-[#1c1c1c] flex items-center px-12">
      <div>
       
        <h1 className="text-2xl md:text-3xl font-serif text-gray-200 mb-8">
          Materials That Endure
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          From stone and wood to glass and metal, every material is selected
          with precision. Our craftsmanship ensures durability, refinement,
          and timeless architectural expression.
        </p>
      </div>
    </div>

  </div>
</section>

      
    </div>
  )
}

export default Projects


function ImageCard({ id, title, image }) {
  return (
    <div>
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="mt-6">
        <h3 className="text-white text-lg font-serif">
          {title}
        </h3>


        {/* DETAILS BUTTON */}
        <Link
          href={`/Projects/${id}`}
          className="mt-2 inline-block text-xs tracking-[0.25em] uppercase text-gray-400 hover:text-white"
        >
          Details →
        </Link>
      </div>
    </div>
  );
}
