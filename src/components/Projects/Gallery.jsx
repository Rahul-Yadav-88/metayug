"use client";

import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

export default function ProjectsGallery({ projects = [] }) {
  // Split projects into rows of 2
  const projectRows = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectRows.push(projects.slice(i, i + 2));
  }

  // Animation variants for row sliding
  const rowVariants = (isEvenRow) => ({
    hidden: { opacity: 0, x: isEvenRow ? -50 : 50, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  });

  return (
    <section className="mt-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 text-center">
        <img src="/projects-img.png" alt="Projects" className="opacity-90" />
        <h3 className="text-2xl md:text-4xl font-light tracking-wide text-[#f9e3aa]">
          Explore Our Gallery <br />
          <span className="text-[#cb972b] font-medium">
            of Sophisticated Exterior
          </span>
        </h3>
        <div className="h-[2px] w-24 bg-[#cb972b]/70 rounded-full" />
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mt-20 space-y-24">
        {projectRows.map((row, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const isSingle = row.length === 1;

          return (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-12 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={rowVariants(isEvenRow)}
            >
              {isSingle ? (
                <div className="md:col-span-12">
                  <ImageCard {...row[0]} />
                </div>
              ) : (
                <>
                  <div className={`${isEvenRow ? "md:col-span-7" : "md:col-span-5"}`}>
                    <ImageCard {...row[0]} />
                  </div>
                  <div className={`${isEvenRow ? "md:col-span-5" : "md:col-span-7"}`}>
                    <ImageCard {...row[1]} />
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
