import express from "express";
import expressAsyncHandler from "express-async-handler";
import Techitem from "../models/techitemModel.js";
// import { isAuth, isAdmin } from "../utils.js";
import path from "path";

const techitemRouter = express.Router();

techitemRouter.get("/", async (req, res) => {
  const techitems = await Techitem.find();
  res.send(techitems);
});

techitemRouter.get("/:id", async (req, res) => {
  try {
    const techitem = await Techitem.findById(req.params.id);
    res.send(techitem);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default techitemRouter;
