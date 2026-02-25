"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ value, duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  

  useEffect(() => {
    if (!isInView) return;

    const end = parseInt(value, 10);
    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {value.includes("+") ? `${count}+` : count}
    </span>
  );
}

export default function HighlightsSection({ highlights = [] }) {
  return (
    <section className="relative bg-[#212121] py-24 overflow-hidden">
      {/* Radial Gold Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#cb972b]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-center">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              {/* Divider */}
              <span className="block mx-auto mb-6 h-[2px] w-12 bg-[#cb972b] opacity-70 transition-all duration-300 group-hover:w-20" />

              {/* Value */}
              <h3
                className="text-4xl md:text-5xl font-serif text-[#cb972b]
                           drop-shadow-[0_0_14px_rgba(203,151,43,0.4)]"
              >
                <CountUp value={item.value} />
              </h3>

              {/* Label */}
              <p className="mt-4 text-xs tracking-[0.3em] uppercase text-[#f9e3aa] opacity-80">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
