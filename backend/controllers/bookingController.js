const asyncHandler = require("express-async-handler");
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ booker: req.user._id });
  res
    .status(200)
    .json(bookings.length > 0 ? bookings : { message: "No hay reservaciones" });
});

const createBooking = asyncHandler(async (req, res) => {
  const { carBooked, startingDate, endingDate, totalPrice } = req.body;
  if (!carBooked || !startingDate || !endingDate || !totalPrice) {
    res.status(400);
    throw new Error("No fue posible crear la reservación");
  }
  const car = await Car.findById(carBooked);

  if(car.owner.toString() === req.user._id.toString()){
    throw new Error("No puedes reservar tu propio auto");
  }

  const booking = await Booking.create({
    booker: req.user._id,
    carBooked,
    startingDate,
    endingDate,
    totalPrice,
  });
  res.status(201).json(booking);
});

const updateBooking = asyncHandler(async (req, res) => {
  const result = await Booking.updateOne(
    { _id: req.body.id, booker: req.user._id },
    req.body
  );
  if (result.modifiedCount > 0) {
    res.status(202).json({
      message: "La resevación fue actualizada exitosamente",
    });
  } else {
    res.status(400);
    throw new Error("No se encontro reservación para actualizar");
  }
});

const deleteBooking = asyncHandler(async (req, res) => {
  const result = await Booking.deleteOne({
    _id: req.body.id,
    booker: req.user._id,
  });
  if (result.deletedCount > 0) {
    res.status(203).json({
      message: "La reservación fue eliminada exitosamente",
    });
  } else {
    res.status(400);
    throw new Error("No se encontro reservación para eliminar");
  }
});

module.exports = {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
};
