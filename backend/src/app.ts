import express, { NextFunction, Request, Response } from "express";
import fs from "fs";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const file = "./counter.json";
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, JSON.stringify({ visits: 0 }));
}

app.get("/visits", (req, res) => {
  const data = JSON.parse(fs.readFileSync(file, "utf-8"));
  res.json({ visits: data.visits });
});
const visitors = new Set();

app.post("/visits", (req, res) => {
  const ip = req.ip;

  const data = JSON.parse(fs.readFileSync(file, "utf-8"));

  if (!visitors.has(ip)) {
    data.visits += 1;
    visitors.add(ip);
    fs.writeFileSync(file, JSON.stringify(data));
  }
  res.json({ visits: data.visits });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
