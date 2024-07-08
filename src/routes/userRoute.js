import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  checkAuth,
} from "../controllers/authController.js";

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.get("/check-auth", checkAuth);
