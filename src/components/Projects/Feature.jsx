"use client";

export default function FeaturesSection({ features = [] }) {
  return (
    <section className="bg-[#1b1b1b] text-[#f9e3aa] py-16 px-6 md:px-12">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative pl-6 p-6 rounded-xl border border-transparent overflow-hidden
                       transition-all duration-300 hover:border-[#cb972b]
                       hover:bg-gradient-to-r hover:from-[#cb972b]/10 hover:via-[#f9e3aa]/10 hover:to-[#cb972b]/10
                       hover:shadow-lg group"
          >
            {/* Golden shimmer effect */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#cb972b]/30 via-[#f9e3aa]/30 to-[#cb972b]/30
                         opacity-0 rotate-12 -translate-x-full group-hover:opacity-100
                         group-hover:translate-x-[200%] transition-all duration-1000 pointer-events-none"
            />

            {/* Vertical Line with pulse on hover */}
            <span className="absolute left-0 top-2 h-full w-[2px] bg-[#cb972b]/70
                             transition-all duration-500 group-hover:scale-y-110 origin-top" />

            {/* Feature Title */}
            <h3 className="text-3xl md:text-4xl mb-4 font-semibold text-[#cb972b]
                           transition-colors duration-300 group-hover:text-[#f9e3aa]">
              {item.title}
            </h3>

            {/* Feature Description */}
            <p className="text-sm md:text-base leading-relaxed text-white/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
