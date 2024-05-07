const autoBind = require("auto-bind");
const status = require("http-status");
const CategoryMessage = require("./category.message");
const categoryService = require("./category.service");

class CategoryController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = categoryService;
  }
  async create(req, res, next) {
    try {
      const { name, slug, icon, parent } = req.body;
      await this.#service.create({ name, slug, icon, parent });

      return res.status(status.CREATED).json({
        message: CategoryMessage.CreateCategorySuccessfull,
      });
    } catch (error) {
      next(error);
    }
  }
  async find(req, res, next) {
    try {
      const categories = await this.#service.find();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
