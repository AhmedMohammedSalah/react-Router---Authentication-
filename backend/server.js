const express = require("express");
var cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");

const { errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();
const port = 5000;
const baseApiUrl = `/v1/api`;


// Init body-parser options (inbuilt with express)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());



app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors());

// Require & Import API routes
const auth = require("./routes/auth");

// Use API Routes
app.use(`${baseApiUrl}/auth`, auth);

app.use(`${baseApiUrl}/`, (req, res) => {
  res.send("HELLO v1");
});

app.use(errorHandler);
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "URL Not Found",
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
