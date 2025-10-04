const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require("./routes/UserRoute");
const noteRoute = require("./routes/NoteRoute");
const port = process.env.SERVER_PORT | 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/note", noteRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const connnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/note_app");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
connnectDB();
