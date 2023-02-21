import mongoose from "mongoose";

const { Schema, model } = mongoose;

const goalSchema = new Schema({
  text: String,
});

const Goal = model("Goal", goalSchema);
export default Goal;
