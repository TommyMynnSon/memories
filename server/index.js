import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Routers
import postRoutes from './routes/posts.js';

// Start new Express Application
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use('/posts', postRoutes);

// MongoDB
const CONNECTION_URL = "mongodb+srv://tommyson:0000@cluster0.c1goa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)))
  .catch((error) => console.log(error.message));