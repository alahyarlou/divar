const mainRoutes = require("express").Router();
const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/user/user.routes");

mainRoutes.use("/auth", authRoutes);
mainRoutes.use("/user", userRoutes);

module.exports = { mainRoutes };
