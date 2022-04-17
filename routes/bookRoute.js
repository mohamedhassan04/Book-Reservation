const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

router.get("/getallbooks", async (req, res) => {
  try {
    const book = await Book.find();
    res.send(book);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addbook", async (req, res) => {
  try {
    const newbook = new Book(req.body);
    await newbook.save();
    res.send("Book added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
