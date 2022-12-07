import express from "express";
import expressAsyncHandler from "express-async-handler";
import GermanNoun from "../models/germanNounModel.js";
// import { isAuth, isAdmin } from "../utils.js";
import path from "path";

const germanNounRouter = express.Router();

germanNounRouter.get("/", async (req, res) => {
  const germanNouns = await GermanNoun.find();
  res.send(germanNouns);
});

germanNounRouter.get("/:id", async (req, res) => {
  try {
    const germanNoun = await GermanNoun.findById(req.params.id);
    res.send(germanNoun);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default germanNounRouter;
