import app from "./app.js";
import { connectDB } from "./src/database/connect.js";

const PORT = process.env.BACKEND_PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
