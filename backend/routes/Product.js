const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.get("/", async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});
router.post("/", async (req, res) => {
    try {
        const products = await Products.save(req.body);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});
module.exports = router;
