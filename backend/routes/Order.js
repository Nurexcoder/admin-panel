const router = require("express").Router();
// const router = express().Router();
const Orders = require("../models/Orders");
const Products = require("../models/Products");

router.get("/", async (req, res) => {
    // try {
    let orders = await Orders.find();
    let products=[]

    res.status(200).json(orders);
    // } catch (err) {
    //     res.status(500).send("Something went wrong");
    // }
});
router.post("/", async (req, res) => {
    try {
        const orders = new Orders(req.body);
        await orders.save();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});
module.exports = router;
