const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, username VARCHAR(100) UNIQUE NOT NULL, password VARCHAR(100) NOT NULL, line1 VARCHAR(100) NOT NULL, line2 VARCHAR(100) NOT NULL, city VARCHAR(100) NOT NULL, state VARCHAR(100) NOT NULL, zipcode VARCHAR(100) NOT NULL, credit VARCHAR(100) NOT NULL, expiry VARCHAR(100) NOT NULL, cvv VARCHAR(100) NOT NULL, billingZip VARCHAR(100) NOT NULL, sessionId VARCHAR(100))"
    )
      .then(() =>
        db.queryAsync(
          "CREATE TABLE IF NOT EXISTS cookies (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cookie VARCHAR(100) UNIQUE, userID INT NOT NULL, FOREIGN KEY (userID) REFERENCES responses(id))"
        )
      )
  )
  .catch((err) => console.log(err));

module.exports = db;
