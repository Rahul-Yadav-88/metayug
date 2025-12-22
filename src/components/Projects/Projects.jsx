import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

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

  return (
    <div className='min-h-screen bg-[#1C1C1C]'>
                 <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">


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


{/* <section className='mt-20'>
  <div className='flex justify-center'>
    <div className=' w-[80%] text-white space-y-3'>
    <img src="projects-img7.png" alt="" className='w-full min-h-[200px]'/>
    <p className='text-lg md:text-xl'>Exquisite Marble Bathroom</p>
    <button className='flex items-center gap-2'>Details <ArrowRight size={20}/></button>
  </div>
  </div>
</section> */}

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

        <section className="bg-[#1b1b1b] min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        {/* Heading */}
        <h2 className="text-[#f5f5f5] font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-10">
          Let Us Help Transform Your Living <br className="hidden sm:block" />
          Space into A Masterpiece.
        </h2>

        {/* Button */}
        <button className="bg-[#9f9280] text-white px-8 py-3 text-sm md:text-base tracking-widest uppercase hover:bg-[#b3a693] transition-all duration-300">
          Start Your Journey
        </button>
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
