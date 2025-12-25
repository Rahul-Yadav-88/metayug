import Image from "next/image";
import Crou from "../../components/Home/Crousel.jsx";
export default function Home() {
  return (
    <main className="bg-[#1c1c1c] text-white overflow-hidden">

      {/* section 1 - hero */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[84vh] overflow-hidden">


        <img
          src="Hero_bg.jpg"
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
    text-center
    mx-auto
    text-xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    font-serif
    text-gray-900
    tracking-[0.25em]
    sm:tracking-[0.3em]
    px-6
    sm:px-10
  "
            >
              Luxury Interior Design <br /> Tailored for You.
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

      {/* ==================================================
         ABOUT SHOWCASE
         ================================================== */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <Image src="/About_ShowCase.jpg" alt="Showcase" fill className="object-cover opacity-25" />
        <div className="relative z-10 w-full max-w-5xl px-6">
          <p className="font-serif text-2xl leading-relaxed mb-24 text-center">
            We are a high end interior design studio that specializes in transforming interiors into majestic &
            captivating spaces.
          </p>

          <Crou />
        </div>
      </section>

      {/* ==================================================
         FOUNDER INTRO
         ================================================== */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[420px] w-[320px] rounded-tl-[180px] overflow-hidden">
            <Image
              src="/Founder_image.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[#b6a68a] mb-4">Welcome</p>
            <h2 className="font-serif text-4xl mb-6">I Am Marcus Finn</h2>
            <p className="text-gray-300 leading-relaxed mb-10">
              As the founder of Vela, I believe interior design is about crafting
              environments that inspire, comfort, and elevate everyday living.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#b6a68a] text-black px-6 py-3 text-xs uppercase">
                Our Team
              </button>
              <button className="border border-gray-500 px-6 py-3 text-xs uppercase">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
         TESTIMONIAL
         ================================================== */}
      <section className="py-20 bg-[#4a4a4a] text-center">
        <p className="text-6xl mb-8">“</p>
        <p className="font-serif text-xl max-w-3xl mx-auto mb-10">
          It was a pleasure working with Katie. We are a high-end interior design
          studio that specializes in transforming interiors into majestic &
          captivating spaces.
        </p>
        <p className="tracking-widest text-sm">LUKE COLLINS</p>
      </section>

      {/* ==================================================
         SERVICES
         ================================================== */}
      <section className="min-h-[150svh] flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[80vh]">
            <Image
              src="/ServiceIntro.jpg"
              alt="Services"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#b6a68a] mb-4">Classic</p>
            <h2 className="font-serif text-4xl mb-6">
              Interior Design Services <br /> And Much More...
            </h2>
            <p className="text-gray-300 mb-10">
              Here is some space to grab attention and explain what you do in a
              refined, confident way.
            </p>
            <ul className="space-y-3 text-sm">
              <li>01. Residential Design</li>
              <li>02. Commercial Interiors</li>
              <li>03. Living Room Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==================================================
         BLOG + CTA
         ================================================== */}
      <section className="relative min-h-[150svh] px-6">
        <div className="max-w-7xl mx-auto pt-32">
          <div className="text-center mb-24">
            <p className="text-xs tracking-widest text-gray-400 mb-3">BLOG</p>
            <h2 className="font-serif text-4xl">Latest Posts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              "The Role of Art in Luxury Interior Design.",
              "Color Palettes for Interiors: The Guide",
              "Small Touches That Make an Impact in Design.",
            ].map((title, i) => (
              <div key={i} className="border border-gray-700 bg-black p-6 text-center">
                <div className="relative aspect-[4/5] mb-8">
                  <Image
                    src="/Hero_bg.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-serif text-sm mb-6">{title}</p>
                <span className="text-xs tracking-widest uppercase text-gray-400">
                  Read Post
                </span>
              </div>
            ))}
          </div>
        </div>


      </section>




    </main>
  );
}
