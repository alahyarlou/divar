const createHttpError = require("http-errors");
const userModel = require("../user/user.model");
const { AuthMessage } = require("./auth.messages");
const { randomInt } = require("crypto");
const jwt = require("jsonwebtoken");

class AuthService {
  #model;
  constructor() {
    this.#model = userModel;
  }
  async sendOTP(mobile) {
    const user = await this.#model.findOne({ mobile });
    const now = new Date().getTime();

    // create otpcode
    const otp = {
      code: randomInt(10000, 99999),
      expiresIn: now + 1000 * 60 * 2,
    };

    // create new user if not exist
    if (!user) {
      const newUser = await this.#model.create({
        otp,
        mobile,
      });
      return newUser;
    }

    // pervent to send otpcode if not expriesIn
    if (user.otp && user.otp.expiresIn > now) {
      throw new createHttpError.BadRequest(AuthMessage.otpCodeNotExpired);
    }

    // save otpcode in databse
    user.otp = otp;
    await user.save();
  }
  async checkOTP(mobile, code) {
    // check otpcode is send or not
    const user = await this.checkExistByMobile(mobile);

    // get time of now
    const now = new Date().getTime();

    // check expire of otp code
    if (user?.otp?.expiresIn < now)
      throw createHttpError.BadRequest(AuthMessage.otpCodeExpired);

    // check code OTP
    if (user?.otp.code !== code)
      throw createHttpError.BadRequest(AuthMessage.otpCodeIsNotValid);

    // check verified mobile is True OR False
    if (!user.verifiedMobile) {
      user.verifiedMobile = true;
    }
    user.save();

    // create jwt token
    const accessToken = await this.createJWT({ mobile, id: user._id });

    return { user, accessToken };
  }
  async checkExistByMobile(mobile) {
    const user = await this.#model.findOne({ mobile });
    if (!user) throw new createHttpError.NotFound(AuthMessage.userNotFound);
    return user;
  }
  async createJWT(payload) {
    return jwt.sign(payload, process.env.JWT_SECERET_KEY, {
      algorithm: "HS256",
      expiresIn: "1y",
    });
  }
}
module.exports = new AuthService();
