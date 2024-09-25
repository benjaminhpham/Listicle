import express from "express";
import airportData from "../data/airportData.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(airportData);
});

router.get("/:airport_id", (req, res) => {
  const { airport_id } = req.params;
  const foundAirport = airportData.find(
    (airport) => airport.id === parseInt(airport_id)
  );
  res.status(200).json(foundAirport);
});

export default router;
