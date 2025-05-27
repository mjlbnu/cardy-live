import express from "express";

import {
  getAllStatements,
  getStatements,
  registerStatements,
  updateStatements,
  getGamerStatements,
  saveStatements,
  setStatementsPlayed,
  saveStatementsList,
} from "../Controllers/StatementsController.js";

const router = express.Router();

router.get("/all", getAllStatements);
router.post("/register", registerStatements);
router.get("/:id", getStatements);
router.put("/:id", updateStatements);
router.get("/:id/gamerstatements/:bringLie", getGamerStatements);
router.post("/savestatements", saveStatements);
router.post("/setstatementsplayed/:id", setStatementsPlayed);
router.post("/save-statements-list", saveStatementsList);

export default router;
