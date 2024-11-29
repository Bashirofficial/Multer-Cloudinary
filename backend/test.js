const jwt = require("jsonwebtoken");
require("dotenv").config();
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXNzb24iOiJjbG91ZGluYXJ5VXBsb2FkIiwiaWF0IjoxNzMyOTA2MDA5LCJleHAiOjE3MzI5MDk2MDl9.vjYm-CoTztLUzNpAiog-baVODAbFsNffLsrG2cf-KoQ"; // Replace with your actual token
const secret = process.env.JWT_SECRET; // Replace with your actual secret

try {
  const decoded = jwt.verify(token, secret);
  console.log("Decoded:", decoded);
} catch (error) {
  console.error("Error:", error.message);
}
