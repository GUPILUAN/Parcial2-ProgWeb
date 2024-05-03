const mongoose = require("mongoose");

const paymentTransactionSchema = mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  transactionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PaymentTransaction", paymentTransactionSchema);
