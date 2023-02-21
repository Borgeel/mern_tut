import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";

// @desc Get Goals
// @route GET/api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc Set Goal
// @route POST/api/goals
// @access Private
export const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please access a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json({ goal });
});

// @desc Update Goal
// @route PUT/api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}  ` });
});

// @desc Delete Goal
// @route DELETE/api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal  ${req.params.id}  ` });
});
