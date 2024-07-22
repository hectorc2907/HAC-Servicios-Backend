import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema(
  {
    income: { type: Number, required: true, trim: true },
    expenses: { type: Number, required: true, trim: true },
    balance: { type: Number, required: true, trim: true },
    kgTotal: { type: Number, required: true, trim: true },
    kgSold: { type: Number, required: true, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trips", tripsSchema);
