const express = require("express");
const router = express.Router();

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// GET
router.get("/", getWorkouts);

// GET
router.get("/:id", getWorkout);

// POST
router.post("/", createWorkout);

// DELETE
router.delete("/:id", deleteWorkout);

// PATCH
router.patch("/:id", updateWorkout);

module.exports = router;
