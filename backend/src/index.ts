import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import cors from 'cors';

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

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api', productRoutes);

app.listen(port, () => console.log(`Backend is running at ${port}`));
