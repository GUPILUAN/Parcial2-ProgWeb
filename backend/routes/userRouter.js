const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const { login, register, showData, changeStatus } = require("../controllers/userController");

router.post("/login", login);
router.post("/register", register);
router.get("/data", protect, showData);
router.put("/owner", protect, changeStatus);

module.exports = router;
