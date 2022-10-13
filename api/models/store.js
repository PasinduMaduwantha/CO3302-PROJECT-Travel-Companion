import mongoose from "mongoose";
const StoreSchema = new mongoose.Schema({
  user: { type: String },
  name: { type: String },
  address: { type: String },
  category: { type: String },
  description: { type: String },
  phone: { type: String },
});

export default mongoose.model("Store", StoreSchema);
