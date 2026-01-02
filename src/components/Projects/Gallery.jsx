"use client";

import ImageCard from "./ImageCard";

export default function ProjectsGallery({ projects = [] }) {
  return (
    <section className="mt-20">
      <div className="text-white flex flex-col items-center gap-10">
        <img src="projects-img.png" alt="" />
        <h3 className="text-2xl md:text-4xl text-center">
          Explore Our Gallery <br /> of Sophisticated Exterior
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24 mt-20">
        {projects
          .reduce((rows, _, index) => {
            if (index % 2 === 0) rows.push(projects.slice(index, index + 2));
            return rows;
          }, [])
          .map((row, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0;
            const isSingle = row.length === 1;
            return (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-12 gap-12">
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
              </div>
            );
          })}
      </div>
    </section>
  );
}
