import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      minLength: [3, "Username must be at least 3 characters long."],
      maxLength: [20, "Username cannot exceed 20 characters."],
      required: [true, "Username is required."],
      unique: true,
    },
    password: {
      type: String,
      minLength: [6, "Password must be at least 6 characters long."],
      required: [true, "Password is required."],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

export default User;
