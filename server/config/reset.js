import { pool } from "./database.js";
import "./dotenv.js";
import airportData from "../data/airportData.js";

const createAirportsTable = async () => {
  const createAirportsQuery = `
    DROP TABLE IF EXISTS airports;
    
    CREATE TABLE IF NOT EXISTS airports (
      id SERIAL PRIMARY KEY,
      rank INTEGER NOT NULL,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      code VARCHAR(255) NOT NULL,
      image TEXT NOT NULL,
      passengers INTEGER NOT NULL,
      percentageChange DECIMAL NOT NULL
    )
  `;

  try {
    await pool.query(createAirportsQuery);
    console.log("Airports table created successfully");
  } catch (err) {
    console.error("Error creating Airports table", err);
  }
};

const seedAirportsTable = async () => {
  await createAirportsTable();

  airportData.forEach((airport) => {
    const {
      rank,
      name,
      location,
      country,
      code,
      image,
      passengers,
      percentageChange,
    } = airport;

    const insertQuery = `INSERT INTO airports (rank, name, location, country, code, image, passengers, percentageChange) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

    const values = [
      rank,
      name,
      location,
      country,
      code,
      image,
      passengers,
      percentageChange,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        return console.error("Error inserting airport", err);
      }
      console.log(`${airport.name} added successfully`);
    });
  });
};

seedAirportsTable();
