import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {
    // Get user IP (works locally + in production)
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "127.0.0.1";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error.message);

    // 🔥 IMPORTANT: allow request if Redis fails
    next();
  }
};

export default ratelimiter;