const Project = require('../models/project.server.model.js')

exports.getAll = function(req, res) {

    Project.find({}, function(err, project) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.status(200).send(project.sort(function (a, b) {
          return a.displayed_date - b.displayed_date
        }));
      }
    
    });
  
};

exports.createNew = function(req, res) {

  if(req.isAuthenticated){
    var projects = new Project(req.body);
    projects.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(projects);
      }
    });
  } else {
    res.status(403)
  }

};

exports.updateExisting = function(req, res) {

  if(req.isAuthenticated){
    var projects = req.body;

    var ObjectID = require('mongodb').ObjectID;

    Project.replaceOne({"_id": ObjectID(projects._id)}, projects, function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(projects);
      }
    });
  } else {
    res.status(403)
  }

};
