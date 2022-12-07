import mongoose from "mongoose";

const flaschcardSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    extras: { type: String, required: true },
    genericTermIdCode: { type: String, required: true },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Flaschcard = mongoose.model("flaschcard", flaschcardSchema);
export default Flaschcard;
