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
      title: "Residential Facade Design",
      image: "/15.jpeg",
      link: "/Projects/residential-facade-design",
    },
    {
      title: "Commercial Facade Design",
      image: "/9.jpeg",
      link: "/Projects/commercial-facade-design",
    },
    // {
    //   title: "Olive Wood Opulence",
    //   image: "/13.png",
    //   link: "/Projects/modern-living",
    // },
    {
      title: "Sleek Modern Exterior Design",
      image: "/h1.jpeg",
      link: "/Projects/sleek-modern-exterior-design",
    },
    {
      title: "Exterior Elevation & Front View Design",
      image: "/h3.jpeg",
      link: "/Projects/exterior-elevation-front-view-design",
    },
  ];


  const approaches = [
    {
      title: "Concept Driven Design",
      description:
        "Every project begins with a strong conceptual foundation. We translate ideas into architectural expressions that reflect clarity, purpose, and refined aesthetics.",
      bg: "/84.webp",
    },
    {
      title: "Material & Detail Focus",
      description:
        "We carefully curate materials, textures, and finishes to achieve balance and longevity, ensuring each design ages with elegance.",
      bg: "/80.webp",
    },
    {
      title: "Contextual Harmony",
      description:
        "Our designs respond thoughtfully to their surroundings—blending scale, proportion, and environment to create timeless architectural harmony.",
      bg: "/7.webp",
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
        "We create exclusive Exterior tailored to the unique tastes and needs of our discerning clients.",
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
        imageSrc="/40.png"
        title="Our Projects"
        buttonLink="/Projects/commercial-facade-design"

      />

      {/* KEYWORDS */}
      <KeywordsSection
        keywords={["Bespoke Architecture · Crafted with Precision"]}
      />

      {/* HIGHLIGHTS */}
      {/* <HighlightsSection highlights={highlights} /> */}

      {/* APPROACH */}
      <ApproachSection approaches={approaches} />

      {/* GALLERY */}
      <div id="products" >

        <ProjectsGallery projects={projects} />
      </div>

      {/* FEATURES */}
      <FeaturesSection features={features} />

      {/* MATERIALS & CRAFTSMANSHIP */}
      <MaterialCraftsmanshipSection
        image="/fff.jpeg"
        title="Materials That Endure"
        description="From premium metal panels to finely crafted metal finishes, every material is selected with precision and attention to detail. Our expert craftsmanship ensures exceptional durability, superior structural performance, and refined aesthetics, resulting in a timeless architectural expression that stands strong against changing trends and environmental conditions."
      />
    </div>
  );
};

export default Projects;
