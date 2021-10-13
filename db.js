const Pool = require("pg").Pool;

const pool = new Pool({
    user: "guest_user", // Enter your user for PostgreSQL here
    password: "PASSWORD", // Enter you user's password here
    database: "todo_database", // Database we're working with
    host: "localhost",
    port: "5432"
});

module.exports = pool;
