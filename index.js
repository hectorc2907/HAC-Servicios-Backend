import dotenv from "dotenv"
import app from "./app.js";

dotenv.config()

const PORT = process.env.BACKEND_PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`)
})