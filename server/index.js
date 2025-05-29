import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import StatementsRoute from "./Routes/StatementsRoute.js";
import RankingRoute from "./Routes/RankingRoute.js";
import initializeDatabase from "./init-db.js";
import AIRoute from "./Routes/AIRoute.js";

// Routes
const app = express();

dotenv.config();
const isUsingDocker = process.env.DOCKER === 'S';
const mongoUrl = isUsingDocker ? process.env.MONGO_DB_LOCAL : process.env.MONGO_DB;

// Midleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    if (isUsingDocker) {
      await initializeDatabase();
      console.log("Database initialized");
    }
    
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  }
  )
  .catch((error) => console.log(error));

// Usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/statements", StatementsRoute);
app.use("/ranking", RankingRoute);
app.use("/ai", AIRoute);
