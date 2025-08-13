const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",          // your DB username
  host: "localhost",
  database: "postgres",    // the DB you created
  password: "cjcdatabase", // your DB password
  port: 5432,
});

module.exports = pool;
