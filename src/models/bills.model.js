import mongoose from "mongoose";

const billsSchema = new mongoose.Schema({
  types: { type: String, required: true },
  value: { type: Number, required: true },
  description: { type: String, required: true },
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trips",
    required: true,
  },
});

export default mongoose.model("Bills", billsSchema);
