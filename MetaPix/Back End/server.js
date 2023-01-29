const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/routes", require("./routes"));

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*
This file sets up a basic Express server with body-parser and cors middleware. 
It also specifies the routes for the API in the /api/routes endpoint, and includes 
error handling middleware to return errors to the client in a JSON format.*/