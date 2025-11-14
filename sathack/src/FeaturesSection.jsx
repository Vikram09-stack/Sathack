import React from "react";
import { motion } from "framer-motion";
import { Brain, TrafficCone, Route, Radar } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10 text-cyan-400" />,
      title: "AI Vision for Real-Time Traffic Analysis",
      desc: "CCTV analysis for real-time flow, density, and instant disruption detection (accidents, blockages).",
    },
    {
      icon: <TrafficCone className="w-10 h-10 text-cyan-400" />,
      title: "Dynamic Traffic Signal Optimization",
      desc: "Manipulates signal timers using live traffic data to reduce congestion and idle time efficiently.",
    },
    {
      icon: <Route className="w-10 h-10 text-cyan-400" />,
      title: "Smart Routing & Reallocation",
      desc: "Suggests new paths and reallocates routes instantly when congestion or accidents occur.",
    },
    {
      icon: <Radar className="w-10 h-10 text-cyan-400" />,
      title: "Predictive Bottleneck Detection",
      desc: "ML models detect recurring or high-impact bottleneck areas before they escalate.",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white font-[Poppins] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Driving the <span className="text-cyan-400">Future of Traffic Intelligence</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Revolutionizing roads through real-time AI insights, smart optimization, and predictive analytics.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>

              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
