import express from "express";
import { readJsonFiles } from "../services/fsFunc.js";

const router = express.Router();

const PATH_DATA = "data/movies.json";

router.get("/api/movies", async (_, res) => {
  try {
    const readData = await readJsonFiles(PATH_DATA);
    res.json(readData);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

export default router;
