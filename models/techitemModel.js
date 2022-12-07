import mongoose from "mongoose";

const techitemSchema = new mongoose.Schema(
  {
    body: { type: String, required: true, unique: true },
    extras: { type: String, required: true },
    genericTermIdCode: { type: String, required: true },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Techitem = mongoose.model("techItem", techitemSchema);
export default Techitem;
