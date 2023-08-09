const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/blogController");
const upload = require("../upload/multer");

router.post("/", upload.single("image"), blogController.createPost);

// router
//   .route("/")
//   .post(upload.single("image"), blogController.createPost)
//   .get("/", blogController.getAllPosts);

// router
//   .route("/:id")
//   .get(blogController.getOnePost)
//   .put(blogController.updatePost)
//   .delete(blogController.deletePost);

module.exports = router;
