import express from "express";
import { getAllUsers, updateUser } from "../controllers/userController.js";
import {
  signUp,
  login,
  uploadSingle,
  resizePhoto,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/").get(getAllUsers);

router.post("/signup", uploadSingle, resizePhoto, signUp);
router.post("/login", login);

router.route("/:id").patch(updateUser);

export default router;
