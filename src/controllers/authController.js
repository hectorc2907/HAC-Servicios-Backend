import { validateUser } from "../middlewares/validateUser.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const validationResult = validateUser({ username, password });
  if (!validationResult.success) {
    return res.status(400).json({ errors: validationResult.error });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Failed to register user" });
  }
};
