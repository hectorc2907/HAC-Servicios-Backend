import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    quantity: { type: Number, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    total: { type: Number, required: true, trim: true },
    customer: { type: String, required: true, trim: true },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trips",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sale", saleSchema);