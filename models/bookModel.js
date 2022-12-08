import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    buyurl: { type: String, required: true, unique: true },
    currentpage: { type: Number, required: true },
    description: { type: String, required: true },
    idcode: { type: String, required: true },
    language: { type: String, required: true },
    title: { type: String, required: true },

    totalpages: { type: Number, required: true },
    rank: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);
export default Book;
