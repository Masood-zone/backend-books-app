const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// All Author Routes
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOptions);
    res.render("authors/index", {
      authors: authors,
      searchOptions: req.query,
    });
  } catch (error) {
    res.redirect("/");
  }
});
// New Author Route
router.get("/new", (req, res) => {
  res.render("authors/new", {
    author: new Author(),
  });
});
// Create Author Route
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    res.redirect(`authors`);
    //   res.redirect(`authors/${newAuthor.id}`);
  } catch (error) {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author",
    });
  }
});
// Edit Author Route
router.patch("/update", (req, res) => {
  res.render("authors/update");
});
// Delete Author Route
router.delete("/delete/:id", (req, res) => {
  res.send("authors/delete");
});
// Show Author Route
router.get("/:id", (req, res) => {
  res.render("authors/show");
});

module.exports = router;
