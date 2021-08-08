const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const rateLimit = require("express-rate-limit");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();
const limiter = rateLimit({
  windowMs: 6 * 1000, // 10s
  max: 10 // limit each IP to 100 requests per windowMs
});

// Require the Routes
const user = require("./routes/account");
const database = require("./routes/database");

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "API Working" });
});

// Setting Rate Limits
app.use("/api/user", limiter);

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/api/user", user);
app.use("/api/database", database);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});