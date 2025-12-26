"use client";

import { useState, useEffect } from "react";

export default function ApproachSection({ approaches = [] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % approaches.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [approaches.length]);

  return (
    <section className="relative h-[85vh] overflow-hidden flex items-center">
      {approaches.map((item, index) => (
        <img
          key={index}
          src={item.bg}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${active === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-4">
          <p className="text-[11px] tracking-[0.35em] text-gray-400 uppercase mb-6">Our Approach</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-snug">
            How We <br /> Design Spaces
          </h2>
        </div>
        <div className="md:col-span-6 relative min-h-[200px]">
          {approaches.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${index === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
            >
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">{item.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 flex md:flex-col gap-4 justify-center md:justify-start">
          {approaches.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-[2px] h-12 transition-all duration-300 ${active === index ? "bg-[#9f9280]" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
