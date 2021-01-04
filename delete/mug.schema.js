'use strict';

const dynamoose = require('dynamoose');

const mugSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'capacity': Number,
  'color': {
    'type': Array,
    'schema': [String]
  },
  'dropable': { type: Boolean, default: false}
});

module.exports = dynamoose.model('mug', mugSchema)