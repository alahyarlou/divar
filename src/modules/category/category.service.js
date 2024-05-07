const autoBind = require("auto-bind");
const CategoryModel = require("./category.modle");

class CategoryService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = CategoryModel;
  }
}

module.exports = new CategoryService();
