import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    title: { type: String, required: true },
    titleOfCourtesy: { type: String, required: true },
    birthDate: { type: String, required: true },
    hireDate: { type: String, required: true },

    address: { type: Object, required: true },
    notes: { type: String },
    reportsTo: { type: Number, required: true },
    teritoryIDs: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", employeeSchema);
export default Employee;
