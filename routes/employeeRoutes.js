import express from "express";
import expressAsyncHandler from "express-async-handler";
import Employee from "../models/employeeModel.js";
// import { isAuth, isAdmin } from "../utils.js";
import path from "path";

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});

employeeRouter.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default employeeRouter;
