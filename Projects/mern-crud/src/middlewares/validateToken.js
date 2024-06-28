import jwt from "jsonwebtoken";
import { SECRET_APP } from "../config.js";

export const authRequire = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Authorization denied, required login" });
  }

  jwt.verify(token, SECRET_APP, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid session" });
    }

    req.user = user;
  });

  next();
};
