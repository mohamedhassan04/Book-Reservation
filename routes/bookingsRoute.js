const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Book = require("../models/bookModel");

router.post("/bookbook", async (req, res) => {
  try {
    const newbooking = new Booking(req.body);
    await newbooking.save();
    const book = await Book.findOne({ _id: req.body.book });
    book.bookedTimeSlots.push(req.body.bookedTimeSlots);
    await book.save();
    res.send("Your booking is succesffuly");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
