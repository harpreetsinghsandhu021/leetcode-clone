import express from "express";
import {
  getStudyPlan,
  getAllStudyPlans,
  updateStudyPlan,
  deleteStudyPlan,
  createStudyPlan,
} from "../controllers/studyPlanController.js";
import { restrictTo, protect } from "../controllers/authController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllStudyPlans)
  .post(restrictTo("admin"), createStudyPlan);

router
  .route("/:id")
  .get(protect, getStudyPlan)
  .patch(protect, restrictTo("admin"), updateStudyPlan)
  .delete(protect, restrictTo("admin"), deleteStudyPlan);

export default router;
