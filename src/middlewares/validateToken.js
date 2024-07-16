import jwt from "jsonwebtoken";

dotenv.config();

const TOKEN_SECRET = process.env.JWT_SECRET;

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  jwt.verify(token, TOKEN_SECRET, (error, user) => {
    if (error) return res.status(401).json({ message: "Invalid token" });

    req.user = user;

    next();
  });
};
