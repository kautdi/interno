const { model, Schema } = require('mongoose');

const ServiceSchema = new Schema({
  head: {
    type: String
  },
  desc: {
    type: String
  },
  headDesc: {
    type: String
  },
  descSingle: {
    type: String
  },
  videoLink: {
    type: String
  }

});

module.exports = model('Service', ServiceSchema);
