import express from "express";
import expressAsyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";
// import { isAuth, isAdmin } from "../utils.js";
import path from "path";

const bookRouter = express.Router();

bookRouter.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

bookRouter.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.send(book);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default bookRouter;
