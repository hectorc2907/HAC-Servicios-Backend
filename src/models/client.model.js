import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    nickName: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Client", clientSchema);
