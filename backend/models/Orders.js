const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        products: { type: Array , required: true },
        totalPrice: { type: Number, required: true },
        address: {
            type: Object,
            required: true,
        },
    },

    { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
