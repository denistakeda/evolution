'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TextSchema = new Schema({
  caption: String,
  text: String,
  userId: Schema.Types.ObjectId,
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Text', TextSchema);
