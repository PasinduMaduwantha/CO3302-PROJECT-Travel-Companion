import mongoose from "mongoose";
const CancelSchema = new mongoose.Schema({
  cancelId: {
    unique: true,
    type: String,
    required: true,
  },
});

export default mongoose.model("Cancel", CancelSchema);
