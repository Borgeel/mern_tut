import express from "express";

import {
  deleteGoal,
  getGoals,
  postGoal,
  updateGoal,
} from "../controller/goalController.js";

const router = express.Router();

router.get("/", getGoals);

router.post("/", postGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

export default router;
