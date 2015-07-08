'use strict';

var _ = require('lodash');
var Text = require('./text.model');
var ObjectId = require('mongoose').Types.ObjectId;

// Get list of texts
exports.index = function (req, res) {
  Text.find({userId: new ObjectId(req.user._id)})
    .select('caption text creationDate')
    .sort('-creationDate')
    .exec(function (err, texts) {
      if (err) {
        return handleError(res, err);
      }
      texts.forEach(function(text){
        text.text = _.trunc(text.text, 300);
      });
      return res.json(200, texts);
    });
};

// Get a single text
exports.show = function (req, res) {
  Text.findById(req.params.id, function (err, text) {
    if (err) {
      return handleError(res, err);
    }
    if (!text) {
      return res.send(404);
    }
    return res.json(text);
  });
};

// Creates a new text in the DB.
exports.create = function (req, res) {
  req.body.userId = req.user._id;
  Text.create(req.body, function (err, text) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, text);
  });
};

// Updates an existing text in the DB.
exports.update = function (req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Text.findById(req.params.id, function (err, text) {
    if (err) {
      return handleError(res, err);
    }
    if (!text) {
      return res.send(404);
    }
    var updated = _.merge(text, req.body);
    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, text);
    });
  });
};

// Deletes a text from the DB.
exports.destroy = function (req, res) {
  Text.findById(req.params.id, function (err, text) {
    if (err) {
      return handleError(res, err);
    }
    if (!text) {
      return res.send(404);
    }
    text.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
