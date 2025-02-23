const express = require("express");
const router = express.Router();
const Books = require("../models/books");

// All Books Routes
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const books = await Books.find(searchOptions);
    res.render("books/index", {
      books: books,
      searchOptions: req.query,
    });
  } catch (error) {
    res.redirect("/");
  }
});

// New Book Route
router.get("/new", (req, res) => {
  res.render("books/new", { book: new Books() });
});

// Create Book Route
router.post("/", async (req, res) => {
  res.send("Create Book");
});

module.exports = router;
