const express = require("express");
const authController = require("../controllers/authController");
const studentController = require("../controllers/studentController");
const router = express.Router();
router
  .route("/:id")
  .get(studentController.getStudent)
  .delete(studentController.deleteStudent)
  .patch(studentController.updateStudent);
router
  .route("/")
  .post(studentController.createStudent)
  .get(studentController.getAllStudents);
module.exports = router;
