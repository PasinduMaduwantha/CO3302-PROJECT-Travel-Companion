import Cancel from "../models/Cancel.js";
import Reserve from "../models/Reserve.js";

export const cancel = async (req, res, next) => {
  const newStore = new Cancel(req.body);
  try {
    const savedStore = await newStore.save();
    res.status(200).json(savedStore);
  } catch (err) {
    next(err);
  }
};

export const getRequests = async (req, res, next) => {
  try {
    const cancel = await Cancel.find();
    res.status(200).json(cancel);
  } catch (err) {
    next(err);
  }
};

export const getAllReservations = async (req, res, next) => {
  const array = [];

  try {
    const cancel = await Reserve.find();
    res.status(200).json(cancel);

    for (let i = 0; i < cancel.length; i++) {
      const reserve = await Reserve.find({
        _id: cancel[i].cancelId,
      });
      array.push(reserve);
    }
    res.status(200).json(array);
    console.log(array);
  } catch (err) {
    next(err);
  }
};

export const deleteReservation = async (req, res, next) => {
  const id = req.params.id;
  try {
    const toDelete = await Cancel.findOneAndDelete({ cancelId: id });
    const deleted = await Reserve.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (err) {
    next(err);
  }
};
