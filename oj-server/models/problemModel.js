const mongoose = require('mongoose');

const ProblemSchema = mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  difficulty: String,
});

const problemModel = mongoose.model('Problems', ProblemSchema);
module.exports = problemModel;


