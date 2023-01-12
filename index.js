const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Talgat:Talgat2000@cluster0.lt7qh7o.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
