"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

export default function TeamSection({
  subtitle = "Collaboration",
  title = "Meet Our Team",
  team = [],
}) {
  return (
    <section className="py-20 px-4 bg-black perspective-[1200px]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] tracking-[0.35em] text-[#f9e3aa] uppercase">
            {subtitle}
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-[#cb972b] mt-3">
            {title}
          </h2>

          <div className="mt-4 mx-auto h-[2px] w-20 bg-[#cb972b]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
