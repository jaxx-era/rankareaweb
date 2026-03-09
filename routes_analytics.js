const express = require("express");
const { verifyToken } = require("../utils/jwt");
const { getKeyForUser } = require("../utils/geminiKeyManager");
const axios = require("axios");

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded = verifyToken(token);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

router.get("/", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const geminiKey = getKeyForUser(userId);
  try {
    const prompt = `Generate business insights for user ${userId}`;
    const response = await axios.post("https://gemini.googleapis.com/v1/generate", { prompt }, { headers: { "Authorization": `Bearer ${geminiKey}` } });
    const stats = {
      totalVisitors: Math.floor(Math.random() * 1000),
      conversionRate: (Math.random() * 10).toFixed(2) + "%",
      growthScore: Math.floor(Math.random() * 100),
      aiRecommendation: response.data?.text || "Use more online ads"
    };
    res.json({ stats });
  } catch (err) {
    res.json({ stats: {
      totalVisitors: Math.floor(Math.random() * 1000),
      conversionRate: (Math.random() * 10).toFixed(2) + "%",
      growthScore: Math.floor(Math.random() * 100),
      aiRecommendation: "Use more online ads"
    }});
  }
});

module.exports = router;