const router = require("express").Router();
const Authrization = require("../../common/guard/authroization.guard");
const authController = require("./auth.controller");

router.post("/send-otp", authController.sendOTP);
router.post("/check-otp", authController.checkOTP);
router.get("/logout", Authrization, authController.logout);

module.exports = router;
