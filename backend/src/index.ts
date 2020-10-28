import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import routes from './routes';
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

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

app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.listen(port, () => console.log(`Backend is running at ${port}`));
