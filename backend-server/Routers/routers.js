import express from "express";

import { gegMoviesData } from "../ctrls/controllers.js";

const router = express.Router();


router.get("/api/movies", gegMoviesData);

export default router;

