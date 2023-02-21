import express from "express";
import bodyParser from "body-parser";
import colors from "colors";
import dotenv from "dotenv";

import goalRoutes from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

connectDB();
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
