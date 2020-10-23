import express from 'express';
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Backend is running at ${port}`))