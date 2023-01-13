const artisanModel = require("../models/artisanModel");
const categoryModel = require("../models/categoryModel");

exports.addArtisan = async (req, res) => {
  const { name, description, category_id, phoneNumber, location } = req.body;

  const category = await categoryModel.findById({ _id: category_id });

  const artisan = await artisanModel.create({
    name,
    description,
    phoneNumber,
    location,
    category,
  });
  return res.status(201).json({ message: "Artisan added", artisan });
};

exports.getAllArtisans = async (req, res) => {
  const { query } = req;

  const { name, category, location } = query;

  let findQuery = {};

  if (name) {
    findQuery = {
      ...findQuery,
      name: { $regex: name, $options: "i" },
    };
  }

  if (category) {
    findQuery = {
      ...findQuery,
      "category.name": { $regex: category, $options: "i" },
    };
  }

  if (location) {
    findQuery = { ...findQuery, location: { $regex: location, $options: "i" } };
  }

  const artisans = await artisanModel.find(findQuery);
  return res
    .status(200)
    .json({ status: "Artisan Loaded Successfully", artisans });
};

exports.getAnArtisan = async (req, res) => {
  const { id } = req.params;

  const artisan = await artisanModel.findById({ _id: id });

  return res
    .status(200)
    .json({ message: "Arstian Loaded Successfully", artisan });
};

exports.updateArtisan = async (req, res) => {
  const { id } = req.params;
  const artisan = await artisanModel.findById({ _id: id });

  if (!artisan) {
    return res.status(400).json({ message: "No Artisan with this ID" });
  }

  if (req.body.name) {
    artisan.name = req.body.name;
  }

  if (req.body.location) {
    artisan.location = req.body.location;
  }

  if (req.body.phoneNumber) {
    artisan.phoneNumber = req.body.phoneNumber;
  }

  if (req.body.description) {
    artisan.description = req.body.description;
  }

  await artisan.save();

  return res.status(200).json({ status: "Artisan Updated", artisan });
};

exports.deleteArtisan = async (req, res) => {
  const { id } = req.params;

  const artisan = await artisanModel.findById({ _id: id });

  if (!artisan) {
    return res.status(400).json({ message: "No order with this ID" });
  }

  await artisan.delete();

  return res.status(200).json({ status: "Deleted successfully" });
};
