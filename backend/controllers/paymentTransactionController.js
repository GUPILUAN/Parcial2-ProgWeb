const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");
const PaymentTransaction = require("../models/paymentTransactionModel");


const getPaymentTransaction = asyncHandler(async (req, res) => {
  const booking = Booking.find({ booker: req.user._id });
  const pts = await PaymentTransaction.find({ booking: booking._id });
  res
    .status(200)
    .json(pts.length > 0 ? pts : { message: "No hay transacciones" });
});

const makePayment = asyncHandler(async (req, res) => {
  const { paymentMethod , booking} = req.body;
  if (!paymentMethod || !booking) {
    res.status(400);
    throw new Error("Por favor agrega un metodo de pago");
  }
  const book = await Booking.findOne({_id:booking});
  const pts = await PaymentTransaction.create({
    booking,
    amount: book.totalPrice,
    paymentMethod,
  });
  res.status(201).json(pts);
});

module.exports = {
  getPaymentTransaction,
  makePayment,
};
