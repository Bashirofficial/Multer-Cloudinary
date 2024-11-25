const jwt = require("jsonwebtoken");

authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  //`Bearer [sdjfklsdjsomething like this]`

  if (!token) {
    return res
      .status(403)
      .json({ message: "No token provided, authorization denied" });
  }
  console.log("Token received:", token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid token, authorization denied." });
  }
};

module.exports = authenticateJWT;
