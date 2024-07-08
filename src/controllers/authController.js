import { validateUser } from "../middlewares/validateUser.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const validationResult = validateUser({ username, password });
    if (!validationResult.success) {
      return res.status(400).json({ errors: validationResult.error });
    }

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

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login Succesfully!" });
  } catch (error) {
    console.error("Login failed because:", error.message);
    res.status(500).json({ message: "Failed server" });
  }
};
