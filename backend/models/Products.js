const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        about: { type: String, required: true },
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
