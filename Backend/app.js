// app.js

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// middlewares
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173", "http://localhost:5174"],
    credentials: true, // allow cookies
}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

// custom middlewares
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});

// routes import
import authRoutes from './src/routes/authUser.routes.js';
import postRoutes from './src/routes/post.routes.js';

// routes usage
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

// exporting
export { app };
