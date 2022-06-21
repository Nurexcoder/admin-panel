const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        categories: { type: Array },
        price: { type: Number, required: true },
        availablePieces: {
            type: Number,
            required:true,
        }
    },

    { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
