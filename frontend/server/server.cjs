const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());

const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_Q74MZNHS_Cx75C3EnGgQonrnpWEeeBEqp";
const resend = new Resend(RESEND_API_KEY);

let otpStore = {}; // { [email]: { code, expiresAt } }

// SEND OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    otpStore[email] = { code: otp, expiresAt };

    // schedule cleanup
    setTimeout(() => {
      if (otpStore[email] && otpStore[email].expiresAt <= Date.now()) delete otpStore[email];
    }, 5 * 60 * 1000 + 1000);

    // In development or if RESEND key/account restricts recipients, allow a dev fallback.
    const DEBUG_OTP = process.env.DEBUG_OTP === "true";

    if (!RESEND_API_KEY || RESEND_API_KEY.startsWith("re_") && DEBUG_OTP) {
      // Do not attempt to send email in debug mode; just log it for developer
      console.warn(`(DEBUG) OTP for ${email}: ${otp}`);
      return res.json({ success: true, message: "OTP Sent (debug).", otp: DEBUG_OTP ? otp : undefined });
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM || "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Your OTP Code",
      html: `<p>Your OTP is:</p><h1>${otp}</h1>`,
    });

    res.json({ success: true, message: "OTP Sent Successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    // fallback: still store OTP and let user use it if developer wants to debug
    const DEBUG_OTP = process.env.DEBUG_OTP === "true";
    if (DEBUG_OTP) {
      console.warn(`(DEBUG-FALLBACK) OTP for ${email}: ${otpStore[email]?.code}`);
      return res.json({ success: true, message: "OTP Sent (fallback).", otp: otpStore[email]?.code });
    }
    res.json({ success: false, message: "Failed to send OTP" });
  }
});

// VERIFY OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const entry = otpStore[email];
  if (!entry) return res.json({ success: false, message: "No OTP found or expired" });

  if (String(entry.code) === String(otp) && entry.expiresAt > Date.now()) {
    delete otpStore[email];
    return res.json({ success: true });
  }

  res.json({ success: false, message: "Incorrect or expired OTP" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
