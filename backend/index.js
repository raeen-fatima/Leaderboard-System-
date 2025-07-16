import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
connectDB();

const app = express();
const httpServer = createServer(app);

// ✅ Corrected socket.io setup with CORS
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173", "https://leaderboard-system-iota.vercel.app"],
    credentials: true,
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Global socket access
app.set("io", io);

// Start server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
