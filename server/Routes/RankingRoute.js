import express from "express";

import { updatePlayerPoints } from "../Controllers/RankingController.js";

const router = express.Router();

router.post("/updatepoints", updatePlayerPoints);

export default router;