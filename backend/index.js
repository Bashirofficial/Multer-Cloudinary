const express = require("express");
const { fileRouter } = require("./src/router/file.router.js");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();

const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use(
  cors({
    origin: "http://localhost:3000", // frontend origin
    methods: ["GET", "POST"], // allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // allowed headers
  })
);
app.use("/src/uploads", express.static("src/uploads"));
app.use("/files", fileRouter);
app.use("/", (req, res) => {
  res.send("Welcome to file/image upload");
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
