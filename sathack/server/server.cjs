const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend("re_Q74MZNHS_Cx75C3EnGgQonrnpWEeeBEqp");

let otpStore = {};

// SEND OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = otp;

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Your OTP Code",
      html: `<p>Your OTP is:</p><h1>${otp}</h1>`,
    });

    res.json({ success: true, message: "OTP Sent Successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.json({ success: false, message: "Failed to send OTP" });
  }
});

// VERIFY OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] == otp) {
    delete otpStore[email];
    return res.json({ success: true });
  }

  res.json({ success: false, message: "Incorrect OTP" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
