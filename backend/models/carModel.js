const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    model: {
      type: String,
      required: [true, "Por favor teclea un modelo"],
    },
    brand: {
      type: String,
      required: [true, "Por favor teclea una marca"],
    },
    year: {
      type: Number,
      required: [true, "Por favor teclea un año"],
    },
    serialNum: {
      type: String,
      required: [true, "Por favor teclea un número de serie"],
    },
    transmission: {
      type: String,
      required: [true, "Por favor teclea una transmisión"],
    },
    capacity: {
      type: Number,
      required: [true, "Por favor teclea una capacidad"],
    },
    pricePerDay: {
      type: Number,
      required: [true, "Por favor teclea un precio por día"],
    },
    ubication: {
      type: String,
      required: [true, "Por favor teclea una ubicación"],
    },
    insurance: {
      type: String,
      required: [true, "Por favor teclea un seguro"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
