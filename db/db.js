const pg = require("pg");
const db = new pg.Pool({
  database: "nets",
});

module.exports = db;
