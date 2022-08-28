import express from "express";
import { registerStatements } from "../Controllers/StatementsController.js";

const router = express.Router();

router.post("/register", registerStatements);

export default router;
