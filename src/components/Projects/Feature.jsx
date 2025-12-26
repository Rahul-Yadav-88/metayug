"use client";

export default function FeaturesSection({ features = [] }) {
  return (
    <section className="bg-[#1b1b1b] text-[#e5e5e5] py-16 px-6 md:px-12">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div key={index} className="relative pl-6">
            <span className="absolute left-0 top-2 h-full w-[1px] bg-white/30" />
            <h3 className="text-3xl md:text-4xl mb-4">{item.title}</h3>
            <p className="text-sm md:text-base leading-relaxed text-white/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
