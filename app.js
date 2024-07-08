import express from "express";
import logger from "morgan";

const app = express();

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

export default app;
