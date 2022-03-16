const mapPin = {
  findAllLocations: function () {
    const sql = "SELECT FROM court_info(court_name) VALUES ($1) RETURNING *";
    return db.query(sql).then((dbRes) => dbRes.rows);
  },
};

const pinLocation = mapPin.split(" ").join("%20");
