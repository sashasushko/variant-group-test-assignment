import "dotenv/config";
import express from "express";
import morgan from "morgan";
import generateCoverLetter from "./api/generate.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(morgan("dev"));

app.post("/api/generate", generateCoverLetter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
