import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./config/config.env",
});

app.use(morgan("dev"))

app.use(express.json());

app.get("/", (req, res) => {
  res.send("omar");
});

app.listen(3000, console.log("server on 3000"));
