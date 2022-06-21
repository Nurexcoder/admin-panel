const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        username: { type: String, unique: true, required: true },
        email: {  type: String, unique: true, required: true},
        phoneNo: {  type: String, unique: true, required: true},
       
    },

    { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
