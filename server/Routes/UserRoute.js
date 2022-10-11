import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
  getUsers,
} from "../Controllers/UserController.js";

const router = express.Router();

router.get("/id/:id", getUser);
router.put("/id/:id", updateUser);
router.delete("/id/:id", deleteUser);
router.get("/list", getUsers);

export default router;
