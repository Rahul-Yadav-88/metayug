"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../../components/Home/Hero.jsx";
import KeywordsSection from "../../components/Home/Keyword.jsx";

const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    rotateZ: [0, 1, -1, 0],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const fade3D = {
  hidden: { opacity: 0, y: 80, rotateX: 20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Contact = () => {
  const faqData = [
    {
      id: "01",
      title: "WHAT SERVICES DO YOU OFFER?",
      description:
        "We provide residential and commercial interior design, including space planning, furniture selection, and custom design solutions.",
    },
    {
      id: "02",
      title: "HOW DO I START A PROJECT?",
      description:
        "Contact us via our website or studio visit. We understand your goals, budget, and timeline.",
    },
    {
      id: "03",
      title: "DO YOU OFFER CUSTOM DESIGNS?",
      description:
        "Yes, every design is tailor-made based on your space, taste, and requirements.",
    },
  ];

  const faqData2 = [
    {
      id: "01",
      title: "HOW LONG DOES A PROJECT TAKE?",
      description:
        "Depending on complexity, projects typically range from a few weeks to several months.",
    },
    {
      id: "02",
      title: "DO YOU HANDLE RENOVATIONS?",
      description:
        "Yes, we offer complete renovation management from design to execution.",
    },
    {
      id: "03",
      title: "WHAT IS YOUR DESIGN PROCESS?",
      description:
        "We follow a structured approach: discovery, concept, design, execution, and delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] overflow-hidden">

      {/* HERO */}
      <HeroSection imageSrc="/c1.webp" title="Contact Us." showButton={false} />

      {/* KEYWORDS */}
      <KeywordsSection
        keywords={["Bespoke Architecture · Crafted with Precision"]}
      />

      {/* CONTACT FORM */}
      <section className="mt-16 perspective-[1600px]">
        <div className="flex flex-col md:flex-row">

          {/* FORM */}
          <motion.div
            variants={fade3D}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2 px-10 py-20"
          >
            <h2 className="text-white text-4xl md:text-5xl font-serif mb-20 leading-tight">
              We Are Ready to Help You
              <br />
              Elevate Your Space
            </h2>

            <form className="space-y-6">
              {["YOUR NAME", "EMAIL ADDRESS", "SERVICE INTERESTED IN"].map(
                (item, i) => (
                  <input
                    key={i}
                    placeholder={item}
                    className="w-full bg-[#C7C7C7] px-5 py-4 tracking-widest focus:outline-none"
                  />
                )
              )}

              <textarea
                placeholder="WRITE YOUR MESSAGE HERE"
                rows="6"
                className="w-full bg-[#C7C7C7] px-5 py-4 tracking-widest resize-none focus:outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.05, rotateX: 10 }}
                className="bg-[#8D8271] px-10 py-4 tracking-widest text-white"
              >
                START YOUR JOURNEY
              </motion.button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="w-full md:w-1/2 h-[400px] md:h-[800px] pr-4"
            {...floatAnimation}
          >
            <img
              src="c2.webp"
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION 1 */}
      <section className="py-20 px-6 perspective-[1400px]">
        <div className="max-w-[90%] mx-auto grid md:grid-cols-2 gap-16">

          <div className="space-y-12">
            {faqData.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ rotateY: 8, y: -10 }}
                className="border-l border-[#8D8271] pl-6"
              >
                <p className="text-[#8D8271] text-xl">{item.id}.</p>
                <h3 className="uppercase tracking-widest text-gray-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2 max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...floatAnimation} className="flex justify-center">
            <img
              src="c3.webp"
              className="w-[400px] h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION 2 */}
      <section className="py-20 px-6 perspective-[1400px]">
        <div className="max-w-[90%] mx-auto grid md:grid-cols-2 gap-16">

          <motion.div {...floatAnimation} className="flex justify-center">
            <img
              src="c4.webp"
              className="w-[400px] h-[500px] object-cover"
            />
          </motion.div>

          <div className="space-y-12">
            {faqData2.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ rotateY: -8, y: -10 }}
                className="border-l border-[#8D8271] pl-6"
              >
                <p className="text-[#8D8271] text-xl">{item.id}.</p>
                <h3 className="uppercase tracking-widest text-gray-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2 max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
