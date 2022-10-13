import Reserve from "../models/Reserve.js";

export const reservation = async (req, res, next) => {
  const newReservation = new Reserve(req.body);
  try {
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

export const getReservation = async (req, res, next) => {
  const location = req.url.split("/")[2];
  try {
    const reservation = await Reserve.find({
      user: location,
    });
    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};
