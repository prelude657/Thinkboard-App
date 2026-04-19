import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/notesRoutes.js";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import { redis } from "./config/upstash.js"; // ✅ import redis client

// Debug (optional — remove in production)
console.log("Redis URL:", process.env.UPSTASH_REDIS_REST_URL);
console.log("Redis TOKEN:", process.env.UPSTASH_REDIS_REST_TOKEN);

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(ratelimiter);

// Routes
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

// Start server AFTER DB connects
connectDB().then(() => {
  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);

    // ✅ KEEP-ALIVE PING (runs in background)
    setInterval(async () => {
      try {
        await redis.set("keepalive", Date.now());
        console.log("🔄 Redis keep-alive ping sent");
      } catch (err) {
        console.error("Keep-alive failed:", err.message);
      }
    }, 1000 * 60 * 60 * 24); // once every 24 hours
  });
});