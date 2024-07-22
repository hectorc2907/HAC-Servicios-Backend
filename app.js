import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.routes.js";
import clientRoutes from "./src/routes/client.routes.js";
import tripRoutes from "./src/routes/trips.routes.js";
import saleRoutes from "./src/routes/sale.routes.js";
import billsRoutes from "./src/routes/bills.routes.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", clientRoutes);
app.use("/api", tripRoutes);
app.use("/api", saleRoutes);
app.use("/api", billsRoutes);

export default app;
