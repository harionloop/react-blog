const router = require("express").Router();

const User = require("../Model/User");
const bcrypt = require("bcrypt")

//Register New User

router.post("/register", async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        });
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }
});


//Login user
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Plese check your credentials!");
        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json("Plese check your credentials!");

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;