const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/UserRoute");
const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);

const connnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notesapp");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
connnectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
