const Press = require('../models/press.server.model.js')

exports.getAll = function(req, res) {

    Press.find({}, function(err, press) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.status(200).send(press.sort(function (a, b) {
          return a.displayed_date - b.displayed_date
        }));
      }
    
    });
  
};

exports.createNew = function(req, res) {

  if(req.isAuthenticated){
    var pressrelease = new Press(req.body);
    pressrelease.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(pressrelease);
      }
    });
  } else {
    res.status(403)
  }

};

exports.updateExisting = function(req, res) {

  if(req.isAuthenticated){
    var pressrelease = req.body;

    var ObjectID = require('mongodb').ObjectID;

    Press.replaceOne({"_id": ObjectID(pressrelease._id)}, pressrelease, function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(pressrelease);
      }
    });
  } else {
    res.status(403)
  }

};

exports.deleteEntry = function(req, res) {

  if(req.isAuthenticated){
    var pressrelease = req.body;

    var ObjectID = require('mongodb').ObjectID;

    Press.deleteOne({"_id": ObjectID(pressrelease._id)}, pressrelease, function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(pressrelease);
      }
    });
  } else {
    res.status(403)
  }

};
