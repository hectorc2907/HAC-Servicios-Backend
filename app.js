import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express());
app.use(cors());
app.use(morgan("dev"));

export default app;
