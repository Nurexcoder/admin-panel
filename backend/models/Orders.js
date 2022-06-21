const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        id: { type: Array , required: true },
        totalPrice: { type: Number, required: true },
        Address: {
            type: Object,
            required: true,
        },
    },

    { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
