const express = require("express");
const {getBookings, createBooking, updateBooking, deleteBooking } = require("../controllers/bookingController");
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();

router.get("/", protect, getBookings);
router.post("/", protect, createBooking);
router.put("/", protect, updateBooking);
router.delete("/", protect, deleteBooking);

module.exports = router;