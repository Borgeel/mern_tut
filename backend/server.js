import express from "express";
import bodyParser from "body-parser";

import goalRoutes from "./routes/goalRoutes.js";

const app = express();

// const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/api/goals", goalRoutes);

app.get("/api/goals", (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
