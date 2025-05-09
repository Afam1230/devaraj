import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  }, phone: {
    type: String,
    match: [/^\+?\d{10,15}$/, 'Please enter a valid phone number.'],
  },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("DevarajUser", userSchema);
