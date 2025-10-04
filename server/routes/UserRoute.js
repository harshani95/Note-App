const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/AuthMiddleware");

const userController = require("../controller/UserController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/verify", authenticate, userController.getUser);
module.exports = router;
