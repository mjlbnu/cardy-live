import express from "express";

import {
  getStatements,
  registerStatements,
  updateStatements,
  getGamerStatements,
  saveStatements
} from "../Controllers/StatementsController.js";

const router = express.Router();

router.post("/register", registerStatements);
router.get("/:id", getStatements);
router.put("/:id", updateStatements);
router.get("/:id/gamerstatements/:bringLie", getGamerStatements);
router.post("/savestatements", saveStatements)

export default router;
