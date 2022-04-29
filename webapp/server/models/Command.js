const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommandSchema = new Schema(
  {
    id: { type: String },
    command: { type: String, required: true },
    read: { type: Boolean, required: true, default: false },
  },

  { timestamps: true }
);

module.exports = mongoose.model('Command', CommandSchema);
