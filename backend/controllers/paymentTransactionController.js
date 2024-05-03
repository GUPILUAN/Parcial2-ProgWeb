const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");
const PaymentTransaction = require("../models/paymentTransactionModel");

const booking = Booking.find({ booker: req.user._id });
const getPaymentTransaction = asyncHandler(async (req, res) => {
  const pts = await PaymentTransaction.find({ booking: booking._id });
  res
    .status(200)
    .json(pts.length > 0 ? pts : { message: "No hay transacciones" });
});

const makePayment = asyncHandler(async (req, res) => {
  const { paymentMethod } = req.body;
  if (!paymentMethod) {
    res.status(400);
    throw new Error("Por favor agrega un metodo de pago");
  }
  const pts = await PaymentTransaction.create({
    booking: booking._id,
    amount: booking.totalPrice,
    paymentMethod,
  });
  res.status(201).json(pts);
});

module.exports = {
  getPaymentTransaction,
  makePayment,
};
