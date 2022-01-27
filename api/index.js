const express = require("express");
const dotenv = require("dotenv");

const authRoute = require("./Routes/auth")
const usersRoute = require("./Routes/users")
const postsRoute = require("./Routes/posts")
const categoryRoute = require("./Routes/categories")

const app = express();
const mongoose = require("mongoose")

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "image");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single('file'), (req, res) => {
    res.status(200).json('File has been updated!')
})

dotenv.config()
app.use(express.json());

mongoose.connect(process.env.DB_url).then(console.log("status 200")).catch((err) => console.log(err));


app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postsRoute)
app.use("/api/categories", categoryRoute)



app.listen("5000", () => {
    console.log("wwe is fake and full of waste");
})