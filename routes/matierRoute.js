const express = require("express");
const authController = require("../controllers/authController");
const matierController = require("../controllers/matierController");
const router = express.Router();
router
  .route("/:id")
  .get(matierController.getMatier)
  .delete(matierController.deleteMatier)
  .patch(matierController.updateMatier);
router
  .route("/")
  .post(matierController.createMatier)
  .get(matierController.getAllMatiers);
module.exports = router;
