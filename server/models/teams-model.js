const mongoose = require('mongoose');
const { model, Schema } = mongoose; // Import the model and Schema

const TeamsSchema = new mongoose.Schema({
  fio: {

  },
  img: {
    type: String,

  },
  position: {
    type: String,

  },
  descPeople: {
    type: String,

  },
  email: {
    type: String,

  },
  phone: {
    type: String,

  },
  link: {
    type: String,

  },
  biograph: {
    type: String,

  },
  simpleFunc: {
    type: String,

  },
  firstquesthead: {
    type: String,

  },
  firstquestdesc: {
    type: String,

  },
  secondquesthead: {
    type: String,

  },
  secondquestdesc: {
    type: String,

  },
  threequesthead: {
    type: String,

  },
  threequestdesc: {
    type: String,

  },

});

module.exports = model('Team', TeamsSchema);