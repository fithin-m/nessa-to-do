import mongoose from "mongoose";

export const STATUS = {
  PENDING: 0,
  IN_PROGRESS: 1,
  COMPLETED: 2,
};

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Number,
      enum: Object.values(STATUS),
      default: STATUS.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Todo", todoSchema);