const createHttpError = require("http-errors");
const authroizationMessage = require("../messages/auth.message");
const jwt = require("jsonwebtoken");
const userModel = require("../../modules/user/user.model");

require("dotenv").config();

const Authrization = async (req, res, next) => {
  try {
    // get token from cookie
    const token = req?.cookies?.accessToken || undefined;

    // check token is exist
    if (!token)
      throw new createHttpError.Unauthorized(authroizationMessage.Login);

    // verify token
    const data = jwt.verify(token, process.env.JWT_SECERET_KEY);


    if (typeof data === "object" && "id" in data) {
      //find user from id
      const user = await userModel
        .findOne({ _id: data.id }, { otp: 0, __v: 0, updatedAt: 0 })
        .lean();

      // not found user
      if (!user)
        throw new createHttpError.NotFound(
          authroizationMessage.NotFoundAccount
        );

      req.user = user;

      return next();
    }

    throw new createHttpError.Unauthorized(authroizationMessage.InvalidToken);
  } catch (error) {
    next(error);
  }
};

module.exports = Authrization;
