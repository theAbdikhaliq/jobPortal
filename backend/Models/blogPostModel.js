const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Business", "Technology", "Health", "Politics"],
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: "User",
  },
});

const blogPost = mongoose.model("BlogPost", postSchema);
module.exports = blogPost;
