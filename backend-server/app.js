import express from "express";
import { config } from "dotenv";
import cors from "cors";
import router from "./Routers/routers.js";
config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.get("/health", (req, res) => {
  res.json("server Health 200K");
});

app.use("/", router);

app.listen(port, () => {
  console.log("server run on http://localhost:", port);
});
