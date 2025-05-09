import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
    email: { type: String },
    phone: { type: Number },
    address: { type: String },
    links: {
        whatsapp: { type: String, required: true },
        facebook: { type: String, required: true },
        tiktok: { type: String, required: true },
    },

})