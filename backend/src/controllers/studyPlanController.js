import StudyPlan from "../models/studyPlanModel.js";

import {
  getOne,
  getAll,
  updateOne,
  deleteOne,
  createOne,
} from "./handlerFactory.js";

export const getStudyPlan = getOne(StudyPlan);
export const getAllStudyPlans = getAll(StudyPlan);

// Do NOT update passwords with this!
export const updateStudyPlan = updateOne(StudyPlan);
export const deleteStudyPlan = deleteOne(StudyPlan);
export const createStudyPlan = createOne(StudyPlan);
