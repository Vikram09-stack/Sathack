import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import videoBg from "./assets/hero-bg.mp4";
import Navbar from "./Navbar";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play();
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden font-[Poppins]">
      {/* Background video...*/}
      <video
        ref={videoRef}
        src={videoBg}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        playsInline
        loop
        autoPlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* Typing Title */}
        <TypeAnimation
          sequence={[
            "TRAVIS — AI for Real-Time Traffic",
            1000, // pause for 1 sec
          ]}
          wrapper="h1"
          cursor={false}
          speed={45}
          style={{
            fontSize: "3.5rem",
            fontWeight: 600,
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}
          className="text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-lg leading-snug mb-4"
        />

        {/* Subtitle (scroll animation) */}
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Smart insights for better roads, safer travel, and future-ready city planning.
        </motion.p>

        {/* Button (scroll animation) */}
        <motion.button
          className="mt-10 px-10 py-3 bg-white/10 border border-cyan-400 hover:bg-cyan-400/20 hover:scale-105 transition-all rounded-full text-white font-medium shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
