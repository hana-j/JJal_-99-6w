const mongoose = require("mongoose");

const { Schema } = mongoose;
const commentSchema = new Schema({
  commentId: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: Number,
    required: true,
  },
  commentVal: {
    type: String,
    required: true,
  },
  date: {
    type:Date,
    default:Date.now
  }
})
module.exports = mongoose.model("Comment", commentSchema);