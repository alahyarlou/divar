const NodeEnv = require("../../common/constant/env.enum");
const { UserMessage } = require("./user.messages");
const userSerivce = require("./user.service");
const autoBind = require("auto-bind");
const CookiesNames = require("../../common/constant/cookie.enum");

class UserController {
  // private vairable
  #service;
  constructor() {
    this.#service = userSerivce;
    // auto bind package initialize
    autoBind(this);
  }

  async whoisme(req, res, next) {
    try {
      const user = req?.user;
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
