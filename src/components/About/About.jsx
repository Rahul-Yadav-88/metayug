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

            {/* section 3 */}

            <section className=" py-20 px-4">
                <div className="max-w-6xl mx-auto ">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-[11px] tracking-[0.35em] text-gray-500 uppercase">
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

            
        </div>
    )
}

export default page