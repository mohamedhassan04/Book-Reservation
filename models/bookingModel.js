const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    book: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    bookedTimeSlots: { from: { type: String }, to: { type: String } },
    totalDays: { type: Number },
  },
  { timestamps: true }
);
const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;
