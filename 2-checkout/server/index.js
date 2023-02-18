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
  console.log('request body', req.body.username)
  console.log('logger', req.session_id)
  var queryArgs = [req.body.name, req.body.username, req.body.password, req.body.line1, req.body.line2, req.body.city, req.body.state, req.body.zipcode, req.body.credit, req.body.expiry, req.body.cvv, req.body.billingZip, req.session_id]

  db.queryAsync('INSERT INTO responses (name, username, password, line1, line2, city, state, zipcode, credit, expiry, cvv, billingZip, sessionId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', queryArgs)

    .then((data) => {
      console.log('successful insert', data)
      console.log('res', data[0].insertId)
      var queryArgHere = [req.session_id, data[0].insertId]
      db.queryAsync('INSERT INTO cookies (cookie, userID) VALUES (?, ?);', queryArgHere)
        .then((dataFromBothInserts) => {
          console.log('both were successful', dataFromBothInserts)
        })
        .catch((err) => {
          console.log('error inserting into cookies tbl', err)
        })
    })
    .catch((err) => {
      console.log('error', err)
    })
})

app.get('/purchase', (req, res) => {
  console.log(req.session_id)
  db.queryAsync(`SELECT cookie, userID FROM cookies WHERE cookie = ?`, req.session_id)
    .then((data) => {
      console.log('data from get', data)
      let user = data[0][0].userID;
      console.log('userID', user)
      db.queryAsync(`SELECT name, username, password, line1, line2, city, state, zipcode, credit, expiry, cvv, billingZip, sessionId FROM responses WHERE id = ?`, user)
        .then((dataFromUsers) => {
          console.log('data from users', dataFromUsers[0][0])
          res.send(dataFromUsers[0][0])
        })
    })
    .catch((err) => {
      console.log('error in catch', err)
    })

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

  // var loggedIn = false;
  // var queryArgsFirst = [req.body.username, req.session_id]

  // db.queryAsync(`SELECT username, sessionId FROM responses WHERE username = ? AND sessionId = ?`, queryArgsFirst, (err, data) => {
  //   if (err) {
  //     console.log('error searching', err)
  //   } else {
  //     loggedIn = true;
  //     console.log('user is logged in')
  //   }
  // })

  // if (loggedIn) {
  //   console.log('loggedIn', loggedIn)
  //   res.send('already logged in')
  // } else {