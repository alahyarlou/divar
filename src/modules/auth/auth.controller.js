const NodeEnv = require("../../common/constant/env.enum");
const { AuthMessage } = require("./auth.messages");
const authSerivce = require("./auth.service");
const autoBind = require("auto-bind");
const CookiesNames = require("./../../common/constant/cookie.enum");

class AuthController {
  // private vairable
  #service;
  constructor() {
    this.#service = authSerivce;
    // auto bind package initialize
    autoBind(this);
  }

  // send OTPcode message with mobile
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      await this.#service.sendOTP(mobile);

      return res.json({
        message: AuthMessage.sucessfullySendOTP,
      });
    } catch (error) {
      next(error);
    }
  }

  // check OTPcode send is valid
  async checkOTP(req, res, next) {
    try {
      const { mobile, code } = req.body;
      const { user, accessToken } = await this.#service.checkOTP(mobile, code);

      // set token in cookie of browser
      return res
        .cookie(CookiesNames.accessToken, accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === NodeEnv.production,
        })
        .status(200)
        .json({
          message: AuthMessage.loginUserSucessfully,
          user,
          token: accessToken,
        });
    } catch (error) {
      next(error);
    }
  }

  // clear cookies and logout
  async logout(req, res, next) {
    try {
      return res.satus(200).clearCookie(CookiesNames.accessToken).json({
        message: "successfully logout",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
