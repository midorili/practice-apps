require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const bodyParser = require('body-parser')

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/purchase', (req, res) => {
  console.log('request body', req.body)
  //save to mysql
  var params = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    line1: req.body.line1,
    line2: req.body.line2,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    credit: req.body.credit,
    expiry: req.body.expiry,
    cvv: req.body.cvv,
    billingZip: req.body.billingZip
  }

  var queryArgs = [req.body.name, req.body.username, req.body.password, req.body.line1, req.body.line2, req.body.city, req.body.state, req.body.zipcode, req.body.credit, req.body.expiry, req.body.cvv, req.body.billingZip]
  // var query = `INSERT INTO responses (name, username, password, line1, line2, city, state, zipcode, credit, expiry, cvv, billingZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  // INSERT INTO responses (name, username, password, line1, line2, city, state, zipcode, credit, expiry, cvv, billingZip) VALUES ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12')
  db.query('INSERT INTO responses (name, username, password, line1, line2, city, state, zipcode, credit, expiry, cvv, billingZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', queryArgs, (err, data) => {
    if (err) {
      console.log('error saving to mysql', err)
    } else {
      res.send('success')
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
