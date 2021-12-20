const pool = require("./db");

module.exports = {
  getHouses: async (req, res) => {
    try {
      const homes = await pool.query("SELECT * FROM home;");
      return res.status(200).send(homes.rows);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  getHouse: async (req, res) => {
    try {
      const { id } = req.params;
      const home = await pool.query("SELECT * FROM home WHERE home_id = $1;", [
        id,
      ]);
      return res.status(200).send(home.rows);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  addHouse: async (req, res) => {
    try {
      const { home_name, home_address, home_price, home_img, home_disc } =
        req.body;
      const home = await pool.query(
        "INSERT INTO home (home_name, home_address, home_price, home_img, home_disc) VALUES ($1, $2, $3, $4, $5);",
        [home_name, home_address, home_price, home_img, home_disc]
      );
      return res.status(200).send(home.rows);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  updateHouse: async (req, res) => {
    try {
      const { id } = req.params;
      const { amount } = req.body;
      const home = await pool.query(
        "UPDATE home SET home_price = $1 WHERE id = $2;",
        [amount, id]
      );
      return res.status(200).send(home.rows);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  deleteHouse: async (req, res) => {
    try {
      const { id } = req.params;
      const home = await pool.query("DELETE FROM home WHERE home_id = $1;", [
        id,
      ]);
      return res.status(200).send(home.rows);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
};
