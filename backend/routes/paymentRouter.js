const express = require("express");
const {getPaymentTransaction, makePayment } = require("../controllers/paymentTransactionController");
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();

router.get("/", protect, getPaymentTransaction);
router.post("/", protect, makePayment);


module.exports = router;