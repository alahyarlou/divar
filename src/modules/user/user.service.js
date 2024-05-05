const createHttpError = require("http-errors");
const userModel = require("./user.model");
const { UserMessage } = require("./user.messages");

class UserService {
  #model;
  constructor() {
    this.#model = userModel;
  }
}
module.exports = new UserService();
