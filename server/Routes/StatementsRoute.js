import express from "express";
import {
  getStatements,
  registerStatements,
  updateStatements,
  getGamerStatements,
} from "../Controllers/StatementsController.js";

const router = express.Router();

router.post("/register", registerStatements);
router.get("/:id", getStatements);
router.put("/:id", updateStatements);
router.get("/:id/gamerstatements", getGamerStatements);

export default router;
