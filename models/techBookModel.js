import mongoose from "mongoose";

const techBookSchema = new mongoose.Schema(
  {
    idCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    notes: { type: String, required: true },
    yearMonth: { type: String, required: true },
    rank: { type: Number, required: true },

    language: { type: String, required: true },
    extras: { type: String },
  },
  {
    timestamps: true,
  }
);

const Techbook = mongoose.model("techbook", techBookSchema);
export default Techbook;
