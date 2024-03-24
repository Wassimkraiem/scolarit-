const express = require("express");
const authController = require("../controllers/authController");
const profController = require("../controllers/profController");
const router = express.Router();
router
  .route("/:id")
  .get(profController.getProf)
  .delete(profController.deleteProf)
  .patch(profController.updateProf);
router
  .route("/")
  .post(profController.createProf)
  .get(profController.getAllProfs);
router.post("/markAbsence", profController.markAbsence);
module.exports = router;
