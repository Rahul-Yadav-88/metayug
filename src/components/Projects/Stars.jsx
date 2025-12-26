"use client";

export default function HighlightsSection({ highlights = [] }) {
  return (
    <section className="bg-[#212121] py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-6">
        {highlights.map((item, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl md:text-5xl font-serif text-[#9f9280]">{item.value}</h3>
            <p className="text-xs tracking-widest uppercase text-gray-400 mt-3">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
