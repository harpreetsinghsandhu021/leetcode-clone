import mongoose from "mongoose";
import slugify from "slugify";

const algorithmnSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "an algorithmn must have a title"],
      unique: true,
    },
    titleSlug: String,
    acRate: {
      type: Number,
    },
    difficulty: {
      type: String,
      required: [true, "an algorithmn must have difficulty level"],
      enum: {
        values: ["Easy", "Medium", "Hard"],
        message: "Difficulty is either: easy, medium or hard",
      },
    },
    frontendQuestionId: {
      type: Number,
      unique: true,
      required: [true, "an algorithmn must have a question ID"],
    },
    status: {
      type: String,
      default: null,
    },
    likes: {
      type: Number,
      default: 120,
    },
    disLikes: {
      type: Number,
      default: 20,
    },
    hasSolution: {
      type: Boolean,
      default: false,
      required: [true, "algorithmn has solution or not is required"],
    },
    hasVideoSolution: {
      type: Boolean,
      default: false,
    },
    enableRunCode: {
      type: Boolean,
      default: true,
    },
    enableSubmit: {
      type: Boolean,
      default: true,
    },
    enableTestMode: {
      type: Boolean,
      default: true,
    },
    exampleTestcaseList: [String],
    metaData: String,
    content: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

algorithmnSchema.pre("save", function (next) {
  this.titleSlug = slugify(this.title, { lower: true });
  next();
});

const Algorithmn = mongoose.model("Algorithmn", algorithmnSchema);

export default Algorithmn;
