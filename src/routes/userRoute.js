import { Router } from "express";
import { registerUser } from "../controllers/authController.js";

export const authRouter = Router();

authRouter.post("/register", registerUser);
