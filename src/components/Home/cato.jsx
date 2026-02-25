"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DownloadCatalogSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [8, -8]);
  const rotateY = useTransform(x, [-120, 120], [-8, 8]);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Dropdown states with default values
  const [role, setRole] = useState("Are You");
  const [area, setArea] = useState("Square Feet Area");
  const [timeline, setTimeline] = useState("Engagement Timeline");

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fxfho3x",
        "template_7sdw2mv",
        e.target,
        "5_NdmF3PRLPKBnpD7"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);

          // Download catalog PDF
          const link = document.createElement("a");
          link.href = "/catalog.pdf";
          link.download = "Signature-Catalog.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setTimeout(() => {
            setSuccess(false);
            setOpen(false);
          }, 2500);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      {/* ================= SECTION ================= */}
      <section className="relative bg-[#0b0b0b] py-24 px-6 md:px-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#cb972b]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#cb972b]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.45em] uppercase text-[#cb972b]">
              Exclusive Collection
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-[#f9e3aa] mt-5 mb-7">
              Download Our <br /> Signature catalogue 
            </h2>

            <p className="text-[#f9e3aa] mb-12 max-w-md leading-relaxed">
              A curated showcase of architectural vision, timeless designs,
              and innovative facade solutions.
            </p>

            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center gap-4
                border border-[#cb972b]
                px-10 py-5
                text-xs uppercase tracking-[0.35em]
                text-[#cb972b]
                hover:bg-[#cb972b]
                hover:text-black
                transition-all duration-500
              "
            >
              Download Catalog <span className="text-lg">↓</span>
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="relative w-full h-[380px] md:h-[520px] rounded-2xl perspective-[2000px]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
              style={{ transform: "translateZ(60px)" }}
            >
              <Image src="/h3.jpeg" alt="Catalog" fill className="object-cover" />
            </motion.div>

            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(203,151,43,0.25), transparent 60%)",
                transform: "translateZ(90px)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-[#0e0e0e] border border-[#cb972b]/30 rounded-2xl w-full max-w-3xl max-h-[95vh] flex flex-col p-6 relative
                         overflow-y-auto md:overflow-y-hidden"
            >
              {/* Close Icon */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-[#cb972b] hover:text-white text-xl"
              >
                &times;
              </button>

              {/* ✅ SUCCESS OVERLAY */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-[#0e0e0e] flex flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 180 }}
                      className="w-16 h-16 rounded-full border-2 border-[#cb972b] flex items-center justify-center mb-4"
                    >
                      <span className="text-[#cb972b] text-3xl">✓</span>
                    </motion.div>

                    <h4 className="text-[#f9e3aa] text-xl font-serif">
                      Thank You!
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Your enquiry has been sent successfully
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Title */}
              <h3 className="text-[#f9e3aa] font-serif text-2xl mb-4">
                Project Enquiry
              </h3>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-3 text-sm">
                <div className="space-y-3">
                  {/* Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <input name="from_name" required placeholder="Full Name" className="form-input" />
                    <input name="phone" required type="tel" placeholder="Phone Number" className="form-input" />
                  </div>

                  {/* City & Are You */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <input name="city" required placeholder="City" className="form-input" />
                    <select
                      name="role"
                      required
                      className="form-input text-white"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option disabled>Are You</option>
                      <option>Home Owner</option>
                      <option>Architect</option>
                      <option>Builder</option>
                      <option>Interior Designer</option>
                    </select>
                  </div>

                  {/* Area */}
                  <select
                    name="area"
                    required
                    className="form-input text-white"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  >
                    <option disabled>Square Feet Area</option>
                    <option>Below 1000 sq ft</option>
                    <option>1000 – 3000 sq ft</option>
                    <option>3000 – 5000 sq ft</option>
                    <option>Above 5000 sq ft</option>
                  </select>

                  {/* Project Type */}
                  <div>
                    <p className="text-[#f9e3aa] text-xs mb-1 tracking-wide">Type of Project</p>
                    <div className="flex flex-wrap gap-4">
                      {["Residential", "Commercial", "Retail", "Hospitality"].map((type) => (
                        <label key={type} className="flex items-center gap-2">
                          <input type="checkbox" name="project_type" value={type} />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                    <input name="project_type" placeholder="Other (if not listed)" className="form-input mt-2" />
                  </div>

                  {/* Timeline */}
                  <select
                    name="timeline"
                    required
                    className="form-input text-white"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    <option disabled>Engagement Timeline</option>
                    <option>Immediately</option>
                    <option>Within 1 Month</option>
                    <option>1–3 Months</option>
                    <option>3+ Months</option>
                  </select>

                  {/* Drawings */}
                  <div>
                    <p className="text-[#f9e3aa] text-xs mb-1 tracking-wide">3D / Site Drawings Available?</p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="drawings" value="Yes" /> Yes
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="drawings" value="No" /> No
                      </label>
                    </div>
                  </div>

                  {/* Brief */}
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Tell us more about your project..."
                    className="form-input resize-none h-[60px]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full border border-[#cb972b] py-3 text-xs tracking-[0.35em] uppercase text-[#cb972b] hover:bg-[#cb972b] hover:text-black transition-all duration-500"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
