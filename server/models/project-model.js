const mongoose = require('mongoose');
const { model, Schema } = mongoose; // Import the model and Schema

const ProjectSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: String, // Assuming tags is a single string, if it's an array, use type: [String]
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = model('Project', ProjectSchema);
