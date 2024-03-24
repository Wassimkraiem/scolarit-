const express = require("express");
const authController = require("../controllers/authController");
const classController = require("../controllers/classController");
const router = express.Router();
router
  .route("/:id")
  .get(classController.getClass)
  .delete(classController.deleteClass)
  .patch(classController.updateClass);
router
  .route("/")
  .post(classController.createClass)
  .get(classController.getAllClasss);
module.exports = router;
