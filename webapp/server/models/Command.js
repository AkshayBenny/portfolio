const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommandSchema = new Schema(
  {
    command: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Command', CommandSchema);
