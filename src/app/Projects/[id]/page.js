import { notFound } from "next/navigation";

/* =======================
   ✅ SINGLE DATA SOURCE
======================= */
const projects = [
  {
    id: "bachelor-pad",
    title: "Contemporary Bachelor Pad for Thomas.",
    shortTitle: "Contemporary Bachelor Pad",
    description:
      "Art has long been a defining element of luxury interior design, serving as both an aesthetic centerpiece and a reflection of personal taste. In a luxury space, the integration of fine art elevates the environment, transforming it.",
    serviceType: "Residential Interior",
    features: ["Marble Counter", "Wooden Flooring", "Custom Lighting"],
    heroImage: "/projects-img2.png",
    galleryLarge: ["/gallery1.png", "/gallery2.png"],
    gallerySmall: ["/gallery3.png", "/gallery4.png", "/gallery5.png"],
    galleryLarge2: ["/gallery6.png", "/gallery7.png"],
    gallerySmall2: ["/gallery8.png", "/gallery9.png", "/gallery10.png"],
  },

  {
    id: "modern-living",
    title: "Modern Living Room",
    shortTitle: "Modern Living",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Living Space Design",
    features: ["Neutral Palette", "Natural Light", "Minimal Furniture"],
    heroImage: "/projects-img3.png",
    galleryLarge: ["/gallery1.png", "/gallery2.png"],
    gallerySmall: ["/gallery3.png", "/gallery4.png", "/gallery5.png"],
    galleryLarge2: ["/gallery6.png", "/gallery7.png"],
    gallerySmall2: ["/gallery8.png", "/gallery9.png", "/gallery10.png"],
  },
  {
    id: "olive-opulence",
    title: "Modern Living Room",
    shortTitle: "Modern Living",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Living Space Design",
    features: ["Neutral Palette", "Natural Light", "Minimal Furniture"],
    heroImage: "/projects-img3.png",
    galleryLarge: ["/gallery1.png", "/gallery2.png"],
    gallerySmall: ["/gallery3.png", "/gallery4.png", "/gallery5.png"],
    galleryLarge2: ["/gallery6.png", "/gallery7.png"],
    gallerySmall2: ["/gallery8.png", "/gallery9.png", "/gallery10.png"],
  },
  {
    id: "white-elegant",
    title: "Modern Living Room",
    shortTitle: "Modern Living",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Living Space Design",
    features: ["Neutral Palette", "Natural Light", "Minimal Furniture"],
    heroImage: "/projects-img3.png",
    galleryLarge: ["/gallery1.png", "/gallery2.png"],
    gallerySmall: ["/gallery3.png", "/gallery4.png", "/gallery5.png"],
    galleryLarge2: ["/gallery6.png", "/gallery7.png"],
    gallerySmall2: ["/gallery8.png", "/gallery9.png", "/gallery10.png"],
  },
  {
    id: "exquisite-marble-bathroom",
    title: "Modern Living Room",
    shortTitle: "Modern Living",
    description:
      "A modern living space that balances simplicity with comfort using neutral tones and refined textures.",
    serviceType: "Living Space Design",
    features: ["Neutral Palette", "Natural Light", "Minimal Furniture"],
    heroImage: "/projects-img3.png",
    galleryLarge: ["/gallery1.png", "/gallery2.png"],
    gallerySmall: ["/gallery3.png", "/gallery4.png", "/gallery5.png"],
    galleryLarge2: ["/gallery6.png", "/gallery7.png"],
    gallerySmall2: ["/gallery8.png", "/gallery9.png", "/gallery10.png"],
  },
];

export default async function Page({ params }) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-white/80 blur-[60px] rounded-full" />
            <h1 className="relative text-4xl sm:text-5xl md:text-7xl font-serif text-gray-900 px-10 text-center">
              {project.shortTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* ================= TAG LINE ================= */}
      <section className="bg-[#212121] py-8">
        <ul className="flex flex-wrap justify-around text-sm sm:text-lg md:text-2xl tracking-widest text-white/80">
          <li>LUXURY</li>
          <li>CRAFTSMANSHIP</li>
          <li>ELEGANCE</li>
          <li>OPULENCE</li>
          <li>MAJESTIC</li>
        </ul>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="max-w-xl mx-auto text-center">
  <h2 className="text-3xl md:text-5xl font-serif mb-10">
    {project.title}
  </h2>
</div>


        <div className="grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
          <p className="md:col-span-2 text-white/70 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Service Type
              </p>
              <p>{project.serviceType}</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-white/40 mb-2">
                Features
              </p>
              <ul className=" flex">
                {project.features.map((item, i) => (
                  <li key={i}>{item}, </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LARGE IMAGES ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {project.galleryLarge.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-[620px] object-cover"
          />
        ))}
      </section>

      {/* ================= SMALL IMAGES ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24">
        {project.gallerySmall.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-[380px] object-cover"
          />
        ))}
      </section>
      {/* ================= LARGE IMAGES 2================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mt-16">
        {project.galleryLarge2.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-[620px] object-cover"
          />
        ))}
      </section>

      {/* ================= SMALL IMAGES2 ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20 pb-24">
        {project.gallerySmall2.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-[380px] object-cover"
          />
        ))}
      </section>

    </div>
  );
}
