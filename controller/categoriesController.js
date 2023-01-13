const categoryModel = require("../models/categoryModel");

exports.addCategory = async (req, res) => {
  const category = await categoryModel.create({
    name: req.body.name,
    description: req.body.description,
    group: req.body.group,
  });

  return res
    .status(201)
    .json({ message: "Category added sucessfully", category });
};

exports.getAllCategories = async (req, res) => {
  const categories = await categoryModel.find();
  res
    .status(200)
    .json({ message: "Categories Loaded Successfully", categories });
};

exports.getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await categoryModel.find({
      name: { $regex: name, $options: "i" },
    });

    res.status(200).json({ message: "Category Loaded Successfully", category });
  } catch (err) {
    return res.status(400).json({ message: "Bad Request" });
  }

  // const category= await categoryModel.find({name: /`${category}`/ });
};

exports.getCategoryByGroup = async (req, res) => {
  try {
    const { group } = req.params;
    const category = await categoryModel.find({
      group: { $regex: group, $options: "i" },
    });

    res.status(200).json({ message: "Category Loaded Successfully", category });
  } catch (err) {
    return res.status(400).json({ message: "Bad Request" });
  }
};

exports.getCategoryByID = async (req, res) => {
  const { id } = req.params;

  const category = await categoryModel.findById({ _id: id });

  return res
    .status(200)
    .json({ message: "Category Loaded Successfully", category });
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = await categoryModel.findById({ _id: id });

  if (!category) {
    return res.status(400).json({ message: "No Category with this ID" });
  }

  if (req.body.name) {
    category.name = req.body.name;
  }

  if (req.body.description) {
    category.description = req.body.description;
  }

  if (req.body.group) {
    category.group = req.body.group;
  }

  await category.save();

  return res.status(200).json({ status: "Category Updated", category });
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  const category = await categoryModel.findById({ _id: id });

  if (!category) {
    return res.status(400).json({ message: "No category with this ID" });
  }

  await category.delete();

  return res.status(200).json({ status: "Deleted successfully" });
};
