import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-b from-gray-900 via-black to-black text-gray-300 font-[Poppins] py-20 overflow-hidden"
    >
      {/* Futuristic background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.08),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold text-white tracking-wide mb-3">
              TRAVIS<span className="text-cyan-400">AI</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing traffic management with AI-driven insights,
              real-time data analysis, and predictive intelligence.  
              Building the backbone of tomorrow’s smart cities.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400 transition-all"
              >
                <Linkedin size={20} className="text-cyan-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400 transition-all"
              >
                <Twitter size={20} className="text-cyan-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400 transition-all"
              >
                <Github size={20} className="text-cyan-400" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", to: "hero" },
                { name: "Features", to: "features" },
                { name: "About", to: "about" },
                { name: "FAQs", to: "faqs" },
                { name: "Contact", to: "footer" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={700}
                    offset={-100}
                    className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-cyan-400 transition">AI Vision Module</li>
              <li className="hover:text-cyan-400 transition">Traffic Signal Optimization</li>
              <li className="hover:text-cyan-400 transition">Smart City Integration</li>
              <li className="hover:text-cyan-400 transition">Developer API Access</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-cyan-400 mt-1" />
                <span>support@travisai.io</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cyan-400 mt-1" />
                <span>
                  88 Innovation Drive, Sector 21  
                  Chandigarh, India
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-cyan-400 mt-1" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-10">
          <p>
            © {new Date().getFullYear()} <span className="text-cyan-400">TRAVIS AI</span>.  
            All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
