const express = require("express");
const router = express.Router();
// All Author Routes
router.get("/", (req, res) => {
  res.render("authors/index");
});
// New Author Route
router.get("/new", (req, res) => {
  res.render("authors/new");
});
// Create Author Route
router.post("/", (req, res) => {
  res.send("authors/new");
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
