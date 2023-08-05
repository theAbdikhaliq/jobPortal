const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

router
  .route("/")
  .post(postController.createPost)
  .get(postController.getAllPosts);
router
  .route("/:id")
  .get(postController.getOnePost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
