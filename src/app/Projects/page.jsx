"use client";

import HeroSection from "../../components/Home/Hero.jsx";
import KeywordsSection from "../../components/Home/Keyword.jsx";
import HighlightsSection from "../../components/Projects/Stars.jsx";
import ProjectsGallery from "../../components/Projects/Gallery.jsx";
import ApproachSection from "../../components/Projects/Approach.jsx";
import FeaturesSection from "../../components/Projects/Feature.jsx";
import MaterialCraftsmanshipSection from "../../components/Projects/Mcraft.jsx";

const Projects = () => {
  const projects = [
    {
      id: "bachelor-pad",
      title: "Contemporary Bachelor Pad",
      image: "projects-img2.png",
    },
    {
      id: "modern-living",
      title: "Modern Living Room",
      image: "projects-img3.png",
    },
    {
      id: "olive-opulence",
      title: "Olive Wood Opulence",
      image: "projects-img4.png",
    },
    {
      id: "white-elegant",
      title: "White Elegant Residential",
      image: "projects-img5.png",
    },
    {
      id: "exquisite-marble-bathroom",
      title: "Exquisite Marble Bathroom",
      image: "projects-img7.png",
    },
  ];

  const approaches = [
    {
      title: "Concept Driven Design",
      description:
        "Every project begins with a strong conceptual foundation. We translate ideas into architectural expressions that reflect clarity, purpose, and refined aesthetics.",
      bg: "/f1.png",
    },
    {
      title: "Material & Detail Focus",
      description:
        "We carefully curate materials, textures, and finishes to achieve balance and longevity, ensuring each design ages with elegance.",
      bg: "/f2.png",
    },
    {
      title: "Contextual Harmony",
      description:
        "Our designs respond thoughtfully to their surroundings—blending scale, proportion, and environment to create timeless architectural harmony.",
      bg: "/f3.png",
    },
  ];

  const highlights = [
    { value: "120+", label: "Projects Completed" },
    { value: "10+", label: "Years of Excellence" },
    { value: "15+", label: "Design Awards" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const features = [
    {
      title: "Exclusive",
      description:
        "We create exclusive interiors tailored to the unique tastes and needs of our discerning clients.",
    },
    {
      title: "Opulent",
      description:
        "We specialize in crafting opulent environments where luxury is felt in every corner of the space.",
    },
    {
      title: "Innovative",
      description:
        "Each project combines innovative design with cutting-edge materials to push creative boundaries.",
    },
  ];

  return (
    <div className="bg-[#1c1c1c] text-white overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection
        imageSrc="/projects-hero.png"
        title="Facade and luxury interior design—tailored exclusively for you."
        subtitle="We create interiors that inspire, comfort, and elevate everyday living."
      />

      {/* KEYWORDS */}
      <KeywordsSection
        keywords={["LUXURY", "CRAFTSMANSHIP", "ELEGANCE", "OPULENCE", "MAJESTIC"]}
      />

      {/* HIGHLIGHTS */}
      <HighlightsSection highlights={highlights} />

      {/* APPROACH */}
      <ApproachSection approaches={approaches} />

      {/* GALLERY */}
      <ProjectsGallery projects={projects} />

      {/* FEATURES */}
      <FeaturesSection features={features} />

      {/* MATERIALS & CRAFTSMANSHIP */}
      <MaterialCraftsmanshipSection
        image="/f1.png"
        title="Materials That Endure"
        description="From stone and wood to glass and metal, every material is selected with precision. Our craftsmanship ensures durability, refinement, and timeless architectural expression."
      />
    </div>
  );
};

export default Projects;
