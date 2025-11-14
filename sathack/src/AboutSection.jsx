import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const textLines = [
    "In every congested lane and every delayed signal,",
    "there lies an untapped opportunity to make cities smarter.",
    "TRAVIS AI was born to transform those moments —",
    "into a living, learning network of intelligent mobility.",
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white font-[Poppins] overflow-hidden">
      {/* Moving Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.08),transparent_70%),radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_60%)] animate-pulse"></div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:60px_60px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold mb-12 leading-snug"
        >
          The <span className="text-cyan-400">Intelligence</span> Behind Every Journey
        </motion.h2>

        {/* Animated Story Text */}
        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
          {textLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="tracking-wide"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Cinematic Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl italic text-cyan-400">
            “We don’t just monitor traffic — we teach it to think.”
          </h3>
        </motion.div>

        {/* Logo Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="text-5xl font-bold tracking-wider text-white drop-shadow-lg">
            TRAVIS
          </div>
          <p className="text-gray-400 text-lg mt-3">
            Driven by Data. Defined by Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
