const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

require("dotenv").config();
app.use(express.json());

app.use(require("cors")());

const port = process.env.PORT;
const db = process.env.MONGO_URL;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
  mongoose.connect(db, (err) => {
    if (err) {
      console.log("Database Error" + err);
    }
    console.log("Connected to Database");
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Working",
  });
});
