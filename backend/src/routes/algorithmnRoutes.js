import express from "express";
import {
  getAlgorithmn,
  getAllAlgorithmns,
  updateAlgorithmn,
  deleteAlgorithmn,
  createAlgorithmn,
} from "../controllers/algorithmnController.js";

import { protect, restrictTo } from "../controllers/authController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllAlgorithmns)
  .post(restrictTo("admin"), createAlgorithmn);

router
  .route("/:id")
  .get(protect, getAlgorithmn)
  .patch(protect, updateAlgorithmn)
  .delete(protect, restrictTo("admin"), deleteAlgorithmn);

export default router;
