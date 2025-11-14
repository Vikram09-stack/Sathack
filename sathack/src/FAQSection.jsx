import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is TRAVIS AI and how does it work?",
    answer:
      "TRAVIS AI is an intelligent traffic management platform that uses real-time data, computer vision, and predictive analytics to optimize city traffic flow. It learns from road patterns, CCTV feeds, and congestion data to make instant, smarter decisions.",
  },
  {
    question: "Can TRAVIS AI integrate with existing traffic infrastructure?",
    answer:
      "Yes. TRAVIS AI is built to integrate seamlessly with current government traffic control systems, IoT sensors, and signal management frameworks — without requiring a complete hardware overhaul.",
  },
  {
    question: "Does TRAVIS AI provide real-time traffic updates?",
    answer:
      "Absolutely. TRAVIS continuously monitors live traffic, roadblocks, and signal timings to deliver dynamic routing and predictive updates — all in real time.",
  },
  {
    question: "Is TRAVIS AI suitable for smart city projects?",
    answer:
      "Yes, TRAVIS AI is designed specifically for smart urban mobility. It helps government planners, city operators, and research agencies design data-driven, adaptive, and safer road systems.",
  },
  {
    question: "How does TRAVIS ensure data privacy and security?",
    answer:
      "All data processed by TRAVIS is encrypted and anonymized. We prioritize ethical AI — ensuring transparency, compliance, and privacy protection at every stage.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white font-[Poppins] overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.05),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.07),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-8"
        >
          Frequently <span className="text-cyan-400">Asked Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-16"
        >
          Everything you need to know about how TRAVIS AI empowers smarter cities.
        </motion.p>

        {/* FAQ Accordion */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
              >
                <span className="text-lg font-medium text-white tracking-wide">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-cyan-400"
                >
                  <ChevronDown size={22} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/10"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
