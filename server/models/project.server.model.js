var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  image: {type: String, required: false},
  doc_link: {type: String, required: false},

  displayed_date: {type: Date, required: true},
  changed_date: Date,
  created_date: Date
});

var Project = mongoose.model('Project', projectSchema, 'BioTork-Project');
module.exports = Project;