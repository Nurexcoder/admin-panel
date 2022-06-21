const router = require("express").Router();
// const router = express().Router();
const Users = require("../models/Users");

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});
router.post("/", async (req, res) => {
    try {
        const users = await Users.save(req.body);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});
module.exports = router;
