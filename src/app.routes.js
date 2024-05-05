const mainRoutes = require("express").Router();
const authRoutes = require("./modules/auth/auth.routes");
mainRoutes.use("/auth", authRoutes);

module.exports = { mainRoutes };
