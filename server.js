const express = require("express");
const postRouter = require("./router/postRouter");

require("./config/dbConnect");

const app = express();

// for JSON format
app.use(express.json())
// for FORM Post
// app.use(express.urlencoded())


app.use("/posts", postRouter);






app.listen(4000, () => console.log("Server Up And Running"));