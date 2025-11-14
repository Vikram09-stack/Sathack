import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Urban Mobility Analyst",
    feedback:
      "TRAVIS AI is redefining how cities understand traffic. Its real-time data has helped reduce congestion dramatically.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Neha Patel",
    role: "Smart City Planner",
    feedback:
      "Predictive analytics from TRAVIS AI allows us to act before traffic bottlenecks even occur. It’s truly revolutionary.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Verma",
    role: "Traffic Operations Head",
    feedback:
      "The AI-powered signal optimization has reduced idle time significantly across our city intersections.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Isha Mehra",
    role: "Infrastructure Strategist",
    feedback:
      "TRAVIS AI gives cities the intelligence they need to adapt to traffic dynamically and efficiently.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white font-[Poppins] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Voices <span className="text-cyan-400">Behind the Revolution</span>
        </motion.h2>

        <p className="text-gray-400 text-lg mb-16">
          Real insights from the experts who trust <span className="text-cyan-400">TRAVIS</span>.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 text-cyan-400 hover:text-cyan-300 p-2 rounded-full border border-cyan-400 hover:bg-cyan-400/20 transition-all"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Cards Container */}
          <div className="relative flex justify-center items-center w-full md:w-[900px] h-[420px] overflow-visible">
            {testimonials.map((t, i) => {
              const offset = (i - index + testimonials.length) % testimonials.length;

              let scale = 0.8;
              let opacity = 0.3;
              let zIndex = 0;
              let x = 0;
              let blur = "blur-sm";

              if (offset === 0) {
                scale = 1;
                opacity = 1;
                zIndex = 20;
                x = 0;
                blur = "blur-0";
              } else if (offset === 1 || offset === -testimonials.length + 1) {
                scale = 0.85;
                opacity = 0.6;
                zIndex = 10;
                x = 250;
              } else if (offset === testimonials.length - 1) {
                scale = 0.85;
                opacity = 0.6;
                zIndex = 10;
                x = -250;
              } else {
                x = offset * 400;
              }

              return (
                <motion.div
                  key={i}
                  animate={{ scale, opacity, x }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`absolute ${blur} rounded-2xl p-8 w-[300px] md:w-[350px] text-center 
                  shadow-xl border border-white/20 backdrop-blur-md bg-white/10 transition-all
                  ${offset === 0 ? "shadow-cyan-400/40 ring-2 ring-cyan-400" : ""}`}
                  style={{ zIndex }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className={`w-20 h-20 rounded-full mx-auto mb-5 border-2 ${
                      offset === 0 ? "border-cyan-400" : "border-gray-600"
                    } object-cover`}
                  />
                  <p
                    className={`text-sm md:text-base italic mb-5 ${
                      offset === 0 ? "text-gray-100" : "text-gray-400"
                    }`}
                  >
                    “{t.feedback}”
                  </p>
                  <h3
                    className={`text-lg font-semibold ${
                      offset === 0 ? "text-cyan-400" : "text-gray-300"
                    }`}
                  >
                    {t.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{t.role}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 md:right-10 text-cyan-400 hover:text-cyan-300 p-2 rounded-full border border-cyan-400 hover:bg-cyan-400/20 transition-all"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-cyan-400 w-6" : "bg-gray-500"
              }`}
            ></motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
