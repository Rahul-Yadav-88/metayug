import React from 'react'


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


const page = () => {
    return (
        <div className='bg-[#1c1c1c]'>
            <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[84vh] overflow-hidden">


                <img
                    src="A.png"
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
                            About
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


{/* About Facade */}
<section className="bg-[#1c1c1c] py-24 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Text */}
    <div>
      <p className="text-[15px] tracking-[0.35em] text-gray-500 uppercase mb-4">
        About Us
      </p>
      <h2 className="text-3xl md:text-4xl font-serif text-gray-200 mb-6">
        Timeless Facade Design
      </h2>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        We specialize in designing elegant and timeless facades that define the
      architectural identity of a space. Our work blends proportion, material
      intelligence, and refined aesthetics to create exteriors that leave a
      lasting impression.
      <br /><br />
      From contemporary elevations to classic architectural expressions, each
      facade is thoughtfully designed to balance beauty, functionality, and
      structural harmony—tailored uniquely to every client and context.
      </p>
    </div>

    {/* Image */}
    <div className="border border-[#2a2a2a] p-4 bg-black">
      <img
        src="/f1.png"
        alt="Luxury Facade Design"
        className="w-full h-[420px] object-cover rounded-md"
      />
    </div>

  </div>
</section>



{/* Vision & Philosophy */}
<section className="bg-[#212121] py-24 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Image */}
    <div className="border border-[#2a2a2a] p-4 bg-black">
      <img
        src="/f2.png"
        alt="Architectural Facade"
        className="w-full h-[420px] object-cover rounded-md"
      />
    </div>

    {/* Text */}
    <div>
      <h3 className="text-2xl font-serif text-gray-200 mb-6">
        Design Philosophy
      </h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        Our philosophy is rooted in balance, proportion, and detail. Every line, material, and texture is carefully curated to achieve harmony between architecture and its surroundings. We believe a well-designed facade should feel timeless, not trend-driven—reflecting character, purpose, and refinement. Through thoughtful composition and material selection, we create exteriors that elevate the building’s identity while seamlessly integrating with their environment.
      </p>
    </div>

  </div>
</section>




            {/* section 3 */}

            <section className=" py-20 px-4">
                <div className="max-w-6xl mx-auto ">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[15px] tracking-[0.35em] text-gray-500 uppercase">
                            Collaboration
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-200 mt-3">
                            Meet our Team
                        </h2>
                    </div>

                    {/* 2 Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-y-20">
                        {team.map((member, index) => (
                            <div key={index} className="flex justify-center">

                                {/* Card */}
                                <div className="border border-[#2a2a2a] bg-black p-8 w-full max-w-[400px]">

                                    {/* Image Frame */}
                                    <div className="border border-[#2a2a2a]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-[420px] object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center mt-6">
                                        <h3 className="text-gray-200 text-sm tracking-widest uppercase">
                                            {member.name}
                                        </h3>
                                        <br />
                                        <p className="text-[11px] border-b-2 border-[#8D8271] text-gray-500 tracking-[0.25em] uppercase mt-2">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Facade Services */}
<section className="bg-[#1c1c1c] py-2 px-4">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-[15px] tracking-[0.35em] text-gray-500 uppercase">
        Services
      </p>
      <h2 className="text-3xl md:text-4xl font-serif text-gray-200 mt-4">
        What We Do
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {[
        { title: "Residential Facades", img: "/f1.png" },
        { title: "Commercial Elevations", img: "/f2.png" },
        { title: "Exterior Renovation", img: "/f3.png" },
      ].map((item, index) => (
        <div key={index} className="border border-[#2a2a2a] bg-black">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[260px] object-cover rounded-md"
          />
          <p className="text-gray-300 text-sm tracking-widest uppercase text-center py-6">
            {item.title}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


{/* Craftsmanship & Materials */}
<section className="bg-[#1c1c1c]  px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Text */}
    <div>
      <p className="text-[15px] tracking-[0.35em] text-gray-500 uppercase mb-4">
        Craftsmanship
      </p>

      <h3 className="text-2xl md:text-3xl font-serif text-gray-200 mb-6">
        Materials That Define Character
      </h3>

      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        Our work is defined by a deep respect for craftsmanship and material
        integrity. Every surface, texture, and finish is carefully selected to
        enhance both durability and aesthetic appeal.
        <br /><br />
        From natural stone and concrete to glass and metal, we ensure each
        material complements the architectural form—creating facades that age
        gracefully and remain timeless.
      </p>
    </div>

    {/* Image */}
    <div className="border border-[#2a2a2a] p-2 bg-black rounded-md">
      <img
        src="/f4.png"
        alt="Facade material craftsmanship"
        className="w-full h-[420px] object-cover"
      />
    </div>

  </div>
</section>


            
        </div>
    )
}

export default page