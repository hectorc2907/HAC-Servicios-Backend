import express from "express";
import logger from "morgan";
import cors from "cors";
import { authRouter } from "./src/routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/api", authRouter);

export default app;
