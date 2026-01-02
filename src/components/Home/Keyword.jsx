"use client";

import { useEffect, useRef, useState } from "react";

export default function KeywordsSection({ keywords = [] }) {
  const containerRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(10);

  // Ensure enough width for smooth looping
  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const estimatedWordWidth = 200; // avg width per word incl. margin
    const neededRepeats = Math.ceil(containerWidth / estimatedWordWidth) + 2;

    setRepeatCount(neededRepeats);
  }, []);

  // Repeat keywords many times
  const scrollingKeywords = Array.from(
    { length: repeatCount },
    () => keywords
  ).flat();

  return (
    <section className="bg-[#212121] text-[#E5E5E5] py-6 overflow-hidden">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap animate-marquee"
      >
        {scrollingKeywords.map((word, i) => (
          <span
            key={i}
            className="mx-10 text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest hover:text-[#b6a68a] transition-colors duration-300 cursor-pointer"
          >
            {word}
          </span>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
