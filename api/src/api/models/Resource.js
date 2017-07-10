const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contractType: { type: String, required: true },
  positionRole: { type: String, required: true },
  positionLevel: { type: String, required: true },
  salary: { type: Number, default: 0.0 },
  joinedAt: { type: Date, default: null },
  leftAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
