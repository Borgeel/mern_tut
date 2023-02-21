// @desc Get Goals
// @route GET/api/goals
// @access Private
export const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc Set Goal
// @route POST/api/goals
// @access Private
export const postGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please access a text field");
  }

  res.status(200).json({ message: req.body.text });
};

// @desc Update Goal
// @route PUT/api/goals/:id
// @access Private
export const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}  ` });
};

// @desc Delete Goal
// @route DELETE/api/goals/:id
// @access Private
export const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal  ${req.params.id}  ` });
};
