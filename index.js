import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "RankArea API Running" });
});

app.post("/auth/login", (req, res) => {
  res.json({ status: "login working" });
});

app.post("/auth/signup", (req, res) => {
  res.json({ status: "signup working" });
});

app.post("/business/add", (req, res) => {
  res.json({ status: "business added" });
});

app.get("/analytics/data", (req, res) => {
  res.json({ visitors: 120 });
});

app.post("/payment/create", (req, res) => {
  res.json({ payment: "created" });
});

export default app;
