import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Shield } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    const res = await axios.post("http://localhost:5000/send-otp", { email });
    if (res.data.success) setOtpSent(true);
    else alert("Error sending OTP");
  };

  const verifyOtp = async () => {
    const res = await axios.post("http://localhost:5000/verify-otp", { email, otp });
    if (res.data.success) {
      alert("Login Successful!");
      window.location.href = "/dashboard";
    } else {
      alert("Incorrect OTP");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01010f] via-black to-[#00151f] opacity-90" />
      <div className="absolute w-[1000px] h-[1000px] bg-blue-500/20 blur-[220px] rounded-full top-[-250px] left-[-300px]" />
      <div className="absolute w-[900px] h-[900px] bg-cyan-400/20 blur-[200px] rounded-full bottom-[-300px] right-[-200px]" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-lg p-10 rounded-3xl border border-cyan-500/10 shadow-[0_0_60px_#00d1ff40] backdrop-blur-3xl bg-white/5"
      >
        {/* Logo / Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-cyan-500/20 shadow-lg">
            <Shield className="text-cyan-400" size={28} />
            <span className="text-xl font-semibold text-cyan-300 tracking-wide">Secure Login</span>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-xl">
          {otpSent ? "OTP Verification" : "Welcome Back"}
        </h1>
        <p className="text-gray-300 text-center mt-2 mb-8 text-sm tracking-wide">
          {otpSent ? "Enter the verification code sent to your email" : "Login securely using OTP verification"}
        </p>

        {!otpSent ? (
          <>
            <label className="text-gray-300 text-sm">Email Address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 pl-11 rounded-lg bg-black/50 border border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={sendOtp}
              className="w-full py-3 mt-6 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 shadow-lg shadow-cyan-500/40 border border-cyan-400/40"
            >
              Send OTP
            </motion.button>
          </>
        ) : (
          <>
            <label className="text-gray-300 text-sm">Enter OTP</label>
            <div className="relative mt-1">
              <Shield className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="123456"
                className="w-full p-3 pl-11 rounded-lg bg-black/50 border border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 outline-none transition-all"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={verifyOtp}
              className="w-full py-3 mt-6 text-lg font-medium rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 shadow-lg shadow-green-500/40 border border-green-400/40"
            >
              Verify OTP
            </motion.button>

            <button
              onClick={() => setOtpSent(false)}
              className="w-full mt-5 text-gray-300 hover:text-white text-sm transition"
            >
              ← Change Email
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
