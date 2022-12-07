import express from "express";
import expressAsyncHandler from "express-async-handler";
import Techbook from "../models/techBookModel.js";
// import { isAuth, isAdmin } from "../utils.js";
import path from "path";

const techBookRouter = express.Router();

techBookRouter.get("/", async (req, res) => {
  const techBooks = await Techbook.find();
  res.send(techBooks);
});

techBookRouter.get("/:id", async (req, res) => {
  try {
    const techBook = await Techbook.findById(req.params.id);
    res.send(techBook);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default techBookRouter;
