import express from "express";
import expressAsyncHandler from "express-async-handler";
import Flaschcard from "../models/flaschcardModel.js";
// import { isAuth, isAdmin } from "../utils.js";
import path from "path";

const flaschcardRouter = express.Router();

flaschcardRouter.get("/", async (req, res) => {
  const flaschcards = await Flaschcard.find();
  res.send(flaschcards);
});

flaschcardRouter.get("/:id", async (req, res) => {
  try {
    const flaschcard = await Flaschcard.findById(req.params.id);
    res.send(flaschcard);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default flaschcardRouter;
