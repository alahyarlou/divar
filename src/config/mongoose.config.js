const mongoose = require("mongoose");

require("dotenv").config();

// config databse with mongoose

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connect to the databse!");
  })
  .catch(() => {
    console.log("Faild database connection!");
  });
