const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();
router.post("/register", authController.signup);
router.post("/login", authController.login);
router.post("/login-admin", authController.loginAdmin);
router.get("/logout", authController.logout);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);
router.use(authController.isBlocked);

router.get("/wishlist", userController.getWishlist);
router.patch("/updateMyPassword", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.delete("/deleteMe", userController.deleteMe);
router.patch("/save-address", userController.saveAddress);

router.use(authController.restrictTo("admin"));

router.route("/").get(userController.getAllUsers);
router.put("/block-user/:id", userController.blockUser);
router.put("/unblock-user/:id", userController.unblockUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
