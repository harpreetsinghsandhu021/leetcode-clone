import Algorithmn from "../models/algorithmnModel.js";
import {
  getOne,
  getAll,
  updateOne,
  deleteOne,
  createOne,
} from "./handlerFactory.js";

export const getAlgorithmn = getOne(Algorithmn);
export const getAllAlgorithmns = getAll(
  Algorithmn,
  "-enableRunCode -enableSubmit -enableTestMode -exampleTestcaseList -topicTags -content"
);

// Do NOT update passwords with this!
export const updateAlgorithmn = updateOne(Algorithmn);
export const deleteAlgorithmn = deleteOne(Algorithmn);
export const createAlgorithmn = createOne(Algorithmn);
