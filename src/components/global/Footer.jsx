import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c]">
      {/* ==================================================
         FOOTER + IMAGE STRIP
         ================================================== */}
      <section className="relative min-h-screen flex flex-col justify-end">


        {/* Footer content */}
        <div className="text-center pt-20 pb-10">
          <h3 className="font-serif text-white text-3xl mb-6">
            Let Us Help Transform Your Living <br /> Space into A Masterpiece.
          </h3>
          
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <button className="bg-[#b6a68a] text-black px-8 py-3 text-xs uppercase mb-12">
            Start Your Journey
          </button>

          <div className="grid md:grid-cols-3 gap-20 max-w-6xl w-full">
            <div>
              <h2 className="text-3xl font-serif text-[#b6a68a]">V</h2>
              <p className="italic text-sm text-gray-400">Interiors</p>
            </div>

            <div className="text-gray-400">
              <h4 className="font-dubiel text-3xl italic mb-6">Navigation</h4>
              <ul className="space-y-3 text-xs tracking-widest uppercase ">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="text-lg text-gray-400">
              <p>info@velainteriorsabc</p>
              <p>123 Peachtree Lane</p>
              <p>Suite 400, Atlanta, GA 30309</p>
            </div>
          </div>
        </div>

        {/* Image strip with half white bg */}
        <div className="relative">
          <div className="absolute bottom-0 w-full h-28 bg-[#ded8d1]" />
          <div className="relative z-10 grid grid-cols-4 gap-10 px-20 py-14">
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
      </footer>

  )
}
