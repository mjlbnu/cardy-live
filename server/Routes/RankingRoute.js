import express from "express";

import {
  savePlayerPoints,
  getRanking,
  getRankingAgr,
} from "../Controllers/RankingController.js";

const router = express.Router();

router.post("/savepoints", savePlayerPoints);
router.get("/list", getRanking);
router.get("/listagr", getRankingAgr);

export default router;
