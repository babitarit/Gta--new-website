import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        min: 4,
        max: 100,
      },
      description: {
        type: String,
        required: true,
        min: 4,
        max: 1000,
      },
      projectLink: {
        type: String,
        required: true,
        min: 4,
        max: 100,
      },
      createdBy: {
        // an array of users
        type: Array,
        of: String,
        required: true, 
      },
        metadata: {
            type: Object,
            required: false,
        },
    },
    { timestamps: true }
  );

const Project = mongoose.model("Project", ProjectSchema);
export default Project;