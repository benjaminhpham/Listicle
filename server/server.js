import express from "express";
import airportRouter from "./routes/airportRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/airports", airportRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
