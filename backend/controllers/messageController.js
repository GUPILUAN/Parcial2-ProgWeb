const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");

const newMessage = asyncHandler(async (req, res) => {
  const { text, recipient } = req.body;
  const message = Message.create({
    text,
    sender: req.user._id,
    recipient,
  });
  res.status(200).json(message);
});

const getMessages = asyncHandler(async (req, res) => {
  const { recipientId } = req.params;

  const messages = await Message.find({
    $or: [
      { sender: req.user._id, recipient: recipientId },
      { sender: recipientId, recipient: req.user._id },
    ],
  }).sort({ timestamp: 1 });
  res.status(200);
  res.json(messages);

});

module.exports = {
  newMessage,
  getMessages,
};
