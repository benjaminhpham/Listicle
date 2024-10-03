import express from "express";
import airportController from "../controllers/airportController.js";

const router = express.Router();

router.get("/", airportController.getAirports);

router.get("/:airport_id", airportController.getAirportById);

export default router;
