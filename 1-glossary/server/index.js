const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
require("dotenv").config();
const save = require('../server/db.js')
const glossary = require('../server/db.js')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.use(express.static(__dirname + '/../client/dist'))

app.post('/glossary', (req, res) => {
  console.log('req', req.body)
  let word = req.body.word
  let definition = req.body.definition
  save.save(word, definition)
  res.send('successfully saved')
})

app.get('/glossary', (req, res) => {
  glossary.glossaryModel.find()
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      console.log('error in finding', err)
    })
})

let filteredFilter = '';

app.post('/glossary/filter', (req, res) => {
  console.log('filtered1', req.body)
  filteredFilter = req.body.filter
  res.send('success')
})

app.get('/glossary/filter', (req, res) => {
  console.log('filtered2', filteredFilter)
  glossary.glossaryModel.findOne({ word: filteredFilter })
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      console.log('error in finding', err)
    })
})

app.put('/glossary', (req, res) => {
  console.log('reqbody', req.body)
  let def = req.body.definition
  let updatedWord = req.body.word
  // glossary.glossaryModel.findOneAndUpdate({ definition: def }, { $set: { name: updatedWord, definition: def } }, { new: false, upsert: true })
  glossary.glossaryModel.updateOne({ definition: def }, { $set: { word: updatedWord } }, { upsert: true })

    // (err, data) => {
    //   if (err) {
    //     console.log('error updating')
    //   } else {
    //     res.send(data)
    //   }
    // }
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      console.log('error in updating', err)
    })
})

app.delete('/glossary', (req, res) => {
  console.log('reqbdy', req.body.deleteWord)
  let deleteThis = req.body.deleteWord
  console.log(deleteThis.length)
  glossary.glossaryModel.deleteOne({ word: deleteThis })
    .then((data) => {
      res.send('deleted')
    })
    .catch(err => {
      console.log('error in deleting', err)
    })
})