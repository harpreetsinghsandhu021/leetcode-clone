import mongoose from "mongoose";

const studyPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, " please specify a  name"],
  },
  slug: String,
  highlight: {
    type: String,
    trim: true,
    required: [true, " please specify a highlight"],
  },
  cover: {
    type: String,
    required: [true, "a cover image is required"],
  },
  onGoing: {
    type: Boolean,
    default: true,
  },
  questionNum: {
    type: Number,
    required: [true, "please specify the number of questions"],
  },
});

studyPlanSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const StudyPlan = mongoose.model("StudyPlan", studyPlanSchema);

export default StudyPlan;
