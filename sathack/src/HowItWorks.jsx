import React from "react";
import { motion } from "framer-motion";
import { Brain, Radar, Route, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <Radar className="w-10 h-10 text-cyan-400" />,
    title: "Data Detection",
    desc: "TRAVIS AI captures live traffic, CCTV, and IoT sensor data across city intersections.",
  },
  {
    icon: <Brain className="w-10 h-10 text-cyan-400" />,
    title: "AI Processing",
    desc: "Machine learning models analyze flow, density, and anomaly detection in milliseconds.",
  },
  {
    icon: <Route className="w-10 h-10 text-cyan-400" />,
    title: "Smart Optimization",
    desc: "The system dynamically adjusts signal timings and routes for smoother traffic movement.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-cyan-400" />,
    title: "Predictive Insights",
    desc: "TRAVIS forecasts congestion patterns and suggests proactive improvements for city planners.",
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white font-[Poppins] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(0,255,255,0.08),transparent_60%)] animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          How <span className="text-cyan-400">TRAVIS AI</span> Works
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-20">
          From data to decision — a seamless flow of intelligence.
        </p>

        {/* Animated Flow Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center max-w-xs"
            >
              {/* Glowing Orb */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/40 via-transparent to-transparent animate-pulse"></div>
                {step.icon}
              </motion.div>

              {/* Title & Desc */}
              <h3 className="mt-6 text-xl font-semibold text-cyan-400">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {step.desc}
              </p>

              {/* Connecting Line (between steps) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-100px] w-[180px] h-[2px] bg-gradient-to-r from-cyan-400/70 via-cyan-300/30 to-transparent animate-pulse">
                  <motion.div
                    className="absolute inset-0 bg-cyan-400"
                    animate={{ x: [0, 180, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ width: "60px", height: "2px", borderRadius: "2px" }}
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Ending Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-3">
            AI in Motion. Cities in Sync.
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            TRAVIS AI doesn’t just respond — it learns, adapts, and evolves with every signal, every second, every street.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
