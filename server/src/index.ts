import express from "express";
import { config } from "../config";
const PORT = process.env.port || config.port;
const app = express();
app.get("/", (req, res) => {
  res.send({ h1: "there" });
  res.status(400);
});

app.listen(PORT, () => {
  console.log("app is listening to ", PORT);
});
