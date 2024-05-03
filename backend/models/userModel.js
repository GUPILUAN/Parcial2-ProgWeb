const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor teclea un nombre"],
    },
    email: {
      type: String,
      required: [true, "Por favor teclea un email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Por favor teclea una contraseña"],
    },
    address: {
      type: String,
      required: [true, "Por favor teclea una dirección"],
    },
    phone: {
      type: String,
      required: [true, "Por favor teclea un número de teléfono"],
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
