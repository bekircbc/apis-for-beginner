import mongoose from "mongoose";
import { config } from "./config.js";

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("Connection to database established!"))
  .catch((err) => console.log("[ERROR] Connection failed!", err.message));
