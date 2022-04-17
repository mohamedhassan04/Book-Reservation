const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    ISBN: { type: Number, required: true },
    URL: { type: String, required: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    overview: { type: String, required: true },
    publisher: { type: String, required: true },
    publicationdate: { type: String, required: true },
    language: { type: String, required: true },
    Author: { type: String, required: true },
    bookedTimeSlots: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const bookModel = mongoose.model("books", bookSchema);
module.exports = bookModel;
