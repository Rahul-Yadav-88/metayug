import { useEffect, useRef, useState } from "react";

export default function KeywordsSection({ keywords = [] }) {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Duplicate keywords for seamless scrolling
  const scrollingKeywords = [...keywords, ...keywords];

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2); // Only need half for loop
    }
  }, [keywords]);

  return (
    <section className="bg-[#212121] text-[#E5E5E5] py-6 overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animation: `scroll ${scrollWidth / 50}s linear infinite`, // Adjust speed dynamically
        }}
      >
        {scrollingKeywords.map((word, i) => (
          <span
            key={i}
            className="inline-block mx-8 text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest hover:text-[#b6a68a] transition-colors duration-300 cursor-pointer"
          >
            {word}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
