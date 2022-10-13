import Store from "../models/store.js";

export const store = async (req, res, next) => {
  const newStore = new Store(req.body);
  try {
    const savedStore = await newStore.save();
    res.status(200).json(savedStore);
  } catch (err) {
    next(err);
  }
};

export const getStore = async (req, res, next) => {
  const location = req.url.split("/")[2];
  try {
    const store = await Store.find({
      user: location,
    });
    res.status(200).json(store);
  } catch (err) {
    next(err);
  }
};
