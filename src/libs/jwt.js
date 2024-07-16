import jwt from "jsonwebtoken";
import { promisify } from "util";
import dotenv from "dotenv";

dotenv.config();

const TOKEN_SECRET = process.env.JWT_SECRET;
const signAsync = promisify(jwt.sign);

export async function createAccessToken(payload) {
  try {
    const token = await signAsync(payload, TOKEN_SECRET, { expiresIn: "1d" });
    return token;
  } catch (error) {
    throw new Error(error);
  }
}
