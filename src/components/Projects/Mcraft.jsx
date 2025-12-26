"use client";

export default function MaterialCraftsmanshipSection({ image, title, description }) {
  return (
    <section className="relative bg-black py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="h-[520px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#1c1c1c] flex items-center px-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif text-gray-200 mb-8">{title}</h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
