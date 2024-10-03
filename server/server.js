import express from "express";
import airportRouter from "./routes/airportRoutes.js";
import cors from "cors";
// import "./config/dotenv.js";

const app = express();

app.use(cors());

app.use("/api/airports", airportRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
