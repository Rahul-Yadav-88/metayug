"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9p0re8n",
        "template_fvfjy4g",
        formRef.current,
        "KWNSVH9gj4jPcDA22"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  const faqData = [
    {
      id: "01",
      title: "WHAT SERVICES DO YOU OFFER?",
      description:
        "We provide residential and commercial exterior design services, including space planning, material selection, and custom design solutions.",
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
      <HeroSection imageSrc="/c1.webp" title="Contact Us" showButton={false} />

      {/* KEYWORDS */}
      <KeywordsSection keywords={["Bespoke Architecture · Crafted with Precision"]} />

      {/* CONTACT FORM */}
      <section className="mt-20 px-6 py-10 overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">

          {/* FORM */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-center py-16 md:py-0">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-8 w-full max-w-xl"
            >

              <div className="relative">
                <input
                  name="name"
                  required
                  className="peer w-full bg-black text-[#f9e3aa] px-5 py-4 rounded-md focus:outline-none"
                />
                <label className="absolute left-5 top-1/2 -translate-y-1/2 text-sm tracking-widest text-[#cb972b]/70 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                  Your Name
                </label>
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#cb972b] to-[#f9e3aa] opacity-40 pointer-events-none" />
              </div>

              <div className="relative">
                <input
                  name="email"
                  // type="email"
                  required
                  className="peer w-full bg-black text-[#f9e3aa] px-5 py-4 rounded-md focus:outline-none"
                />
                <label className="absolute left-5 top-1/2 -translate-y-1/2 text-sm tracking-widest text-[#cb972b]/70 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                  Email Address
                </label>
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#cb972b] to-[#f9e3aa] opacity-40 pointer-events-none" />
              </div>

              <div className="relative">
                <input
                  name="phone"
                  required
                  className="peer w-full bg-black text-[#f9e3aa] px-5 py-4 rounded-md focus:outline-none"
                />
                <label className="absolute left-5 top-1/2 -translate-y-1/2 text-sm tracking-widest text-[#cb972b]/70 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                  Phone Number
                </label>
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#cb972b] to-[#f9e3aa] opacity-40 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  name="area"
                  required
                  defaultValue=""
                  className="peer w-full bg-black text-[#f9e3aa] px-5 py-4 rounded-md focus:outline-none"
                >
                  <option value="" disabled hidden />
                  <option>Under 1,000 Sq ft</option>
                  <option>1,000–3,000 Sq ft</option>
                  <option>3,000–10,000 Sq ft</option>
                  <option>Over 10,000 Sq ft</option>
                </select>
                <label className="absolute left-5 top-1/2 -translate-y-1/2 text-sm tracking-widest text-[#cb972b]/70 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                  Select Area Range
                </label>
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#cb972b] to-[#f9e3aa] opacity-40 pointer-events-none" />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  className="peer w-full bg-black text-[#f9e3aa] px-5 py-6 resize-none rounded-md focus:outline-none"
                />
                <label className="absolute left-5 top-6 text-sm tracking-widest text-[#cb972b]/70 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                  Tell us more about your Project
                </label>
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-[#cb972b] to-[#f9e3aa] opacity-40 pointer-events-none" />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#cb972b] to-[#f9e3aa] px-12 py-4 tracking-widest text-black font-medium rounded-sm"
              >
                SEND
              </motion.button>

            </form>
          </div>

          {/* IMAGE */}
          <motion.div {...floatAnimation} className="w-full md:w-1/2 pr-0 md:pr-6">
            <img
              src="/h2.jpeg"
              className="w-full h-[90vh] object-cover rounded-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 perspective-[1400px] space-y-32">
        <div className="max-w-[90%] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 order-2 md:order-1">
            {faqData.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ rotateY: 8, y: -10, boxShadow: "0 0 20px #cb972b" }}
                className="border-l-4 border-[#cb972b] pl-6 rounded-md bg-[#1a1a1a]/50"
              >
                <p className="text-[#cb972b] text-xl font-semibold">{item.id}.</p>
                <h3 className="uppercase tracking-widest text-[#f9e3aa] mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...floatAnimation} className="flex justify-center order-1 md:order-2">
            <img src="/2.png" className="w-[400px] h-[500px] object-cover rounded-xl" />
          </motion.div>
        </div>

        <div className="max-w-[90%] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...floatAnimation} className="flex justify-center">
            <img src="/10.png" className="w-[400px] h-[500px] object-cover rounded-xl" />
          </motion.div>

          <div className="space-y-12">
            {faqData2.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ rotateY: -8, y: -10, boxShadow: "0 0 20px #cb972b" }}
                className="border-l-4 border-[#cb972b] pl-6 rounded-md bg-[#1a1a1a]/50"
              >
                <p className="text-[#cb972b] text-xl font-semibold">{item.id}.</p>
                <h3 className="uppercase tracking-widest text-[#f9e3aa] mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
