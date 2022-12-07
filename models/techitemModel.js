import mongoose from "mongoose";

const techitemSchema = new mongoose.Schema(
  {
    buyurl: { type: String, required: true, unique: true },
    currentpage: { type: String, required: true },
    description: { type: String, required: true },
    idcode: { type: String, required: true },
    language: { type: String, required: true },
    title: { type: String, required: true },

    totalpages: { type: String, required: true },
    rank: { type: String },
  },
  {
    timestamps: true,
  }
);

const Techitem = mongoose.model("techItem", techitemSchema);
export default Techitem;
