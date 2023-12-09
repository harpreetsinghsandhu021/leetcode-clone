import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { globalErrorHandler } from "./controllers/errorController.js";
import AppError from "./utils/appError.js";

// routes
import userRouter from "./routes/userRoutes.js";
import algorithmnRouter from "./routes/algorithmnRoutes.js";
import studyPlanRouter from "./routes/studyPlanRoutes.js";

const app = express();

// morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// helmet
app.use(helmet());

// parse json request url
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// mongo sanitize
app.use(mongoSanitize());

// cookie parser
app.use(cookieParser());

// compression
app.use(compression());

// file upload
// app.use(
//   fileUpload({
//     useTempFiles: true,
//   })
// );

// cors
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/algorithmns", algorithmnRouter);
app.use("/api/v1/studyplan", studyPlanRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
