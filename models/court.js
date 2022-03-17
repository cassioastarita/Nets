const db = require("../db/db");

const Courts = {
  findAll: () => {
    const sql = "SELECT * FROM court_info";

    return db.query(sql).then((dbRes) => dbRes.rows);
  },
  create: (courtName, net, toilet, water, parking, imgUrl) => {
    const sql = `
        INSERT INTO court_info(court_name, net, toilet, water, parking, img_url)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `;

    return db
      .query(sql, [courtName, net, toilet, water, parking, imgUrl])
      .then((dbRes) => dbRes.rows[0]);
  },
};

module.exports = Courts;
