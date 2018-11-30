const mongoose = require('mongoose');

const CommentModel = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Comment', CommentModel);