import express from "express";

import {
  updatePlayerPoints,
  savePlayerPoints,
} from "../Controllers/RankingController.js";

const router = express.Router();

router.post("/savepoints", savePlayerPoints);
router.post("/updatepoints", updatePlayerPoints);

export default router;
