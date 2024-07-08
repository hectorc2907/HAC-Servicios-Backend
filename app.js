import express from "express";
import logger from "morgan";
import { authRouter } from "./src/routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/api", authRouter);

export default app;
