const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();

const authRoutes = require("./routes/auth");
const businessRoutes = require("./routes/business");
const analyticsRoutes = require("./routes/analytics");
const paymentRoutes = require("./routes/payment");

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/business", businessRoutes);
app.use("/analytics", analyticsRoutes);
app.use("/payment", paymentRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));