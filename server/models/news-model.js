const mongoose = require('mongoose');
const { model, Schema } = mongoose; // Import the model and Schema

const NewsShema = new Schema({
  head: {
    type: String,
  },
  date: {
    type: String,
  },
  category: {
    type: String,
  },
  imgLink: {
    type: String,
  },
  desc: {
    type: String,
  },
  citata: {
    type: String,
  },
  headTwo: {
    type: String,
  },
  descTwo: {
    type: String,
  },
  Tag: {
    type: [String],
  },
});

module.exports = model('New', NewsShema);
