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

<<<<<<< HEAD
=======
  if (req.isAuthenticated()) {

    var pressrelease = new Press(req.body);

>>>>>>> 39c8c46274e5fd36309e8141f9b331aaf961127c
    pressrelease.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(pressrelease);
      }
    });

<<<<<<< HEAD
};

exports.updateExisting = function(req, res) {
    
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
=======
  } else {

      res.status(401).send({
          success: false,
          message: "Request not authenticated."
      });
  }

};

exports.updateExisting = function(req, res) {

  if (req.isAuthenticated()) {

    var pressrelease = new Press(req.body);

    pressrelease.update({_id: pressrelease._id}, function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(pressrelease);
      }
    });

  } else {

      res.status(401).send({
          success: false,
          message: "Request not authenticated."
      });
  }
>>>>>>> 39c8c46274e5fd36309e8141f9b331aaf961127c

};