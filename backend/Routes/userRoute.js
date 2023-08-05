const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const upload = require("../upload/multer");

router
  .route("/")
  .delete(userController.deleteOneUser)
  .put(userController.updateOneUser);
router.post("/signup", upload.single("image"), userController.signup);
router.post("/login", userController.login);

module.exports = router;
