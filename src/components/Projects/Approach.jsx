"use client";

import { useState, useEffect } from "react";

export default function ApproachSection({ approaches = [] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!approaches.length) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % approaches.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [approaches]);

  return (
    <section className="relative h-[75vh] px-10 md:h-[85vh] overflow-hidden flex items-center bg-[#212121]">
      {/* Background Images */}
      {approaches.map((item, index) => (
        <img
          key={index}
          src={item.bg}
          alt={item.title}
          loading={index === active ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${active === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Dark + Gold Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />

      {/* Soft Gold Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[420px] h-[420px] md:w-[600px] md:h-[600px] rounded-full bg-[#cb972b]/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-14 items-center">
        {/* Left */}
        <div className="md:col-span-4">
          <p className="text-[11px] tracking-[0.35em] text-[#f9e3aa]/70 uppercase mb-6">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#f9e3aa] leading-snug">
            How We <br /> Design Spaces
          </h2>
        </div>

        {/* Center Content */}
        <div className="md:col-span-6 relative min-h-[220px]">
          {approaches.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-out
                ${
                  index === active
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-6 pointer-events-none"
                }`}
            >
              <h3 className="text-2xl md:text-3xl font-serif text-[#cb972b] mb-5 drop-shadow-[0_0_8px_rgba(203,151,43,0.4)]">
                {item.title}
              </h3>
              <p className="text-[#f9e3aa]/80 text-sm md:text-base leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Indicators */}
        <div className="md:col-span-2 flex md:flex-col gap-4 justify-center md:justify-start">
          {approaches.map((_, index) => (
            <button
              key={index}
              aria-label={`Approach ${index + 1}`}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 rounded-full
                ${
                  active === index
                    ? "bg-[#cb972b] h-16"
                    : "bg-[#f9e3aa]/40 h-10"
                }
                w-[3px]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
