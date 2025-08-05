const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  liveLink: String,
  githubLink: String,
  imageUrl: String
});

module.exports = mongoose.model('Project', projectSchema);
