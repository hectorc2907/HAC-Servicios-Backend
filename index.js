import app from "./app.js";
import { connectDB } from "./src/database/connect.js";

const PORT = process.env.BACKEND_PORT;

connectDB();

app.listen(PORT);
console.log("Server on port", PORT);
