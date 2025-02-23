dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const authorsRouter = require("./routes/author");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayout);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/", indexRouter);
app.use("/authors", authorsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
