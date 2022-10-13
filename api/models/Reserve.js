import mongoose from "mongoose";
const ReserveSchema = new mongoose.Schema({
  user: {
    type: String,
    // required:true
  },
  name: {
    type: String,
    // required: true,
  },
  startDate: {
    type: Date,
    // required: true,
  },
  endDate: {
    type: Date,
    // required: true,
  },
  destination: {
    type: String,
    // required: true,
  },
  hotelId: {
    type: String,
    // required: true,
  },
  noOfRooms: {
    type: Number,
    // required: true,
  },
  adults: {
    type: Number,
    // required: true,
  },
  child: {
    type: Number,
    // required: true,
  },
  amount: {
    // type: Number,
  },
});

export default mongoose.model("Reserve", ReserveSchema);
