const express = require("express");
const { getMessages, newMessage } = require("../controllers/messageController")
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();

router.get("/", protect, getMessages);
router.post("/", protect, newMessage);

module.exports = router;