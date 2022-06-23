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
        console.log(req.body);

        const users = new Users({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
        });
        await users.save();

        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = router;
