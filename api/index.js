const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const multer = require('multer');
const path = require("path");

const authRoute = require("./Routes/auth")
const usersRoute = require("./Routes/users")
const postsRoute = require("./Routes/posts")
const categoryRoute = require("./Routes/categories")

const app = express();
app.use(express.json());

dotenv.config()
mongoose.connect(process.env.DB_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("status 200")).catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single('file'), (req, res) => {
    res.status(200).json('File has been updated!')
})

app.use("/images", express.static(path.join(__dirname, "/images")))


app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postsRoute)
app.use("/api/categories", categoryRoute)



app.listen("5000", () => {
    console.log("wwe is fake and full of waste");
})