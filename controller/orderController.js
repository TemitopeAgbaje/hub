const orderModel = require("../models/orderModel");
const categoryModel = require("../models/categoryModel");

exports.orderAnArtisan = async (req, res) => {
  const { name, description, category_id, phoneNumber, location, date, time } =
    req.body;

  const category = await categoryModel.findById({ _id: category_id });

  const order = await orderModel.create({
    name,
    description,
    phoneNumber,
    location,
    category,
    date,
    time,
  });
  return res.status(201).json({ message: "Order added successfully", order });
};

exports.getAllArtisansOrder = async (req, res) => {
  const { query } = req;

  const { category } = query;

  let findQuery = {};

  if (category) {
    findQuery = {
      ...findQuery,
      "category.name": { $regex: category, $options: "i" },
    };
  }

  const order = await orderModel.find(findQuery);
  return res.status(200).json({ status: "Orders Loaded Successfully", order });
};

exports.getAnArtisanOrder = async (req, res) => {
  const { id } = req.params;

  const order = await orderModel.findById({ _id: id });

  return res.status(200).json({ message: "Order Loaded Successfully", order });
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const order = await orderModel.findById({ _id: id });

  if (!order) {
    return res.status(400).json({ message: "No Order with this ID" });
  }

  if (req.body.name) {
    order.name = req.body.name;
  }

  if (req.body.location) {
    order.location = req.body.location;
  }

  await order.save();

  return res.status(200).json({ status: "Order Updated", order });
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;

  const order = await orderModel.findById({ _id: id });

  if (!order) {
    return res.status(400).json({ message: "No order with this ID" });
  }

  await order.delete();

  return res.status(200).json({ status: "Deleted successfully" });
};
