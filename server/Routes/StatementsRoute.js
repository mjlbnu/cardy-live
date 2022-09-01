import express from "express";
import {
  getStatements,
  registerStatements,
  updateStatements,
} from "../Controllers/StatementsController.js";

const router = express.Router();

router.post("/register", registerStatements);
router.get("/:id", getStatements);
router.put("/:id", updateStatements);

export default router;
