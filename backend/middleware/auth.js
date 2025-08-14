// middleware/auth.js
const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Use the correct env variable
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
