"use client";

import Link from "next/link";

export default function ImageCard({ id, title, image }) {
  return (
    <div>
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105" />
      </div>
      <div className="mt-6">
        <h3 className="text-white text-lg font-serif">{title}</h3>
        <Link href={`/Projects/${id}`} className="mt-2 inline-block text-xs tracking-[0.25em] uppercase text-gray-400 hover:text-white">
          Details →
        </Link>
      </div>
    </div>
  );
}
