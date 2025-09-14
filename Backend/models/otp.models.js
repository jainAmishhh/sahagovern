// otp.models.js

import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  phonenumber: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, 
  },
});

const OtpStore = mongoose.model("OtpStore", otpSchema);

export default OtpStore;