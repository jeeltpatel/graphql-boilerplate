const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = mongoose.Schema({
  id: { type: Schema.ObjectId, auto: true },
  task: { type: String },
  summary: { type: String },
  priority: { type: String },
  state: { type: String }
});

module.exports = mongoose.model('Tasks', TaskSchema);