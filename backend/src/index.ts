import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT || 3333;
const mongoUri = process.env.MONGO_URI || '';

mongoose
  .connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

app.listen(port, () => console.log(`Backend is running at ${port}`));
