const router = require("express").Router();
const Authrization = require("../../common/guard/authroization.guard");
const userController = require("./user.controller");

router.get("/whois", Authrization, userController.whoisme);

module.exports = router;
