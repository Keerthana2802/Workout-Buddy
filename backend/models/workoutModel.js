const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creating schema (structure)
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// creating a model
module.exports = mongoose.model("Workout", workoutSchema);
