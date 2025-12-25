"use client"

import Image from "next/image"
import { useParams } from "next/navigation"

const posts = [
 {
    id: 1,
    slug: "role-of-art-in-luxury-interior-design",
    title: "The Role of Art in Luxury Interior Design",
    date: "APRIL 23, 2025",
    heroImage: "/b1.png",
    contentImage: "/blog1.png",
    quote: "The details are not the details. They make the design.",
    paragraphs: [
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste.",
      "The placement of art in a luxury interior is equally important. A carefully curated gallery wall or oversized painting can define a room’s atmosphere.",
      "In addition to its visual impact, art reflects the homeowner’s values, interests, and life experiences.",
      "In conclusion, art enhances emotional connection, aesthetic appeal, and sophistication in luxury spaces."
    ]
  },
  {
    title: "Color Palettes for Interiors: The Guide",
    image: "/b2.png",
    slug: "color-palettes-for-interiors-guide",
    content: "This is the full blog content for Color Palettes.",
  },
  {
    title: "Small Touches that Make an Impact in Design",
    image: "/b3.png",
    slug: "small-touches-impact-design",
    content: "This is the full blog content for Small Touches.",
  },
]

export default function BlogDetailPage() {
  const { slug } = useParams()

  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return <p className="text-center py-20 text-white">Post not found</p>
  }

  return (
    <main className="bg-[#111] text-[#eae7e2] min-h-screen">
      {/* Hero Image */}
      {/* <div className="relative h-[60vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div> */}


      
            <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">


                <img
                    src={post.heroImage}
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
              
                px-6
                sm:px-10
              "
                        >
                            {post.title}
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


    <section className="bg-[#111] text-[#eae7e2] px-4 py-20">
  <div className="max-w-3xl mx-auto text-center">

    {/* Date */}
    <p className="text-xs tracking-[0.25em] text-gray-400 mb-4">
     {post.date}
    </p>

    {/* Title */}
    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-10">
      {post.title}
    </h1>

    {/* Intro Paragraph */}
 <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
  {post.paragraphs.slice(0, 2).join(" ")}
  <br />
  <br />
  {post.paragraphs.slice(2).join(" ")}
</p>



    {/* Image */}
    <div className="flex justify-center mb-10">
      <img
        src="/blog1.png"
        alt="Luxury interior"
        className="w-full sm:w-[80%] md:w-[65%] lg:w-[55%] object-cover"
      />
    </div>

    {/* Quote */}
    <blockquote className="italic text-lg sm:text-xl font-serif text-gray-200 mb-10">
      “The details are not the details. <br className="hidden sm:block" />
      They make the design.”
    </blockquote>

    {/* Content */}
    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
      In addition to its visual impact, art in luxury interior design
      often reflects the homeowner’s values, interests, or life
      experiences. Whether it’s a piece that evokes nostalgia, honors
      cultural heritage, or supports a cause, art becomes a form of
      storytelling that enriches the space and the lives of those who
      live within it.
    </p>

    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
      In conclusion, art plays a multifaceted role in luxury interior
      design by enhancing the aesthetic appeal, fostering emotional
      connection, and creating a refined atmosphere. It is not only a
      display of beauty but also a symbol of sophistication and
      individuality.
    </p>

  </div>
</section>

    </main>
  )
}
