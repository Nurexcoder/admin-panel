const router = require("express").Router();
// const router = express().Router();
const Orders = require("../models/Orders");

router.get("/", async (req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});
router.post("/", async (req, res) => {
    try {
        const orders = await Orders.save(req.body);
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});
module.exports = router;
