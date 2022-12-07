import mongoose from "mongoose";

const germanNounSchema = new mongoose.Schema(
  {
    article: { type: String, required: true },
    singular: { type: String, required: true },
    plural: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const GermanNoun = mongoose.model("germanNoun", germanNounSchema);
export default GermanNoun;
