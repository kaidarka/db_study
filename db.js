const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "7436675pv",
    host: "localhost",
    port: 5432,
    database: "n33501_6",
})

module.exports = pool;