import { notFound } from "next/navigation";

const projects = [
  {
    id: "bachelor-pad",
    title: "Contemporary Bachelor Pad",
    description:
      "A contemporary bachelor pad designed with modern elegance and warmth.",
    images: [
      "/projects-img2.png",
      "/detail1.png",
      "/detail2.png",
    ],
  },
  {
    id: "modern-living",
    title: "Modern Living Room",
    description:
      "A modern living room with balanced textures and neutral tones.",
    images: [
      "/projects-img3.png",
      "/living1.png",
      "/living2.png",
    ],
  },
];

export default function Page({ params }) {
  const project = projects.find((p) => p.id === params.id);

  // ✅ SAFETY CHECK (REQUIRED)
  if (!project) return notFound();

  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white">
      {/* HERO */}
      <section className="relative h-[60vh]">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-serif tracking-widest">
            {project.title}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-400 max-w-3xl mx-auto">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {project.images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-[350px] object-cover"
              alt=""
            />
          ))}
        </div>
      </section>
    </div>
  );
}
