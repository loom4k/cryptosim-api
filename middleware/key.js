const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = function(req, res, next) {
  const token = req.header("apikey");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    if(token == process.env.API_KEY) {
        next();
    } else {
        res.status(500).send({ message: "Invalid Token" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};