const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    booker: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    carBooked: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Car",
    },
    startingDate: {
      type: Date,
      required: true,
    },
    endingDate: {
      type: Date,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
