import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center px-6 py-16 md:py-24">
        <h2 className="text-center font-serif text-3xl md:text-4xl lg:text-5xl text-[#c4c4c4] leading-tight max-w-3xl text-balance">
          Let Us Help Transform Your Living Space into A Masterpiece.
        </h2>
        <button className="mt-8 bg-[#a89b8f] px-8 py-3 text-sm font-medium tracking-wide text-white hover:bg-[#988c80] transition-colors">
          START YOUR JOURNEY
        </button>
      </div>

      {/* Main Footer Content */}
      <div className=" px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            {/* Logo Section */}
            <div className="flex justify-center items-center">
      <Image
        src="/b2.png"   // put your logo inside /public folder
        alt="V Interiors Logo"
        width={120}
        height={120}
        className="object-contain"
        priority
      />
    </div>

            {/* Navigation Section */}
            <div className="text-center">
              <h3 className="font-serif text-xl mb-6 relative inline-block">
                Navigation
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
              </h3>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="text-[#c4c4c4] hover:text-white transition-colors text-sm">
                  HOME
                </Link>
                <Link href="/portfolio" className="text-[#c4c4c4] hover:text-white transition-colors text-sm">
                  PORTFOLIO
                </Link>
                <Link href="/services" className="text-[#c4c4c4] hover:text-white transition-colors text-sm">
                  SERVICES
                </Link>
                <Link href="/about" className="text-[#c4c4c4] hover:text-white transition-colors text-sm">
                  ABOUT
                </Link>
                <Link href="/blog" className="text-[#c4c4c4] hover:text-white transition-colors text-sm">
                  BLOG
                </Link>
                <Link href="/contact" className="text-[#c4c4c4] hover:text-white transition-colors text-sm">
                  CONTACT
                </Link>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="text-center md:text-right">
              <div className="space-y-3">
                <a
                  href="mailto:INFO@VBELANINTERIORS.ABC"
                  className="block text-[#c4c4c4] hover:text-white transition-colors text-sm"
                >
                  INFO@VBELANINTERIORS.ABC
                </a>
                <div className="text-[#c4c4c4] text-sm">
                  <div className="font-serif text-base mb-1">123 Peachtree Lane,</div>
                  <div>Suite 100, Atlanta GA 30309</div>
                </div>
                <div className="flex gap-3 justify-center md:justify-end pt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c4c4c4] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c4c4c4] hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c4c4c4] hover:text-white transition-colors"
                    aria-label="Pinterest"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-14 pb-6">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/b1.png"
            alt="Elegant living room with bay windows"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/b1.png"
            alt="Luxury bedroom with elegant armchairs"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image src="/b1.png" alt="Sophisticated hallway" fill className="object-cover" />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image src="/b1.png" alt="Elegant living space" fill className="object-cover" />
        </div>
      </div>
    </footer>
  )
}
