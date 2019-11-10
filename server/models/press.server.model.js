var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pressSchema = new Schema({
  text: {type: String, required: true},
  image: {type: String, required: false},

  displayed_date: {type: Date, required: true},
  changed_date: Date,
  created_date: Date
});

var Press = mongoose.model('Press', pressSchema, 'BioTork-Press');
module.exports = Press;