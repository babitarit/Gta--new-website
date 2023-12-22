import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      min: 4,
      max: 100,
    },
    createdBy: {
      type: String,
      required: true,
      min: 4,
      max: 100,
    },
    title: {
      type: String,
      required: true,
      min: 4,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      min: 8,
      max: 1000,
    },
    status: {
      type: String,
      required: true,
      min: 4,
      max: 100,
    },
    metadata: {
      type: Object,
      required: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
export default Task;
