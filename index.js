import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./src/db/connect.js";

dotenv.config();

const PORT = process.env.BACKEND_PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error al conectar con MongoDB:`, error.message);
  });
