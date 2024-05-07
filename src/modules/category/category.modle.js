const { Schema, Types, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, index: true },
    icon: { type: String, required: true },
    parent: { type: Types.ObjectId, ref: "Category", required: true },
    parents: {
      type: [Types.ObjectId],
      ref: "Category",
      required: true,
      default: [],
    },
  },
  { toJSON: { virtuals: true }, versionKey: false, id: false }
);

CategorySchema.virtual("children", {
  ref: "Category",
  localField: "_id",
  foreignField: "parent",
});

const CategoryModel = model("Category", CategorySchema);

module.exports = CategoryModel;
