var mongoose = require('mongoose')
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

      console.log(press.sort(function (a, b) {
        return a.displayed_date - b.displayed_date
      }));
    
    });
  
};

exports.createNew = function(req, res) {
    
    var pressrelease = new Press(req.body);

    console.log(req);

    pressrelease.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(pressrelease);
      }
    });

};