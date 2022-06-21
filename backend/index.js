const express = require("express");
const mongoose = require("mongoose");
const mongoConnect = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
const orders = require("./routes/Order");
const products = require("./routes/Product");
const users = require("./routes/User");

// apps()
// const analytics = getAnalytics(app2);
const app = express();
dotenv.config();
app.use(cors());
mongoConnect();
app.use("/users", users);
app.use("/products", products);
app.use("/orders", orders);
app.use(express.json());
// mongoConnect();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    console.log("Hello");
    res.send("hello");
});
app.listen(PORT, () =>
    console.log(`Server Running on Port: http://localhost:${PORT}`)
);
