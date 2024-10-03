import { pool } from "../config/database.js";

const getAirports = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM airports ORDER BY rank ASC"
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getAirportById = async (req, res) => {
  const { airport_id } = req.params;
  const query = "SELECT * FROM airports WHERE id = $1 LIMIT 1";
  const values = [airport_id];

  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default { getAirports, getAirportById };
