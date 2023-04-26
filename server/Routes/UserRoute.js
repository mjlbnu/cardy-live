import express from "express";

import {
  deleteUser,
  getUser,
  updateUser,
  getUsers,
  getUserProfile,
  getPlayers,
} from "../Controllers/UserController.js";

const router = express.Router();

router.get("/id/:id", getUser);
//router.get("/:id", getUser);

//router.put("/id/:id", updateUser);
router.post("/updateUser", updateUser);

router.delete("/id/:id", deleteUser);
router.get("/list", getUsers);

router.get("/profile/:id", getUserProfile);

router.get("/players", getPlayers);

export default router;
