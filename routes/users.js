import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

export default router;
