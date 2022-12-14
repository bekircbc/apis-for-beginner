import express from "express";
import cors from "cors";
import path from "path";

import bookRouter from "./routes/bookRoutes.js";
import employeeRouter from "./routes/employeeRoutes.js";
import flaschcardRouter from "./routes/flaschcardRoutes.js";
import germanNounRouter from "./routes/germanNounRoutes.js";

import techBookRouter from "./routes/techBookRoutes.js";
import techitemRouter from "./routes/techitemRoutes.js";

// import productRouter from "./routes/productRoutes.js";

// import seedRouter from "./routes/seedRoutes.js";

// if yo want to add data from your code to mongoose, then add seedRoutes.js

// import orderRouter from "./routes/orderRoutes.js";

import "./db-connect.js";
import { config } from "./config.js";

const port = config.PORT || 43526;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.set("trust proxy", 1);

// app.use("/api/seed", seedRouter);
app.use("/api/books", bookRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/flaschcards", flaschcardRouter);
app.use("/api/germanNouns", germanNounRouter);
app.use("/api/techbooks", techBookRouter);
app.use("/api/techitems", techitemRouter);

// app.use("/api/users", userRouter);
// app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
