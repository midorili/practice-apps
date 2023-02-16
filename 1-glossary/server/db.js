require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/glossary`)
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
const Schema = mongoose.Schema;

const glossarySchema = new Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
})

const glossaryModel = mongoose.model('glossaryModel', glossarySchema)

let save = (word, definition) => {
  let newGlossary = new glossaryModel({ word: word, definition: definition }).save((err, data) => {
    if (err) {
      console.log('error saving')
    } else {
      console.log('saved!', data)
    }
  })
}

module.exports.save = save;
module.exports.glossaryModel = glossaryModel;