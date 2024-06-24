require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const allRoutes = require("./routes/router");
const connectToMongoDB = require('./db/connect')
// const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGODB_URL


app.use(cors())

app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "dist")));

app.use("/api", allRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, async () => {
  console.log(`Server running on port and DB connected ${port}`);
  await connectToMongoDB(mongoURL)
});