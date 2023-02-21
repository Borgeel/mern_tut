export const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

export const postGoal = (req, res) => {
  res.status(200).json({ message: "Post Goal" });
};

export const updateGoal = (req, res) => {
  res.status(200).json({ message: "Update Goal" });
};

export const deleteGoal = (req, res) => {
  res.status(200).json({ message: "Delete Goal" });
};
