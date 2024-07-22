import app from "./app.js";
import { connectDB } from "./src/database/connect.js";

export default async (req, res) => {
  // Conectar a la base de datos
  await connectDB();
  
  // Utiliza la aplicación Express para manejar la solicitud
  return app(req, res);
};