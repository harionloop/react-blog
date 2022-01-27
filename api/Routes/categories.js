const router = require("express").Router();
const Category = require("../Model/Category");

// ADD a Category


router.post("/", async(req, res) => {
    const catName = new Category(req.body);

    try {
        const savedCat = await catName.save();
        res.status(200).json(savedCat)

    } catch (err) {
        res.status(500).json(err)
    }
})


// Get a Category

router.get("/", async(req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;