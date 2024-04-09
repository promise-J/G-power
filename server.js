require("dotenv").config();
const path = require("path");
const express = require("express");
const allRoutes = require("./routes/router");
// const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "dist")));

app.use("/api", allRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port and DB connected ${port}`);
  // mongoose.connect(process.env.DB_URL).then(() => {
  // });
});
