'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TextSchema = new Schema({
  caption: String,
  text: String,
  userId: Schema.Types.ObjectId
});

module.exports = mongoose.model('Text', TextSchema);
