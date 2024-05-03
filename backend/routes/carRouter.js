const express = require("express");
const {getCars, createCar, updateCar, deleteCar, getOwnCars } = require("../controllers/carController");
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();

router.get("/", getCars);
router.get("/own", protect, getOwnCars);
router.post("/", protect, createCar);
router.put("/", protect, updateCar);
router.delete("/", protect, deleteCar);

module.exports = router;
