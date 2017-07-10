const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  resources: { type: Array, default: [] }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
