import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ==================================================
         HERO
         ================================================== */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <Image
          src="/Hero_bg.jpg"
          alt="Luxury interior"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="font-serif text-4xl md:text-6xl mb-8">
            Luxury Interior Design <br /> Tailored for You.
          </h1>
          <button className="bg-[#b6a68a] text-black px-8 py-3 text-xs tracking-widest uppercase">
            Our Services
          </button>
        </div>
      </section>

      {/* ==================================================
         ABOUT SHOWCASE
         ================================================== */}
      <section className="relative min-h-[200svh] flex items-center justify-center">
        <Image
          src="/About_ShowCase.jpg"
          alt="Showcase"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <p className="font-serif text-2xl leading-relaxed mb-24">
            We are a high end interior design studio that specializes in
            transforming interiors into majestic & captivating spaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "/About_showCase_Card.jpg",
              "/Hero_bg.jpg",
              "/Post_3.jpg",
            ].map((img, i) => (
              <div key={i} className="relative h-80">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
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
      <section className="py-40 bg-[#4a4a4a] text-center">
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
              <div key={i} className="border border-gray-700 p-6 text-center">
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

        <div className="text-center pt-40 pb-32">
          <h3 className="font-serif text-3xl mb-10">
            Let Us Help Transform Your Living <br /> Space into A Masterpiece.
          </h3>
          <button className="bg-[#b6a68a] text-black px-8 py-3 text-xs uppercase">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* ==================================================
         FOOTER + IMAGE STRIP
         ================================================== */}
      <section className="relative min-h-screen flex flex-col justify-end">

        {/* Footer content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <button className="bg-[#b6a68a] text-black px-8 py-3 text-xs uppercase mb-24">
            Start Your Journey
          </button>

          <div className="grid md:grid-cols-3 gap-20 max-w-6xl w-full">
            <div>
              <h2 className="text-3xl font-serif text-[#b6a68a]">V</h2>
              <p className="italic text-sm text-gray-400">Interiors</p>
            </div>

            <div>
              <h4 className="font-serif text-sm mb-6">Navigation</h4>
              <ul className="space-y-3 text-xs tracking-widest uppercase text-gray-400">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="text-xs text-gray-400">
              <p>info@velainteriorsabc</p>
              <p>123 Peachtree Lane</p>
              <p>Suite 400, Atlanta, GA 30309</p>
            </div>
          </div>
        </div>

        {/* Image strip with half white bg */}
        <div className="relative">
          <div className="absolute bottom-0 w-full h-1/2 bg-[#ded8d1]" />
          <div className="relative z-10 grid grid-cols-4 gap-6 px-6 py-16">
            {[
              "/About_showCase_Card.jpg",
              "/Hero_bg.jpg",
              "/Post_3.jpg",
              "/Hero_bg.jpg",
            ].map((img, i) => (
              <div key={i} className="relative h-56">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
